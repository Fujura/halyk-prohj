import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
    } catch (error) {}
  }
  return (
    <section className={styles.loginContainer}>
      <h1 className={styles.loginHeader}>Sign In</h1>
      <div className="">
        <div className=""></div>
        <div className="">
          <form onSubmit={onSubmit}>
            <input
              className=""
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="">
              <input
                className=""
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
            </div>
            <div className="">
              <p className="mb-6">
                Don't have an account?
                <Link to="/sign-up" className="">
                  Register
                </Link>
              </p>
            </div>
            <button className="" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
