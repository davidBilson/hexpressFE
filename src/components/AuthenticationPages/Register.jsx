import style from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'

const Register = () => {
  // states to manage register form data
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData(prevData => ({
      ...prevData,
      [name]: value,
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

  // register user function
  const submitRegisterForm = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (registerFormData.password.length < 8) {
      toast.error('Password is too short!', toastErrorProperties );
      setRegisterFormData(prevData => {
        return {
          ...prevData,
          password: "",
          confirmPassword: "",
        }
      });
      setProcessing(false);
      return;
    }

    if (registerFormData.password !== registerFormData.confirmPassword) {
      toast.error('Password does not match, retry!', toastErrorProperties);
      setRegisterFormData(prevData => {
        return {
          ...prevData,
          password: "",
          confirmPassword: "",
        }
      });
      setProcessing(false);
      return;
    }

    const firstName = registerFormData.firstName;
    const lastName = registerFormData.lastName;
    const email = registerFormData.email;
    const password = registerFormData.password;

    // send credentials to server
    try {
      const response = await axios.post("http://localhost:5000/user/signup", {
        firstName,
        lastName,
        email,
        password
      });
      console.log(response);
    } catch (error) {
      console.error(error);
      setProcessing(false);
      toast.error('Registration failed!', toastErrorProperties);
    }
  }

  return (
    <section className={style.loginSection}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Create a new account</h2>
        <p className={style.loginText}>Please fill in the form below</p>
        {/**** Login form ****/}
        <form className={style.loginForm} onSubmit={submitRegisterForm}>
          <label className={style.loginLabel}>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder='Enter your first name'
              className={style.loginInput}
              autoComplete='off'
              value={registerFormData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className={style.loginLabel}>
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              placeholder='Enter your last name'
              className={style.loginInput}
              autoComplete='off'
              value={registerFormData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label className={style.loginLabel}>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              placeholder='Enter your email address'
              className={style.loginInput}
              autoComplete='off'
              value={registerFormData.email}
              required
              onChange={handleChange}
            />
          </label>
          <label className={style.loginLabel}>
            <span>Create a password</span>
            <input
              type="password"
              name="password"
              placeholder='Enter new password'
              className={style.loginInput}
              autoComplete='off'
              value={registerFormData.password}
              onChange={handleChange}
              required
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Password must not be less than 8 characters"
            />
          </label>
          <label className={style.loginLabel}>
            <span>Confirm password</span>
            <input
              required
              type="password"
              name="confirmPassword"
              placeholder='Confirm password'
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Password must match"
              className={style.loginInput}
              autoComplete='off'
              value={registerFormData.confirmPassword}
              onChange={handleChange}
              style={{
                border: registerFormData.confirmPassword === "" || registerFormData.password === registerFormData.confirmPassword ? "" : "1px solid red",
                background: registerFormData.confirmPassword === "" || registerFormData.password === registerFormData.confirmPassword ? "" : "var(--lightred)"
              }}
            />
          </label>
          <button type='submit' className={style.signupButton}>
            {
              processing ? 
              <span className={style["loading-container"]}>
                <span className={style["loading-message"]}>Creating your account, please wait</span>
              </span> :
              "Create account"
            }
          </button>
        </form>
        <p className={style.optionDeclare}>or</p>
        <button 
          type='submit' 
          // onClick={() => login()} 
          className={style.googleLoginButton}>
            Continue with Google <FcGoogle className={style.googleLoginIcon} />
          </button>
        <p className={style.signUp} >Already have an account? &nbsp;
          <Link to={'/sign-in'} className={style.signUpLink}>Login</Link>
        </p>
      </div>
    </section>
  )
}

export default Register