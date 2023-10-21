import React from 'react'
import {Link} from 'react-router-dom'
import style from './Authentication.module.css'

const ResetPassword = () => {

  return (
    <section>
        <h1>Forgot Password?</h1>
        <p>Don't worry, you are not alone!</p>
        <form>
            <input type="email" name="recovery_email" placeholder='Enter your email address' />
            <button type='submit'>Send recovery link to email</button>
        </form>
        <Link to={'/sign-in'}>Back to Sign In</Link>
        <div>A recovery link would be sent to the email provided. Click on the link, and follow the instructions to create a new password</div>
    </section>
  )
}

export default ResetPassword