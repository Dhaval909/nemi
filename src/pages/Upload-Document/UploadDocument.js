import React from "react";

const UploadDocument = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}{" "}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Upload Document</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Study name</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Upload Document
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-1 col-lg-2">
                <div className="card me-md-2 mb-md-0 w-100 mxw-auto">
                  <div className="card-body px-0 pt-2">
                    {/* <?php include 'company-sidebar.php';?> */}

                    <div
                      className="vertical-collpsed d-lg-block"
                      id="verticalCollpsed"
                    >
                      <button
                        type="button"
                        className="btn btn-sm px-3 d-lg-none font-size-16 header-item waves-effect waves-dark menu-side"
                      >
                        <i className="fa fa-fw fa-bars"></i>
                      </button>
                      <div className="vertical-menu position-relative top-0 bg-transparent shadow-none">
                        <div
                          className="d-flex flex-column mb-0 pb-0"
                          id="sidebar-menu"
                        >
                          <ul
                            className="metismenu list-unstyled sidemenu"
                            id="side-menu"
                          >
                            <li>
                              <a href="company-dashboard.php" key="t-level-1-1">
                                <i className="bx bx-home-circle me-1"></i>{" "}
                                <span key="t-dashboards">Dash Board</span>
                              </a>{" "}
                            </li>

                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="bx bx-user-circle me-1"></i>{" "}
                                <span key="t-Company Account">
                                  Company Profile
                                </span>
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="company-profile.php"
                                    key="t-level-2-1"
                                  >
                                    View Profile
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#changePassordModal"
                                    key="t-level-2-2"
                                  >
                                    Change password
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="view-employee-profile.php">
                                <i className="fas fa-users me-1"></i>{" "}
                                <span key="t-Employee-Details">Employees</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="fas fa-map-marker-alt me-1"></i>{" "}
                                <span key="t-Study">Site</span>
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a href="create-site.php" key="t-level-1-1">
                                    Create Site
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="view-sites.php"
                                    key="t-level-1-1"
                                    className="has-arrow waves-effect"
                                  >
                                    View Site{" "}
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="bx bxs-book-content me-1"></i>{" "}
                                <span key="t-Study">Study</span>
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a href="create-study.php" key="t-level-1-1">
                                    Create Study
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="list-out-study.php"
                                    key="t-level-1-1"
                                    className="has-arrow waves-effect"
                                  >
                                    View Studies{" "}
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="analytics-and-reports-company.php">
                                <i className="bx bx-bar-chart-alt-2 me-1"></i>{" "}
                                <span key="t-Employee-Details">
                                  Analytics & Report
                                </span>
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="no-of-users-as-per-role-company.php"
                                    key="t-level-1-1"
                                  >
                                    No of Users
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="no-of-study-company.php"
                                    key="t-level-1-1"
                                  >
                                    No of Study
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="no-of-site-company.php"
                                    key="t-level-1-1"
                                  >
                                    No of Site
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="active-inactive-user-company.php"
                                    key="t-level-1-1"
                                  >
                                    Active/ inactive use
                                  </a>{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-boxes me-1"></i>{" "}
                                <span key="t-Employee-Details">Logs</span>
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="license-log-company.php"
                                    key="t-level-1-1"
                                  >
                                    License Log
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="study-log-company.php"
                                    key="t-level-1-1"
                                  >
                                    Study Log
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="site-log-company.php"
                                    key="t-level-1-1"
                                  >
                                    Site Log
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="document-log-company.php"
                                    key="t-level-1-1"
                                  >
                                    Document Log
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="training-update-log-company.php"
                                    key="t-level-1-1"
                                  >
                                    Training Update Log
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="training-completition-log-company.php"
                                    key="t-level-1-1"
                                  >
                                    Training completition Log
                                  </a>{" "}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-11 col-lg-10">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="me-3">
                            <div className="avatar me-3">
                              <span className="avatar-title rounded-circle bg-primary text-primary font-size-24 text-white p-2">
                                <i className="bx bxs-book-content"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body align-self-center">
                            <div className="d-flex">
                              <div className="me-3">
                                <div className="text-muted">
                                  <h4 className="mb-1">Study Name</h4>
                                  <p className="mb-0">22 May 2021</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 text-end">
                        <div className="text-muted me-4 d-inline-block text-start">
                          <h5 className="mb-1">Site Name</h5>
                          <p className="mb-0">Site Name</p>
                        </div>

                        <div className="text-muted d-inline-block">
                          <h5 className="mb-1">J. Smith</h5>
                          <p className="mb-0">PI name</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-tabs">
                  <div
                    className="nav nav-pills nav-fill"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link"
                      id="v-pills-gen-ques-tab"
                      href="review-isf.php"
                      role="tab"
                      aria-controls="v-pills-gen-ques"
                      aria-selected="true"
                    >
                      <i className="fas fa-id-badge d-block check-nav-icon mt-4 mb-2"></i>
                      <p className="fw-bold mb-4">Review ISF</p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-privacy-tab"
                      href="review-delegation-log.php"
                      role="tab"
                      aria-controls="v-pills-privacy"
                      aria-selected="false"
                    >
                      <i className="fas fa-clipboard-list d-block check-nav-icon mt-4 mb-2"></i>
                      <p className="fw-bold mb-4">Review Delegation Log</p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-support-tab"
                      href="review-training-log.php"
                      role="tab"
                      aria-controls="v-pills-support"
                      aria-selected="false"
                    >
                      <i className="fas fa-file-alt d-block check-nav-icon mt-4 mb-2"></i>
                      <p className="fw-bold mb-4">Review Training Document</p>
                    </a>
                    <a
                      className="nav-link active"
                      id="v-pills-support-tab"
                      href="upload-document.php"
                      role="tab"
                      aria-controls="v-pills-support"
                      aria-selected="false"
                    >
                      <i className="fas fa-file-upload d-block check-nav-icon mt-4 mb-2"></i>
                      <p className="fw-bold mb-4">Upload Document</p>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <form className="repeater" enctype="multipart/form-data">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Contact"
                              className="col-form-label"
                            >
                              Select Folder:
                            </label>

                            <select
                              id="selectCounty"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Folder Name</option>
                              <option value="1">Folder Name</option>
                              <option value="2">Folder Name</option>
                              <option value="3">Folder Name</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Address"
                              className="col-form-label"
                            >
                              Select Sub Folder:
                            </label>

                            <select
                              id="selectState"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Sub Folder Name</option>
                              <option value="1">Sub Folder Name</option>
                              <option value="2">Sub Folder Name</option>
                              <option value="3">Sub Folder Name</option>
                            </select>
                          </div>
                        </div>

                        <div data-repeater-list="group-a">
                          <div data-repeater-item className="row">
                            <div className="mb-3 col-lg-4">
                              <label htmlFor="resume">Chosse File</label>
                              <input
                                type="file"
                                className="form-control"
                                id="resume"
                              />
                            </div>

                            <div className="mb-3 col-lg-4 col-md-6">
                              <label htmlFor="message">
                                Description/File Name
                              </label>
                              <textarea
                                id="message"
                                row="1"
                                className="form-control"
                              ></textarea>
                            </div>
                            <div className="mb-3 col-lg-2 col-md-3">
                              <label htmlFor="subject">Date</label>
                              <input
                                type="date"
                                id="subject"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                          <button
                            data-repeater-create
                            type="button"
                            className="btn btn-primary mt-3 mt-lg-0"
                            id="addDoc"
                          >
                            <i className="fas fa-plus"></i> Add More
                          </button>
                          <div className="col-lg-1 align-self-center col-md-3 mx-4">
                            <div className="d-grid">
                              <button
                                data-repeater-delete
                                type="button"
                                className="btn btn-danger"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-3">
                          <div className="d-grid">
                            <button className="btn btn-primary mt-3 mt-lg-0">
                              <i className="fas fa-upload"></i> Upload
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default UploadDocument;
