import React from "react";
import { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toastError } from "../../../helpers/toast";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wrongID, setwrongID] = useState(false);
  const [verifyMfa, setverifyMfa] = useState(false);
  const [token, setToken] = useState();
  const [totp, settotp] = useState();
  const [wrongtotp, setwrongtotp] = useState();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [signInInfo, setsignInInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        new URLSearchParams({
          username: signInInfo.username,
          password: signInInfo.password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.mfa_enabled) {
        setToken(response.data.access_token);
        setverifyMfa(true);
      } else {
        localStorage.setItem("token", response.data.access_token);
        window.location = "/user-screen";
      }
    } catch (error) {
      if (
        (error.response && error.response.status === 500) ||
        error.code === "ERR_NETWORK"
      ) {
        toastError(
          "An error has been occured while processing you request. Please try again!"
        );
      } else {
        console.error(error);
        setwrongID(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setsignInInfo({ ...signInInfo, [input.name]: input.value });
  };

  const handleSubmitTotp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mfa/validate-totp",
        {
          username: signInInfo.username,
          totp: totp,
        }
      );
      localStorage.setItem("token", token);
      window.location = "/user-screen";
    } catch (error) {
      setwrongtotp(true);
      setLoading(false);
      console.log({
        username: signInInfo.username,
        totp: totp,
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="username"
            onChange={handleChange}
            value={signInInfo.username}
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            onChange={handleChange}
            value={signInInfo.password}
            placeholder="Password"
            required
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            👁
          </span>
        </div>
        {wrongID && (
          <div className="wrong-id">
            <i> *Wrong username or password! </i>
          </div>
        )}
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        {loading ? (
          <div className="sign_in_loading">
            <i class="fa-solid fa-spinner fa-spin"></i>
          </div>
        ) : (
          <button type="submit" className="login-button">
            Sign In
          </button>
        )}
      </form>
      <a href="/" className="forgot-password">
        Forgot your password?
      </a>
      <p className="switch-form">
        Don't have an account? <Link to="/sign-up">Sign up now</Link>
      </p>

      {verifyMfa && (
        <div className="el-verifyMfa-box">
          <div className="ad-verifyMfa-box-content">
            <h3>Please enter the OTP in you Authenticator app.</h3>
            {wrongtotp && <span style={{ color: "red" }}>*Wrong OTP</span>}
            <form onSubmit={handleSubmitTotp}>
              <div className="el-otp-input">
                <input
                  type="number"
                  onChange={(e) => settotp(e.target.value)}
                  value={totp}
                ></input>
              </div>
              {loading ? (
                <div className="sign_in_loading">
                  <i class="fa-solid fa-spinner fa-spin"></i>
                </div>
              ) : (
                <button type="submit" className="submit-button">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
