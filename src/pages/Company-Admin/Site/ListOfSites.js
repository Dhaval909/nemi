import React from "react";

import { Link } from "react-router-dom";

const ListOfSites = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">View Sites</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">View Sites</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="min-100">
                  <div className="min-100">
                    <div className="rightContent" id="LicenseLog">
                      <div className="mb-2">
                        <div className="row mb-3">
                          <div className="col-lg-9 ">
                            <a
                              className="text-dark"
                              data-bs-toggle="collapse"
                              href="#collapseFilter"
                            >
                              <i className="fas fa-filter"></i>{" "}
                              <span className="me-3">Filter</span>
                            </a>
                            <div className="d-inline-block">
                              <div
                                className="collapse show"
                                id="collapseFilter"
                              >
                                <div className="row gx-2">
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
                                    Study
                                  </label>
                                  <div className="col-auto">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option value="0">All</option>
                                      <option value="0">Study Name 1</option>
                                      <option value="0">Study Name 1</option>
                                      <option value="0">Study Name 1</option>
                                    </select>
                                  </div>
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-auto col-form-label font-sm"
                                  >
                                    Site
                                  </label>
                                  <div className="col-auto">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option value="0">All</option>
                                      <option value="0">Site Name 1</option>
                                      <option value="0">Site Name 1</option>
                                      <option value="0">Site Name 1</option>
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
                                      <option value="0">Company 1</option>
                                      <option value="0">Company 1</option>
                                      <option value="0">Company 1</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className=" d-flex font-size-20 justify-content-end">
                              <Link
                                to="/create-site"
                                className="btn btn-primary btn-rounded waves-effect waves-light mx-2"
                              >
                                <i
                                  className="fas fa-plus"
                                  style={{ fontSize: "12px" }}
                                ></i>{" "}
                                Create Site
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="table-responsive">
                        <table className="table project-list-table table-nowrap align-middle table-borderless">
                          <thead>
                            <tr>
                              <th className="align-middle">Company </th>
                              <th className="align-middle">Study </th>
                              <th className="align-middle">Country</th>
                              <th className="align-middle">City </th>
                              <th className="align-middle">Site Number</th>
                              <th className="align-middle">Name </th>
                              <th className="align-middle">Status </th>
                              <th className="align-middle">Created Date</th>
                              <th className="align-middle">
                                Last Updated Date
                              </th>
                              <th className="align-middle">PI Last Name</th>
                              <th className="align-middle" width="200">
                                Action{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Company Name</td>
                              <td>
                                <a
                                  href="individual-study-in-site.html"
                                  className="text-dark"
                                >
                                  Site1
                                </a>
                              </td>
                              <td className="text-body fw-bold">UK</td>
                              <td>London</td>
                              <td>Site Number</td>
                              <td>Study1</td>
                              <td>
                                <span className="badge badge-pill badge-soft-success font-size-11">
                                  Active
                                </span>
                              </td>
                              <td>19-05-2021</td>
                              <td>19-05-2021</td>

                              <td>Smith</td>
                              <td className="align-middle">
                                <div className="d-flex align-items-center">
                                  {/* <!-- <a href="individual-study-in-site.php" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light me-1"><i className="fas fa-eye" style="font-size:12px;"></i> View</a> --> */}

                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#AssignUser"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                  >
                                    <i
                                      className="fas fa-user"
                                      style={{ fontSize: "12px" }}
                                    ></i>{" "}
                                    Assign User
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="row mt-3">
                        <div className="col-sm-12 col-md-5">
                          Showing 1 to 10 of 57 entries
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <ul className="pagination justify-content-end">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="datatable-buttons_previous"
                            >
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="0"
                                tabindex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="1"
                                tabindex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="2"
                                tabindex="0"
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="3"
                                tabindex="0"
                                className="page-link"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="4"
                                tabindex="0"
                                className="page-link"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="5"
                                tabindex="0"
                                className="page-link"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="6"
                                tabindex="0"
                                className="page-link"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="datatable-buttons_next"
                            >
                              <a
                                href="#"
                                aria-controls="datatable-buttons"
                                data-dt-idx="7"
                                tabindex="0"
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent border-top"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <----------------Don't---Work---------Modified History Model --------------------> */}
        {/* <div
          className="modal fade"
          id="modifyBy"
          tabindex="-1"
          aria-labelledby=""
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="">
                  Modified History{" "}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="hori-timeline">
                  <div
                    className="owl-carousel owl-theme  navs-carousel events"
                    id="timeline-carousel"
                  >
                    <div className="item event-list">
                      <div>
                        <div className="event-date">
                          <div className="text-primary mb-1">12 Sep 2021</div>
                          <p className="text-muted">11.00AM</p>
                          <h5 className="mb-1">Will Smith</h5>
                          <p className="text-muted">Team Lead</p>
                        </div>
                        <div className="event-down-icon">
                          <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="item event-list">
                      <div>
                        <div className="event-date">
                          <div className="text-primary mb-1">11 Sep 2021</div>
                          <p className="text-muted">10.00AM</p>
                          <h5 className="mb-1">Will Smith</h5>
                          <p className="text-muted">Team Lead</p>
                        </div>
                        <div className="event-down-icon">
                          <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="item event-list">
                      <div>
                        <div className="event-date">
                          <div className="text-primary mb-1">08 Sep 2021</div>
                          <p className="text-muted">11.00AM</p>
                          <h5 className="mb-1">Will Smith</h5>
                          <p className="text-muted">Team Lead</p>
                        </div>
                        <div className="event-down-icon">
                          <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="item event-list">
                      <div>
                        <div className="event-date">
                          <div className="text-primary mb-1">04 Sep 2021</div>
                          <p className="text-muted">11.00AM</p>
                          <h5 className="mb-1">Will Smith</h5>
                          <p className="text-muted">Team Lead</p>
                        </div>
                        <div className="event-down-icon">
                          <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <--------------------- Model for Upload Document  Don't Work-------------------> */}
        {/* <div
          className="modal fade"
          id="UploadDocument"
          tabindex="-1"
          aria-labelledby="UploadDocument"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="UploadDocument">
                  Upload Document
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row justify-content-center">
                  <div className="col-md-auto mb-3">
                    <div className="form-check uploadradio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="uploadDoc"
                        id="formRadios1"
                        value="Upload_Folder"
                      />
                      <label className="form-check-label" htmlFor="formRadios1">
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
                      <label className="form-check-label" htmlFor="formRadios2">
                        Upload a Document
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Upload_Folder myForm">
                  <form id="myForm">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="role-name" className="col-form-label">
                            Name Of Folder:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="role-name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
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
                      <div className="col-md-4">
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
                              <option value="AK">USA</option>
                              <option value="HI">Germany</option>
                              <option value="HI">Russia</option>
                            </optgroup>
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
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <optgroup label="USA">
                              <option value="AK">Columbus</option>
                              <option value="HI">Delaware</option>
                              <option value="HI">Florida</option>
                            </optgroup>
                            <optgroup label="Russia">
                              <option value="AK">Columbus</option>
                              <option value="HI">Delaware</option>
                              <option value="HI">Florida</option>
                            </optgroup>
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
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <optgroup label="USA/Columbus">
                              <option value="AK">Site 1</option>
                              <option value="HI">Site 1</option>
                              <option value="HI">Site 1</option>
                            </optgroup>
                            <optgroup label="Russia/City">
                              <option value="AK">Site 1</option>
                              <option value="HI">Site 1</option>
                              <option value="HI">Site 1</option>
                            </optgroup>
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
                            <div className="list-group collapse" id="item-1">
                              <a
                                href="#item-1-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 1.1
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
                                <i className="fas fa-folder-open"></i>Item 1.2
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
                                <i className="fas fa-folder-open"></i>Item 1.3
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
                            <div className="list-group collapse" id="item-2">
                              <a
                                href="#item-2-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 2.1
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
                                <i className="fas fa-folder-open"></i>Item 2.2
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
                                <i className="fas fa-folder-open"></i>Item 2.3
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
                            <div className="list-group collapse" id="item-3">
                              <a
                                href="#item-3-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 3.1
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
                                <i className="fas fa-folder-open"></i>Item 3.2
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
                                <i className="fas fa-folder-open"></i>Item 3.3
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
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <optgroup label="Country">
                              <option value="AK">USA</option>
                              <option value="HI">Germany</option>
                              <option value="HI">Russia</option>
                            </optgroup>
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
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <optgroup label="USA">
                              <option value="AK">Columbus</option>
                              <option value="HI">Delaware</option>
                              <option value="HI">Florida</option>
                            </optgroup>
                            <optgroup label="Russia">
                              <option value="AK">Columbus</option>
                              <option value="HI">Delaware</option>
                              <option value="HI">Florida</option>
                            </optgroup>
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
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <optgroup label="USA/Columbus">
                              <option value="AK">Site 1</option>
                              <option value="HI">Site 1</option>
                              <option value="HI">Site 1</option>
                            </optgroup>
                            <optgroup label="Russia/City">
                              <option value="AK">Site 1</option>
                              <option value="HI">Site 1</option>
                              <option value="HI">Site 1</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="repeater" enctype="multipart/form-data">
                          <div data-repeater-list="group-a">
                            <div data-repeater-item="" className="row">
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
                                    data-repeater-delete=""
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
                              data-repeater-create=""
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
                            <div className="list-group collapse" id="item-1">
                              <a
                                href="#item-1-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 1.1
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
                                <i className="fas fa-folder-open"></i>Item 1.2
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
                                <i className="fas fa-folder-open"></i>Item 1.3
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
                            <div className="list-group collapse" id="item-2">
                              <a
                                href="#item-2-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 2.1
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
                                <i className="fas fa-folder-open"></i>Item 2.2
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
                                <i className="fas fa-folder-open"></i>Item 2.3
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
                            <div className="list-group collapse" id="item-3">
                              <a
                                href="#item-3-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 3.1
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
                                <i className="fas fa-folder-open"></i>Item 3.2
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
                                <i className="fas fa-folder-open"></i>Item 3.3
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

                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="selectSite"
                                  className="col-form-label"
                                >
                                  Select Staff:
                                </label>
                                <select
                                  id="selectSite"
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value="0">Select Staff</option>
                                  <option value="1">
                                    User Name(Team Lead)
                                  </option>
                                  <option value="2">
                                    User Name(Team Lead)
                                  </option>
                                  <option value="3">
                                    User Name(Team Lead)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <button type="button" className="btn btn-primary">
                        Upload Document
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

        <div
          className="modal fade"
          id="uploadDoc"
          tabindex="-1"
          aria-labelledby=""
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="">
                  Upload Document
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row justify-content-center">
                  <div className="col-md-auto mb-3">
                    <div className="form-check uploadradio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="uploadDoc"
                        id="formRadios1"
                        value="Upload_Folder"
                      />
                      <label className="form-check-label" htmlFor="formRadios1">
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
                      <label className="form-check-label" htmlFor="formRadios2">
                        Upload a Document
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Upload_Folder myForm">
                  <form id="myForm">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="role-name" className="col-form-label">
                            Name Of Folder:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="role-name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
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
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label
                            htmlFor="role-Contact"
                            className="col-form-label"
                          >
                            Select Country:
                          </label>
                          <select
                            disabled=""
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
                            Select City:
                          </label>
                          <select
                            disabled=""
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
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label
                            htmlFor="selectSite"
                            className="col-form-label"
                          >
                            Select Site:
                          </label>
                          <select
                            disabled=""
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <optgroup label="Site">
                              <option selected="" value="AK">
                                Site 1
                              </option>
                              <option selected="" value="HI">
                                Site 1
                              </option>
                              <option selected="" value="HI">
                                Site 1
                              </option>
                            </optgroup>
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
                            <div className="list-group collapse" id="item-1">
                              <a
                                href="#item-1-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 1.1
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
                                <i className="fas fa-folder-open"></i>Item 1.2
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
                                <i className="fas fa-folder-open"></i>Item 1.3
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
                            <div className="list-group collapse" id="item-2">
                              <a
                                href="#item-2-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 2.1
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
                                <i className="fas fa-folder-open"></i>Item 2.2
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
                                <i className="fas fa-folder-open"></i>Item 2.3
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
                            <div className="list-group collapse" id="item-3">
                              <a
                                href="#item-3-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 3.1
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
                                <i className="fas fa-folder-open"></i>Item 3.2
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
                                <i className="fas fa-folder-open"></i>Item 3.3
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
                            disabled=""
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
                            disabled=""
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
                            disabled=""
                          >
                            <option value="1">Site Name</option>
                            <option value="2">Site Name</option>
                            <option value="3">Site Name</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="repeater" enctype="multipart/form-data">
                          <div data-repeater-list="group-a">
                            <div data-repeater-item="" className="row">
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
                                    data-repeater-delete=""
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
                              data-repeater-create=""
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
                            <div className="list-group collapse" id="item-1">
                              <a
                                href="#item-1-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 1.1
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
                                <i className="fas fa-folder-open"></i>Item 1.2
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
                                <i className="fas fa-folder-open"></i>Item 1.3
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
                            <div className="list-group collapse" id="item-2">
                              <a
                                href="#item-2-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 2.1
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
                                <i className="fas fa-folder-open"></i>Item 2.2
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
                                <i className="fas fa-folder-open"></i>Item 2.3
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
                            <div className="list-group collapse" id="item-3">
                              <a
                                href="#item-3-1"
                                className="list-group-item"
                                data-bs-toggle="collapse"
                              >
                                <i className="fas fa-folder-open"></i>Item 3.1
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
                                <i className="fas fa-folder-open"></i>Item 3.2
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
                                <i className="fas fa-folder-open"></i>Item 3.3
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

                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="selectSite"
                                  className="col-form-label"
                                >
                                  Select Staff:
                                </label>
                                <select
                                  id="selectSite"
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value="0">Select Staff</option>
                                  <option value="1">
                                    User Name(Team Lead)
                                  </option>
                                  <option value="2">
                                    User Name(Team Lead)
                                  </option>
                                  <option value="3">
                                    User Name(Team Lead)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <button type="button" className="btn btn-primary">
                        Upload Document
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
        </div> */}
        <div
          className="modal fade"
          id="AssignUser"
          tabindex="-1"
          aria-labelledby="AssignUserStuday"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AssignUserStuday">
                  Assign User to Site
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
                        <label
                          htmlFor="role-Address"
                          className="col-form-label"
                        >
                          Select User:
                        </label>
                        <select
                          id="selectcity"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">User Name - email - role</option>
                          <option value="1">User Name - email - role</option>
                          <option value="2">User Name - email - role</option>
                          <option value="3">User Name - email - role</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="button" className="btn btn-primary mx-3">
                      Assign User
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
      
    </>
  );
};

export default ListOfSites;
