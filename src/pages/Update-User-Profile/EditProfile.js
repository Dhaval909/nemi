import React from "react";


const EditProfile = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <div className="row">
                      <div className="col-8">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Update Your info.</p>
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

                      <a href="index.html" className="auth-logo-dark">
                        <div className="avatar-md profile-user-wid mb-4">
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-title rounded-circle bg-light"
                            height="34"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="p-2">
                      <form className="form-horizontal" action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter First name"
                                value="Henry"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="lastname" className="form-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                placeholder="Enter Last name"
                                value="Deo"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                                value="Henry@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="mobile" className="form-label">
                                Mobile Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                placeholder="Mobile Number"
                                value="888 8888 888"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 d-grid">
                          <button
                            className="btn btn-primary waves-effect waves-light"
                            type="submit"
                          >
                            Update
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#changePassordModal"
                            className="text-muted"
                          >
                            <i className="mdi mdi-lock me-1"></i> Change
                            Password
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
