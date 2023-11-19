import style from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Register = () => {
  // states to manage register form data
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setRegisterFormData(prevData => {
      return {
        ...prevData,
        [e.target.name] : e.target.value
      }
    })
  }

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    if (registerFormData.password.length < 8) {
      toast.error('Password is less than 8 characters!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setRegisterFormData(prevData => {
        return {
          ...prevData,
          password: "",
          confirmPassword: "",
        }
      })
      return;
    }
  }

  return (
    <section className={style.loginSection}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Create a new account</h2>
        <p className={style.loginText}>Please fill in the form below</p>

        {/**** Login form ****/}

        <form 
          className={style.loginForm}
          onSubmit={submitRegisterForm}
        >
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
              placeholder='************'
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
              placeholder='************'
              className={style.loginInput}
              autoComplete='off'
              value={registerFormData.confirmPassword}
              onChange={handleChange}
              style={{
                border: registerFormData.confirmPassword === "" || registerFormData.password === registerFormData.confirmPassword ? "" : "1px solid red"
              }}
            />
          </label>
          <button type='submit' className={style.loginButton}>
            Create account
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