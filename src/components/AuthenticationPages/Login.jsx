import { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleLogin = () => {
    window.open("https://hexpress.onrender.com/auth/google", "_self")
  }

  const handleLogin = () => {
    if (!email || !password) {
    }
  };

  return (
    <section className={style.loginSection}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Login to your account</h2>
        <p className={style.loginText}>
          Welcome back! Please enter your details
        </p>
        <form className={style.loginForm}>
          <label className={style.loginLabel}>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={style.loginInput}
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={style.loginLabel}>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="************"
              className={style.loginInput}
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Link to={"/reset-password"} className={style.forgotPasswordLink}>
            Forgot password?
          </Link>
          <button
            type="submit"
            className={style.loginButton}
            onClick={handleLogin}
          >
            Login
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