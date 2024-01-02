import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("authtoken");

    Navigate("/");
  };
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}{" "}
      <div
        className="modal fade"
        id="changePassordModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-horizontal" action="">
                <div className="mb-3">
                  <label className="form-label">Current password </label>
                  <div className="input-group auth-pass-inputgroup">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Current password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                    <button
                      className="btn btn-light password-addon"
                      type="button"
                      id="password-addon"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">New password</label>
                  <div className="input-group auth-pass-inputgroup">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                    <button
                      className="btn btn-light password-addon"
                      type="button"
                      id="password-addon1"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm password</label>
                  <div className="input-group auth-pass-inputgroup">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                    <button
                      className="btn btn-light password-addon"
                      type="button"
                      id="password-addon2"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* <!-- LOGO --> */}
            <div className="navbar-brand-box">
              <Link to="/superadmindashbord" className="logo logo-light">
                <span className="logo-sm">
                  <h5 className="text-white mt-3">CR</h5>
                </span>
                <span className="logo-lg">
                  <h5 className="text-white mt-3">
                    Clinical <br />
                    Research
                  </h5>
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 d-lg-none font-size-16  header-item waves-effect waves-light"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            {/* <!-- App Search--> */}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block ml-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-hands-helping"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* <!-- item--> */}
                <a
                  className="dropdown-item"
                  href="layouts-hori-boxed-width.html"
                >
                  <i className="fas fa-directions font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">Take a Tour</span>
                </a>
                <a
                  className="dropdown-item"
                  href="layouts-hori-boxed-width.html"
                >
                  <i className="fas fa-question-circle font-size-16 align-middle me-1"></i>
                  <span key="t-my-wallet">Faq</span>
                </a>

                <a
                  className="dropdown-item"
                  href="layouts-hori-boxed-width.html"
                >
                  <i className="fas fa-headset font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Customer Service</span>
                </a>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  <a
                    href="layouts-hori-boxed-width.html"
                    className="text-reset notification-item"
                  >
                    <div className="media">
                      <div className="avatar-xs me-3">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1" key="t-your-order">
                          Training complted by SC
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            Shreeya has completed her training for protocol2
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago 20 May 2021</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="layouts-hori-boxed-width.html"
                    className="text-reset notification-item"
                  >
                    <div className="media">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Document Modified</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-simplified">
                            CRO Kartik has modified document in study2 site1
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">
                              1 hours ago 20 May 2021
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="layouts-hori-boxed-width.html"
                    className="text-reset notification-item"
                  >
                    <div className="media">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1" key="t-shipped">
                          PI Signature
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            PI Smith has signture for training completation
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago 20 May 2021</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    
                    href="#"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                  Henry
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* <!-- item--> */}
                <Link className="dropdown-item" to="/edit-profile">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">Profile</span>
                </Link>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#changePassordModal"
                >
                  <i className="mdi mdi-lock font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">Change Password</span>
                </a>

                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item text-danger"
                  onClick={logoutHandler}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
            <div className="collapse navbar-collapse" id="topnav-menu-content">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/superadmindashbord"
                    // id="topnav-dashboard"
                    role="button"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    <span key="t-dashboards">Dashboards</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/user-menu-deshbord"
                    // id="topnav-ecommerce"
                    role="button"
                  >
                    <i className="bx bx-user-circle me-2"></i>
                    <span key="t-ecommerce">Users</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-ecommerce"
                  >
                    <Link
                      to="/listof-user-role2"
                      className="dropdown-item"
                      // key="t-inbox"
                    >
                      List Of Role
                    </Link>
                    <Link
                      to="/listof-user-responsibility2"
                      className="dropdown-item"
                      // key="t-read-email"
                    >
                      List Of Responsibility
                    </Link>
                    <Link
                      to="/listof-permission2"
                      className="dropdown-item"
                      // key="t-read-email"
                    >
                      List of Permission
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/admin-menudashbord"
                    id="topnav-ecommerce"
                    role="button"
                  >
                    <i className="bx bx-user-circle me-2"></i>
                    <span key="t-ecommerce">Admin</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-ecommerce"
                  >
                    <Link
                      to="/listof-user-role2"
                      className="dropdown-item"
                      key="t-inbox"
                    >
                      List Of Role
                    </Link>
                    {/* <!-- <a href="list-of-user-responsibility.php" className="dropdown-item" // key="t-read-email">List Of Responsibility</a> --> */}
                    <Link
                      to="/listof-permission2"
                      className="dropdown-item"
                      // key="t-read-email"
                    >
                      List of Permission
                    </Link>

                    <Link
                      to="/viewemployeeprofile"
                      className="dropdown-item"
                      // key="t-read-email"
                    >
                      List of User
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/companymenudashbord"
                    id="topnav-ecommerce"
                    role="button"
                  >
                    <i className="fas fa-laptop-house me-2"></i>
                    <span key="t-ecommerce">Company</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-ecommerce"
                  >
                    <Link
                      to="/createcompany"
                      className="dropdown-item"
                      // key="t-read-email"
                    >
                      Create Company
                    </Link>
                    <Link
                      to="/listofcompanies"
                      className="dropdown-item"
                      key="t-inbox"
                    >
                      List Of Company
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-ecommerce"
                    role="button"
                  >
                    <i className="bx bx-user-circle me-2"></i>
                    <span key="t-ecommerce">Users</span>
                    <div className="arrow-down"></div>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-ecommerce"
                  >
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-email"
                        role="button"
                      >
                        <span key="t-email">Role </span>
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <div className="dropdown">
                          <a
                            className="dropdown-item dropdown-toggle arrow-none"
                            href="#"
                            id="topnav-email"
                            role="button"
                          >
                            <span key="t-email">Admin </span>
                            <div className="arrow-down"></div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="topnav-email"
                          >
                            <a
                              href="list-of-user-role.html"
                              className="dropdown-item"
                              key="t-inbox"
                            >
                              List Of Role{" "}
                            </a>
                            <a
                              href="list-of-user-responsibility.html"
                              className="dropdown-item"
                              // key="t-read-email"
                            >
                              List Of Responsibility
                            </a>
                            <a
                              href="list-permission.html"
                              className="dropdown-item"
                              // key="t-read-email"
                            >
                              List of Permission
                            </a>

                            <a
                              href="view-employee-profile.html"
                              className="dropdown-item"
                              // key="t-read-email"
                            >
                              List of User
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            className="dropdown-item dropdown-toggle arrow-none"
                            href="#"
                            id="topnav-email"
                            role="button"
                          >
                            <span key="t-email">Users </span>
                            <div className="arrow-down"></div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="topnav-email"
                          >
                            <a
                              href="list-of-user-role2.html"
                              className="dropdown-item"
                              key="t-inbox"
                            >
                              List Of Role{" "}
                            </a>
                            <a
                              href="list-of-user-responsibility2.html"
                              className="dropdown-item"
                              // key="t-read-email"
                            >
                              List Of Responsibility
                            </a>
                            <a
                              href="list-permission2.html"
                              className="dropdown-item"
                              // key="t-read-email"
                            >
                              List of Permission
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        key="t-product-detail"
                      >
                        <span key="t-email">Company </span>
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <a
                          href="list-of-companies.html"
                          className="dropdown-item"
                          // key="t-read-email"
                        >
                          Create Company
                        </a>
                        <a
                          href="list-of-companies.html"
                          className="dropdown-item"
                          key="t-inbox"
                        >
                          List out Company{" "}
                        </a>
                      </div>
                    </div>
                    {/* <!-- <a href="list-of-country.php" className="dropdown-item" key="t-product-detail">List of country</a>
                                                      <a href="list-of-state.php" className="dropdown-item" key="t-product-detail">List of state</a>
                                                      <a href="list-of-city.php" className="dropdown-item" key="t-orders">List of city </a> --> */}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/company-admin-dashbord"
                    id="topnav-uielement"
                    role="button"
                  >
                    <i className="fas fa-laptop-house me-2"></i>
                    <span key="t-ui-elements"> Company Admin</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-ecommerce"
                  >
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        key="t-product-detail"
                      >
                        <span key="t-email">Study </span>
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <Link
                          to="/create-study"
                          className="dropdown-item"
                          // key="t-read-email"
                        >
                          Create Study
                        </Link>
                        <Link
                          to="/listof-study"
                          className="dropdown-item"
                          key="t-inbox"
                        >
                          List Of Study
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        key="t-product-detail"
                      >
                        <span key="t-email"> Site </span>
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <Link
                          to="/create-site"
                          className="dropdown-item"
                          // key="t-read-email"
                        >
                          Create Site
                        </Link>
                        <Link
                          to="/listof-sites"
                          className="dropdown-item"
                          key="t-inbox"
                        >
                          List Of Site
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        key="t-product-detail"
                      >
                        <span key="t-email">User </span>
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <Link
                          to="/create-user"
                          className="dropdown-item"
                          // key="t-read-email"
                        >
                          Create User
                        </Link>
                        <Link
                          to="/list-user"
                          className="dropdown-item"
                          key="t-inbox"
                        >
                          List out User{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-ecommerce"
                    role="button"
                  >
                    <i className="bx bx-bar-chart-alt-2 me-2"></i>
                    <span key="t-ecommerce">Analytics &amp; Reports</span>
                    <div className="arrow-down"></div>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-ecommerce"
                  >
                    <Link
                      to="/no-of-companies"
                      className="dropdown-item"
                      key="t-products"
                    >
                      No of Companies
                    </Link>
                    <Link
                      to="/no-of-users-asper-role"
                      className="dropdown-item"
                      key="t-product-detail"
                    >
                      No of Users as per role
                    </Link>
                    <Link
                      to="/no-of-studies"
                      className="dropdown-item"
                      key="t-orders"
                    >
                      No of study
                    </Link>
                    <Link
                      to="/no-of-sites"
                      className="dropdown-item"
                      key="t-customers"
                    >
                      No of Site
                    </Link>
                    {/* <!--<a href="list-out-study.php" className="dropdown-item" key="t-cart">Date wise study</a>--> */}
                    <Link
                      to="/no-of-active-users"
                      className="dropdown-item"
                      key="t-cart"
                    >
                      Active/ inactive user
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
