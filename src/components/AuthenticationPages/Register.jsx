import style from './Register.module.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className={style.loginSection}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Create a new account</h2>
        <p className={style.loginText}>Please fill in the form below</p>
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
        <p className={style.signUp} >Don't have an account?
          <Link to={'/sign-up'} className={style.signUpLink}>Sign up</Link>
        </p>
      </div>
    </section>
  )
}

export default Register