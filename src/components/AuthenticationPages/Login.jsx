import React from 'react';
import style from './Login.module.css';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <section className={style.loginSection}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Login to your account</h2>
        <p className={style.loginText}>Welcome back! Please enter your details</p>
        <form className={style.loginForm}>
          <label className={style.loginLabel}>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              placeholder='Enter your email address'
              className={style.loginInput}
            />
          </label>
          <label className={style.loginLabel}>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder='************'
              className={style.loginInput}
            />
          </label>
          <Link to={'/sign-in'} className={style.forgotPasswordLink}>Forgot password?</Link>
          <button type='submit' className={style.loginButton}>
            Login
          </button>
        </form>
        <p>Don't have an account?
          <Link to={'/sign-up'} className={style.signUpLink}>Sign up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;