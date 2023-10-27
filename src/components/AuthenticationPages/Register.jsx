import style from './Register.module.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {FcGoogle} from 'react-icons/fc'

const Register = () => {
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
        <h2 className={style.loginTitle}>Create a new account</h2>
        <p className={style.loginText}>Please fill in the form below</p>
        <form className={style.loginForm}>
          <label className={style.loginLabel}>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder='Enter your first name'
              className={style.loginInput}
              autoComplete='off'
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
            />
          </label>
          <button type='submit' className={style.loginButton}>
            Create account
          </button>
        </form>
        <p className={style.optionDeclare}>or</p>
        <button type='submit' onClick={() => login()} className={style.googleLoginButton}>
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