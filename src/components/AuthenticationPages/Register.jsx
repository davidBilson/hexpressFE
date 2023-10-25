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
        <p className={style.signUp} >Already have an account? &nbsp;
          <Link to={'/sign-in'} className={style.signUpLink}>Login</Link>
        </p>
      </div>
    </section>
  )
}

export default Register