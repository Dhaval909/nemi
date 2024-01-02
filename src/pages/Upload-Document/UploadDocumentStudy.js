import React from "react";

const UploadDocumentStudy = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}{" "}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Study Name 2 - Upload Document
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Study Name 2</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Upload Document
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-1 col-lg-2">
                <div className="card me-md-2 mb-md-0 w-100 mxw-auto">
                  <div className="card-body px-0 pt-2">
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
                              <a href="#" className="has-arrow waves-effect">
                                <i className="bx bx-user-circle me-1"></i>{" "}
                                <span key="t-Company Account">
                                  Company Profile
                                </span>
                              </a>
                              <ul className="sub-menu">
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
                                <i
                                  className="fas fa-users
me-1"
                                ></i>{" "}
                                <span key="t-Employee-Details">Employees</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="has-arrow waves-effect">
                                <i
                                  className="fas fa-map-marker-alt
 me-1"
                                ></i>{" "}
                                <span key="t-Study">Site</span>
                              </a>
                              <ul className="sub-menu">
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
                              <a href="#" className="has-arrow waves-effect">
                                <i
                                  className="bx bxs-book-content
 me-1"
                                ></i>{" "}
                                <span key="t-Study">Study</span>
                              </a>
                              <ul className="sub-menu">
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
                                <i
                                  className="bx bx-bar-chart-alt-2
me-1"
                                ></i>{" "}
                                <span key="t-Employee-Details">
                                  Analytics & Report
                                </span>
                              </a>
                              <ul className="sub-menu">
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
                                <i
                                  className="fas fa-boxes me-1"
                                ></i>{" "}
                                <span key="t-Employee-Details">Logs</span>
                              </a>
                              <ul className="sub-menu">
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
                    <div className="row justify-content-center">
                      <div className="col-md-auto mb-3">
                        <div className="form-check uploadradio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="uploadDoc"
                            id="formRadios1"
                            checked=""
                            value="Upload_Folder"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formRadios1"
                          >
                            Upload a Folder
                          </label>
                        </div>
                      </div>
                      <div className="col-md-auto text-center fw-bold">OR</div>
                      <div className="col-md-auto mb-3">
                        <div className="form-check uploadradio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="uploadDoc"
                            id="formRadios2"
                            value="Upload_Document"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formRadios2"
                          >
                            Upload a Document
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="Upload_Folder myForm">
                      <form id="myForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="role-name"
                                className="col-form-label"
                              >
                                Name Of Folder:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="role-name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="last-name"
                                className="col-form-label"
                              >
                                Description:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="last-name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="role-Email"
                                className="col-form-label"
                              >
                                Date:
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="role-Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="role-Contact"
                                className="col-form-label"
                              >
                                Select Country:
                              </label>
                              <select
                                id="selectCounty"
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="0">USA</option>
                                <option value="1">Germany</option>
                                <option value="2">Russia</option>
                                <option value="3">Italy</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="role-Address"
                                className="col-form-label"
                              >
                                Select City:
                              </label>
                              <select
                                id="selectcity"
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="0">Columbus</option>
                                <option value="1">Delaware</option>
                                <option value="2">Florida</option>
                                <option value="3">Texas</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="selectSite"
                                className="col-form-label"
                              >
                                Select Site:
                              </label>
                              <select
                                id="selectSite"
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="0">Select Site</option>
                                <option value="1">Site Name</option>
                                <option value="2">Site Name</option>
                                <option value="3">Site Name</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="mb-3">
                              <label
                                htmlFor="selectSite"
                                className="col-form-label"
                              >
                                Select Folder:
                              </label>
                              <div className="list-group list-group-root well">
                                <a
                                  href="#item-1"
                                  className="list-group-item"
                                  data-bs-toggle="collapse"
                                >
                                  <i className="fas fa-folder-open"></i>Item 1
                                </a>
                                <div
                                  className="list-group collapse"
                                  id="item-1"
                                >
                                  <a
                                    href="#item-1-1"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    1.1
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-1-1"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.1.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.1.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.1.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-1-2"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    1.2
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-1-2"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.2.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.2.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.2.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-1-3"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    1.3
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-1-3"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.3.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.3.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.3.3
                                    </a>
                                  </div>
                                </div>

                                <a
                                  href="#item-2"
                                  className="list-group-item"
                                  data-bs-toggle="collapse"
                                >
                                  <i className="fas fa-folder-open"></i>Item 2
                                </a>
                                <div
                                  className="list-group collapse"
                                  id="item-2"
                                >
                                  <a
                                    href="#item-2-1"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    2.1
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-2-1"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.1.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.1.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.1.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-2-2"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    2.2
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-2-2"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.2.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.2.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.2.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-2-3"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    2.3
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-2-3"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.3.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.3.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.3.3
                                    </a>
                                  </div>
                                </div>

                                <a
                                  href="#item-3"
                                  className="list-group-item"
                                  data-bs-toggle="collapse"
                                >
                                  <i className="fas fa-folder-open"></i>Item 3
                                </a>
                                <div
                                  className="list-group collapse"
                                  id="item-3"
                                >
                                  <a
                                    href="#item-3-1"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    3.1
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-3-1"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.1.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.1.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.1.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-3-2"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    3.2
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-3-2"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.2.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.2.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.2.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-3-3"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    3.3
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-3-3"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.3.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.3.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.3.3
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <button type="button" className="btn btn-primary">
                            Create Folder
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onclick="resetForm();"
                          >
                            Clear
                          </button>
                        </div>
                      </form>
                    </div>

                    <div
                      className="Upload_Document myForm"
                      style={{ display: "none" }}
                    >
                      <form id="myForm">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label
                                htmlFor="role-Contact"
                                className="col-form-label"
                              >
                                Select Country:
                              </label>
                              <select
                                id="selectCounty"
                                className="form-select"
                                aria-label="Default select example"
                                disabled
                              >
                                <option value="0">USA</option>
                                <option value="1">Germany</option>
                                <option value="2">Russia</option>
                                <option value="3">Italy</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label
                                htmlFor="role-Address"
                                className="col-form-label"
                              >
                                Select City:
                              </label>
                              <select
                                id="selectcity"
                                className="form-select"
                                aria-label="Default select example"
                                disabled
                              >
                                <option value="0">Columbus</option>
                                <option value="1">Delaware</option>
                                <option value="2">Florida</option>
                                <option value="3">Texas</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label
                                htmlFor="selectSite"
                                className="col-form-label"
                              >
                                Select Site:
                              </label>
                              <select
                                id="selectSite"
                                className="form-select"
                                aria-label="Default select example"
                                disabled
                              >
                                <option value="1">Site Name</option>
                                <option value="2">Site Name</option>
                                <option value="3">Site Name</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div
                              className="repeater"
                              enctype="multipart/form-data"
                            >
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
                                  <div className="mb-3 col-lg-3 col-md-3">
                                    <label htmlFor="subject">Date</label>
                                    <input
                                      type="date"
                                      id="subject"
                                      className="form-control"
                                    />
                                  </div>

                                  <div className="col-lg-1 align-self-center col-md-2">
                                    <div className="d-grid">
                                      <button
                                        data-repeater-delete
                                        type="button"
                                        className="btn btn-link text-danger pt-0"
                                      >
                                        <i className="fas fa-trash-alt"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-start mb-3">
                                <button
                                  data-repeater-create
                                  type="button"
                                  className="btn btn-primary mt-3 mt-lg-0"
                                  id="addDoc"
                                >
                                  <i className="fas fa-plus"></i> Add More
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label
                                htmlFor="selectSite"
                                className="col-form-label"
                              >
                                Select Folder:
                              </label>
                              <div className="list-group list-group-root well">
                                <a
                                  href="#item-1"
                                  className="list-group-item"
                                  data-bs-toggle="collapse"
                                >
                                  <i className="fas fa-folder-open"></i>Item 1
                                </a>
                                <div
                                  className="list-group collapse"
                                  id="item-1"
                                >
                                  <a
                                    href="#item-1-1"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    1.1
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-1-1"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.1.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.1.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.1.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-1-2"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    1.2
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-1-2"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.2.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.2.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.2.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-1-3"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    1.3
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-1-3"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.3.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.3.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      1.3.3
                                    </a>
                                  </div>
                                </div>

                                <a
                                  href="#item-2"
                                  className="list-group-item"
                                  data-bs-toggle="collapse"
                                >
                                  <i className="fas fa-folder-open"></i>Item 2
                                </a>
                                <div
                                  className="list-group collapse"
                                  id="item-2"
                                >
                                  <a
                                    href="#item-2-1"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    2.1
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-2-1"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.1.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.1.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.1.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-2-2"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    2.2
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-2-2"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.2.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.2.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.2.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-2-3"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    2.3
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-2-3"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.3.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.3.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      2.3.3
                                    </a>
                                  </div>
                                </div>

                                <a
                                  href="#item-3"
                                  className="list-group-item"
                                  data-bs-toggle="collapse"
                                >
                                  <i className="fas fa-folder-open"></i>Item 3
                                </a>
                                <div
                                  className="list-group collapse"
                                  id="item-3"
                                >
                                  <a
                                    href="#item-3-1"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    3.1
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-3-1"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.1.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.1.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.1.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-3-2"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    3.2
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-3-2"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.2.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.2.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.2.3
                                    </a>
                                  </div>

                                  <a
                                    href="#item-3-3"
                                    className="list-group-item"
                                    data-bs-toggle="collapse"
                                  >
                                    <i className="fas fa-folder-open"></i>Item
                                    3.3
                                  </a>
                                  <div
                                    className="list-group collapse"
                                    id="item-3-3"
                                  >
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.3.1
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.3.2
                                    </a>
                                    <a href="#" className="list-group-item">
                                      <i className="fas fa-folder-open"></i>Item
                                      3.3.3
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 text-center  mb-3">
                            <div className="d-inline-block">
                              <div
                                className="form-check form-switch form-switch-lg mb-3 uploadAs"
                                dir="ltr"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="SwitchCheckSizelg"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="SwitchCheckSizelg"
                                >
                                  Upload as Training
                                </label>
                              </div>
                            </div>
                            <div className="upload_as_Training text-start">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="role-Contact"
                                      className="col-form-label"
                                    >
                                      Select Country:
                                    </label>
                                    <select
                                      className="select2 form-control select2-multiple"
                                      multiple="multiple"
                                      data-placeholder="Choose ..."
                                    >
                                      <optgroup label="Country">
                                        <option value="0">USA</option>
                                        <option value="1">Germany</option>
                                        <option value="2">Russia</option>
                                        <option value="3">Italy</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="role-Address"
                                      className="col-form-label"
                                    >
                                      Select City:
                                    </label>
                                    <select
                                      className="select2 form-control select2-multiple"
                                      multiple="multiple"
                                      data-placeholder="Choose ..."
                                    >
                                      <optgroup label="USA">
                                        <option value="0">Columbus</option>
                                        <option value="1">Delaware</option>
                                        <option value="2">Florida</option>
                                        <option value="3">Texas</option>
                                        <option value="1">Germany</option>
                                        <option value="2">Russia</option>
                                        <option value="3">Italy</option>
                                      </optgroup>
                                      <optgroup label="Germany">
                                        <option value="1">Delaware</option>
                                        <option value="2">Florida</option>
                                        <option value="3">Texas</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="selectSite"
                                      className="col-form-label"
                                    >
                                      Select Site:
                                    </label>

                                    <select
                                      className="select2 form-control select2-multiple"
                                      multiple="multiple"
                                      data-placeholder="Choose ..."
                                    >
                                      <optgroup label="USA/Columbus">
                                        <option value="0">Columbus</option>
                                        <option value="1">Site Name</option>
                                        <option value="2">Site Name</option>
                                        <option value="3">Site Name</option>
                                      </optgroup>
                                      <optgroup label="Germany/City">
                                        <option value="1">Site Name</option>
                                        <option value="2">Site Name</option>
                                        <option value="3">Site Name</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="selectSite"
                                      className="col-form-label"
                                    >
                                      Select Staff:
                                    </label>

                                    <select
                                      className="select2 form-control select2-multiple"
                                      multiple="multiple"
                                      data-placeholder="Choose ..."
                                    >
                                      <optgroup label="USA/Columbus/site">
                                        <option value="1">
                                          User Name(Team Lead)
                                        </option>
                                        <option value="2">
                                          User Name(Team Lead)
                                        </option>
                                        <option value="3">
                                          User Name(Team Lead)
                                        </option>
                                      </optgroup>
                                      <optgroup label="Germany/City/site">
                                        <option value="1">
                                          User Name(Team Lead)
                                        </option>
                                        <option value="2">
                                          User Name(Team Lead)
                                        </option>
                                        <option value="3">
                                          User Name(Team Lead)
                                        </option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <button type="button" className="btn btn-primary">
                            Create Folder
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onclick="resetForm();"
                          >
                            Clear
                          </button>
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

export default UploadDocumentStudy;
