import { useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast   } from 'react-toastify';
import useStore from "../../store/useStore";


const Login = () => {

  const navigate = useNavigate()

  // access states from store
  const userName = useStore((initialState) => initialState.userName);
  const userEmail = useStore((initialState) => initialState.userEmail);
  const userId = useStore((initialState) => initialState.userId);
  const user = useStore((initialState) => initialState.user)

  // console.log(
  //   "UserName:", userName,
  //   "\nUserEmail:", userEmail,
  //   "\nUserId:", userId,
  //   "\nUser:", user
  // );
  
  // access actions from store
  const setUserName = useStore((initialState) => initialState.setUserName);
  const setUserEmail = useStore((initialState) => initialState.setUserEmail);
  const setUserId = useStore((initialState) => initialState.setUserId);
  const userLoggedIn = useStore((initialState) => initialState.setUser);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [processing, setProcessing] = useState(false);

  const handleEmailChange = (e) => {
    // Update email in form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: e.target.value,
    }));
  };
  const handlePasswordChange = (e) => {
    // Update password in form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: e.target.value,
    }));
  };

  const toastErrorProperties = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      width: '250px',
      fontSize: '14px',
      margin: "auto",
      borderRadius: "6px",
    }
  }

  // add random number to input field name attribute to remove autocomplete
  const randomName = Math.random().toString(36).substring(2, 15);

  // google login trigger function
  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  // login function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // store state values as new variables
    const email = formData.email;
    const password = formData.password;

    if (password.length < 8) {
      toast.error('Password is too short!', toastErrorProperties );
      setFormData(prevData => {
        return {
          ...prevData,
          password: ""
        }
      });
      setProcessing(false);
      return;
    }

    // attempt to authenticate users by sending login credentials to server
    try {
      const response = await axios.post("http://localhost:5000/user/signin", {email, password});

      if (response.data.success === true) {
        toast.error(response.data.message, toastErrorProperties );
        // update the user states on zustand store to true
        setUserName(response.data.userFirstName + ' ' + response.data.userLastName);
        setUserEmail(response.data.userEmail);
        setUserId(response.data.id);
        window.sessionStorage.setItem('userId', response.data.id)
        userLoggedIn(true);
        setProcessing(false);
        navigate('/dashboard');
      } else {
        toast.success(response.data.message, toastErrorProperties)
        setProcessing(false);
      }
    } catch(error) {
        console.log(error.message);
        toast.error("Login failed!", toastErrorProperties);
        setProcessing(false);
    }
  }

  return (
    <section className={style.loginSection}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Login to your account</h2>
        <p className={style.loginText}>
          Welcome back! Please enter your details
        </p>
        <form className={style.loginForm} autoComplete="off" onSubmit={handleSubmit} >
          <label className={style.loginLabel}>
            <span>Email Address</span>
            <input
              type="email"
              name={`email_${randomName}`}
              placeholder="Enter your email address"
              className={style.loginInput}
              autoComplete="off"
              id="fieldId"
              autoCorrect="off"
              value={formData.email}
              onChange={handleEmailChange}
            />
          </label>
          <label className={style.loginLabel}>
            <span>Password</span>
            <input
              type="password"
              name={`password_${randomName}`}
              placeholder="Enter your password"
              className={style.loginInput}
              autoComplete="new-password"
              value={formData.password}
              onChange={handlePasswordChange}
            />
          </label>
          <Link to={"/reset-password"} className={style.forgotPasswordLink}>
            Forgot password?
          </Link>
          <button
            type="submit"
            className={style.loginButton}
            disabled={ !formData.email || !formData.password }
          >
            {
              processing ? 
              <span className={style["loading-container"]}>
                <span className={style["loading-message"]}>Encrypting and validating information</span>
              </span> :
              "Login"
            }
          </button>
        </form>
        <p className={style.optionDeclare}>or</p>
        
        <button
          type="submit"
          onClick={googleLogin}
          className={style.googleLoginButton}
        >
          Continue with Google <FcGoogle className={style.googleLoginIcon} />
        </button>

        <p className={style.signUp}>
          Don't have an account? &nbsp;
          <Link to={"/sign-up"} className={style.signUpLink}>
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;