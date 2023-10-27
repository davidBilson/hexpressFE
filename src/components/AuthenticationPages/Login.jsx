import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import style from './Login.module.css';
import {Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );
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
              autoComplete='off'
            />
          </label>
          <label className={style.loginLabel}>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder='************'
              className={style.loginInput}
              autoComplete='off'
            />
          </label>
          <Link to={'/reset-password'} className={style.forgotPasswordLink}>Forgot password?</Link>
          <button type='submit' className={style.loginButton}>
            Login
          </button>
        </form>
        <p className={style.optionDeclare}>or</p>
        <button type='submit' onClick={() => login()} className={style.googleLoginButton}>
            Continue with Google <FcGoogle className={style.googleLoginIcon} />
          </button>
        <p className={style.signUp} >Don't have an account? &nbsp;
          <Link to={'/sign-up'} className={style.signUpLink}>Sign up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;