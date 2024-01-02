import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [errors, seterrors] = useState({});
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const ValidateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      if (formData.email.length === 0) {
        errors.email = "Enter email address";
      } else {
        errors.email = "Enter valid email address";
      }
    }
    if (formData.password.length === 0) {
      errors.password = "Please Enter Password";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    seterrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    if (ValidateForm()) {
      console.log(formData);
      localStorage.setItem("authtoken", "login");
      navigate("/superadmindashbord");
    }
  };

  // Eye Toggle
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="account-pages  pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-primary bg-soft">
                  <div className="row">
                    <div className="col-8">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>
                          Sign in to continue to <br />
                          Clinical Reasearch.
                        </p>
                      </div>
                    </div>
                    <div className="col-4 align-self-end">
                      <img
                        src="assets/images/profile-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="auth-logo">
                    <a href="index.html" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo-light.svg"
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>

                    <a href="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-dark">
                          CR
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2">
                    <form
                      onSubmit={loginSubmitHandler}
                      className="form-horizontal"
                      // action="/superadmindashbord"
                    >
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          onChange={HandleChange}
                          value={formData.email}
                          type="text"
                          name="email"
                          className="form-control"
                          id="username"
                          placeholder="Enter username"
                        />
                        {errors.email && (
                          <p className="my-2" style={{ color: "red" }}>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            onChange={HandleChange}
                            type={type}
                            value={formData.password}
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                          <button
                            className="btn btn-light password-addon"
                            type="button"
                            id="password-addon1"
                            onClick={handleToggle}
                          >
                            <Icon
                              className="absolute mr-10"
                              icon={icon}
                              // size={25}
                            />
                          </button>
                        </div>
                        {errors.password && (
                          <p className="my-2" style={{ color: "red" }}>
                            {errors.password}
                          </p>
                        )}
                      </div>

                      {/* <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-check"
                        >
                          Remember me
                        </label>
                      </div> */}

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <a href="forgot-password.html" className="text-muted">
                          <i className="mdi mdi-lock me-1"></i> Forgot your
                          password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    Don't have an account ?{" "}
                    <a href="/" className="fw-medium text-primary">
                      {" "}
                      Company Registration{" "}
                    </a>{" "}
                  </p>
                  <p>
                    © <span className="mx-1">{new Date().getFullYear()}</span>
                    CR. <a href="/">Privacy Policy</a> |{" "}
                    <a href="/">Terms & Conditions</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end account-pages --> */}
    </>
  );
};

export default Home;
