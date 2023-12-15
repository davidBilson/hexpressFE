import { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast   } from 'react-toastify';


const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [logging, setLogging] = useState(false);

  const handleEmailChange = (e) => {
    // update email
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: e.target.value
    }));
  };

  const toastErrorProperties = {
    position: "top-right",
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
      margin: "auto"
    }
  }

  const handlePasswordChange = (e) => {
    // update password
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: e.target.value
    }));
  };

  // add random number to input field name attribute to remove autocomplete
  const randomName = Math.random().toString(36).substring(2, 15);

  // google login trigger function
  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  // handle login function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogging(true);

    // store state values as new variables
    const email = formData.email;
    const password = formData.password;

    // attempt to authenticate users by sending login credentials to server
    try {
      const response = await axios.post("http://localhost:5000/user/signin", {email, password});
      // check response in console
      console.log(response)
      console.log(response.data);

      if (response.data.success === false) {
        toast.error(response.data.message, toastErrorProperties );
          setLogging(false);
      } else {
        
      }
    } catch(error) {
        console.log(error.message);
        toast.error(error.message, toastErrorProperties);
        setLogging(false);
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
              spellcheck="false"
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
              logging ? 
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