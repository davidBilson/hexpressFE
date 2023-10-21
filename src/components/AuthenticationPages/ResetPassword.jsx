import React from 'react'
import { Link } from 'react-router-dom'
import style from './ResetPassword.module.css'

const ResetPassword = () => {

  return (
    <section className={style.resetPasswordSection}>
        <h1 className={style.resetPasswordTitle}>Forgot Password?</h1>
        <p className={style.resetPasswordText}>Don't worry, you are not alone!</p>
        <form className={style.resetPasswordForm}>
            <input
                type="email"
                name="recovery_email"
                placeholder='Enter your email address'
                className={style.resetPasswordInput}
            />
            <button type='submit' className={style.resetPasswordButton}>
                Send recovery link to email
            </button>
        </form>
        <Link to={'/sign-in'} className={style.resetPasswordLink}>Back to Sign In</Link>
        <div className={style.resetPasswordInfo}>
            A recovery link would be sent to the email provided. Click on the link, and follow the instructions to create a new password
        </div>
    </section>
  )
}

export default ResetPassword;