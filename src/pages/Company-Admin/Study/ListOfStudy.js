import React from "react";

import { Link } from "react-router-dom";

const ListOfStudy = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">List Of Study</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">List Of Study</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row justify-content-center mb-4">
                      <div className="col-lg-8 ">
                        <a
                          className="text-dark"
                          data-bs-toggle="collapse"
                          href="#collapseFilter"
                        >
                          <i className="fas fa-filter"></i>{" "}
                          <span className="me-3">Filter</span>
                        </a>
                        <div className="d-inline-block">
                          <div className="collapse" id="collapseFilter">
                            <div className="row gx-3">
                              <label
                                htmlFor="staticEmail"
                                className="col-auto col-form-label font-sm"
                              >
                                Country
                              </label>
                              <div className="col-auto">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value="0">All</option>
                                  <option value="0">USA</option>
                                  <option value="1">Germany</option>
                                  <option value="2">Russia</option>
                                  <option value="3">Italy</option>
                                </select>
                              </div>
                              <label
                                htmlFor="staticEmail"
                                className="col-auto col-form-label font-sm"
                              >
                                State
                              </label>
                              <div className="col-auto">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value="0">All</option>
                                  <option value="0">Ohio</option>
                                  <option value="1">Delaware</option>
                                  <option value="2">California</option>
                                </select>
                              </div>
                              <label
                                htmlFor="staticEmail"
                                className="col-auto col-form-label font-sm"
                              >
                                City
                              </label>
                              <div className="col-auto">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value="0">All</option>
                                  <option value="0">Ohio</option>
                                  <option value="1">Delaware</option>
                                  <option value="2">California</option>
                                </select>
                              </div>
                              <label
                                htmlFor="staticEmail"
                                className="col-auto col-form-label font-sm"
                              >
                                Company
                              </label>
                              <div className="col-auto">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value="0">All</option>
                                  <option value="0">Company</option>
                                  <option value="1">Company</option>
                                  <option value="2">Company</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <form className="app-search inner-search pt-0">
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
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="card shadow border round study-list">
                          <div className="card-body">
                            <div className="d-flex w-100">
                              <div className="flex-grow-1">
                                <h5 className="font-size-15 mb-1">
                                  <a
                                    href="view-sites.php"
                                    className="text-dark"
                                  >
                                    Study1
                                  </a>
                                </h5>
                                <p>Company</p>
                                <p className="text-muted font-sm">
                                  11 May, 2021 11:30 AM
                                </p>
                              </div>
                              <div className="flex-shrink-1">
                                <div className="dropdown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle arrow-none"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                                  </a>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    style={{
                                      margin: "0px",
                                      minWidth: "inherit",
                                    }}
                                  >
                                    <Link
                                      className="dropdown-item"
                                      to="/listof-sites"
                                    >
                                      <i className="fas fa-eye"></i> View
                                    </Link>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#EditStudy"
                                    >
                                      <i className="fas fa-edit"></i> Edit
                                    </a>
                                    <a
                                      href="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#ContactStudy"
                                    >
                                      <i className="fas fa-phone-alt"></i>{" "}
                                      Contact Info
                                    </a>
                                    <a href="#" className="dropdown-item">
                                      <i className="fas fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="flex-fill text-start">
                                <span
                                  className="badge rounded-pill badge-soft-success font-size-12"
                                  id="task-status"
                                >
                                  Active
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <div className="d-inline-block">
                                  <div
                                    className="form-check form-switch form-switch-md"
                                    dir="ltr"
                                  >
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="SwitchCheckSizelg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-start mt-2">
                              <div className="flex-grow-1">
                                <div className="avatar-group float-start task-assigne">
                                  <div className="avatar-group-item">
                                    <a
                                      href="individual-study-in-country.php"
                                      className="d-inline-block"
                                      value="member-1"
                                    >
                                      <img
                                        src="assets/images/flags/germany.jpg"
                                        alt=""
                                        className="rounded-circle avatar-xs"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-group-item">
                                    <a
                                      href="individual-study-in-country.php"
                                      className="d-inline-block"
                                      value="member-2"
                                    >
                                      <img
                                        src="assets/images/flags/spain.jpg"
                                        alt=""
                                        className="rounded-circle avatar-xs"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-group-item">
                                    <a
                                      href="individual-study-in-country.php"
                                      className="d-inline-block"
                                      value="member-5"
                                    >
                                      <img
                                        src="assets/images/flags/us.jpg"
                                        alt=""
                                        className="rounded-circle avatar-xs"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-shrink-1">
                                <div className="text-end">
                                  <div className="me-2 d-inline-block">
                                    <h5
                                      className="font-size-15 mb-1"
                                      id="task-budget"
                                    >
                                      145
                                    </h5>
                                    <p className="mb-0 text-muted">
                                      <i className="fas fa-user font-size-16 text-primary"></i>
                                    </p>
                                  </div>
                                  <div className="me-2 d-inline-block">
                                    <h5
                                      className="font-size-15 mb-1"
                                      id="task-budget"
                                    >
                                      145
                                    </h5>
                                    <p className="mb-0 text-muted">
                                      <i className="fas fa-map font-size-16 text-primary"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card-footer bg-transparent border-top text-center mt-3">
                              <div className=" d-flex font-size-20 justify-content-center">
                                {/* <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#AssignSite"  className="btn btn-primary btn-rounded waves-effect waves-light mx-2 btn-sm">Assign Site</a> --> */}
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#AssignUser"
                                  href="#"
                                  className="btn btn-primary btn-rounded waves-effect waves-light mx-2 btn-sm"
                                >
                                  Assign User
                                </a>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="text-center my-3">
                          <a
                            href="#"
                            className="text-success"
                          >
                            <i className="bx bx-hourglass bx-spin me-2"></i>{" "}
                            Load more{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <---------------------------Edit Study   Model ---------------->  */}
      <div
        className="modal fade"
        id="EditStudy"
        tabIndex="-1"
        aria-labelledby="EditStudymodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditStudymodal">
                Edit Study
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card-body">
                <form id="myForm" action="upload-document-study.php">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="role-name" className="col-form-label">
                          Name Of Study:
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
                        <label htmlFor="role-Email" className="col-form-label">
                          Date:
                        </label>
                        <input
                          className="form-control"
                          type="datetime-local"
                          value="2019-08-19T13:45:00"
                          id="example-datetime-local-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="last-name" className="col-form-label">
                          Description:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="role-Contact"
                          className="col-form-label"
                        >
                          Filter by Country:
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
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="role-Address"
                          className="col-form-label"
                        >
                          Filter by State:
                        </label>

                        <select
                          id="selectState"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">Ohio</option>
                          <option value="1">Delaware</option>
                          <option value="2">Florida</option>
                          <option value="3">Texas</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="role-City" className="col-form-label">
                          Filter by City:
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
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          htmlFor="role-Responsibility"
                          className="col-form-label"
                        >
                          Select Site:
                        </label>
                        <select
                          className="select2 form-control select2-multiple"
                          multiple="multiple"
                          data-placeholder="Choose ..."
                        >
                          <optgroup label="USA/Ohio/columbus">
                            <option value="AK">Site Name1</option>
                            <option value="HI">Site Name2</option>
                            <option value="HI">Site Name3</option>
                          </optgroup>
                          <optgroup label="USA/Ohio/columbus">
                            <option value="AK">Site Name1</option>
                            <option value="HI">Site Name2</option>
                            <option value="HI">Site Name3</option>
                          </optgroup>
                          <optgroup label="USA/Ohio/columbus">
                            <option value="AK">Site Name1</option>
                            <option value="HI">Site Name2</option>
                            <option value="HI">Site Name3</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      className="btn btn-primary mx-3"
                      data-bs-toggle="modal"
                      data-bs-target="#uploadDoc"
                    >
                      Update Study
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <----------------------- COntact-Model----------> */}
      <div
        className="modal fade"
        id="ContactStudy"
        tabIndex="-1"
        aria-labelledby="ContactStudymodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditStudymodal">
                View Contact Study
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <table className="table align-middle table-nowrap mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <b>Contact Person Name :</b>
                        </td>
                        <td>Contact Person 1</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Contact Person Number :</b>
                        </td>
                        <td>+91 1254877777</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Contact Person Email :</b>
                        </td>
                        <td>study@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <--------------------- Assign Site Model Not Working------------->  */}
      {/* <div
        className="modal fade"
        id="AssignSite"
        tabIndex="-1"
        aria-labelledby="AssignUserStuday"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AssignUserStuday">
                Assign Site
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-Address" className="col-form-label">
                        Select Country:
                      </label>
                      <select
                        id="selectcity"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="0">Country Name</option>
                        <option value="1">Country Name</option>
                        <option value="2">Country Name</option>
                        <option value="3">Country Name</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-Address" className="col-form-label">
                        Select State`:
                      </label>
                      <select
                        id="selectcity"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="0">State Name</option>
                        <option value="1">State Name</option>
                        <option value="2">State Name</option>
                        <option value="3">State Name</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-Address" className="col-form-label">
                        Select City:
                      </label>
                      <select
                        id="selectcity"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="0">City Name</option>
                        <option value="1">City Name</option>
                        <option value="2">City Name</option>
                        <option value="3">City Name</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label
                        htmlFor="role-res"
                        className="col-form-label form-label"
                      >
                        Select Site:
                      </label>
                      <select
                        className="select2 form-control select2-multiple"
                        multiple="multiple"
                        data-placeholder="Choose ..."
                      >
                        <optgroup label="Sites">
                          <option value="AK">
                            Site Name - Site Number - PI Name
                          </option>
                          <option value="HI">
                            Site Name - Site Number - PI Name
                          </option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="button" className="btn btn-primary mx-3">
                    Assign Site
                  </button>
                  <button type="button" className="btn btn-secondary mx-3">
                    Clear
                  </button>
                  <button type="button" className="btn btn-primary">
                    Site is not listed here? Create New
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="modal fade"
        id="AssignUser"
        tabIndex="-1"
        aria-labelledby="AssignUserStuday"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AssignUserStuday">
                Assign User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-Address" className="col-form-label">
                        Select Site:
                      </label>
                      <select
                        id="selectcity"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="0">Site Name</option>
                        <option value="1">Site Name</option>
                        <option value="2">Site Name</option>
                        <option value="3">Site Name</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label
                        htmlFor="role-res"
                        className="col-form-label form-label"
                      >
                        Select User:
                      </label>
                      <select
                        className="select2 form-control select2-multiple"
                        multiple="multiple"
                        data-placeholder="Choose ..."
                      >
                        <optgroup label="Responsibility">
                          <option value="AK">
                            Fname Lname - Email - Role{" "}
                          </option>
                          <option value="HI">Fname Lname - Email - Role</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="button" className="btn btn-primary mx-3">
                    Assign User
                  </button>
                  <button type="button" className="btn btn-secondary mx-3">
                    Clear
                  </button>
                  <button type="button" className="btn btn-primary mx-3">
                    User is not listed here? Create New
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ListOfStudy;
