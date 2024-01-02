import React from "react";

import { Link } from "react-router-dom";

const ListofCompanies = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">List of Companies</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">
                        List of Companies
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="text-end mb-4">
                      <a
                        href="#"
                        className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                        data-bs-toggle="modal"
                        data-bs-target="#AddCompany"
                        data-bs-whatever="Create New Company"
                      >
                        <i className="fas fa-plus"></i> Create New Company
                      </a>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="align-middle">No.</th>
                            <th className="align-middle">Unique id</th>
                            <th className="align-middle">URL</th>
                            <th className="align-middle">Company Name</th>
                            <th className="align-middle">Address</th>
                            <th className="align-middle">Contact Number 1</th>
                            <th className="align-middle">Contact Number 2</th>
                            <th className="align-middle">Contact Person</th>

                            <th className="align-middle">Status</th>
                            <th className="align-middle" width="200">
                              Action{" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>CR_CD1</td>
                            <td>
                              <a href="#">www.clinicalresearch.com/Cadila</a>
                            </td>
                            <td>Cadila </td>
                            <td>
                              44 Shirley Ave. <br />
                              West Chicago, <br />
                              IL 60185, USA
                            </td>
                            <td>+1 (808) 764 554 330</td>
                            <td>+1 (808) 764 554 330</td>
                            <td>Johm Methews</td>

                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-11">
                                Active
                              </span>
                            </td>

                            <td className="align-middle">
                              <div className="d-flex align-items-center">
                                <div className="d-inline-block mx-2">
                                  <div
                                    className="form-check form-switch form-switch-md"
                                    dir="ltr"
                                  >
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="SwitchCheckSizelg"
                                    />
                                    {/* <!--<label className="form-check-label" htmlFor="SwitchCheckSizelg">Large Size Switch</label>--> */}
                                  </div>
                                </div>
                                <div className="d-inline-block mx-2">
                                  <Link
                                    to="/listof-study"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                  >
                                    View Details
                                  </Link>
                                </div>
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

                                <a href="#" className="d-inline-block mx-2">
                                  <i
                                    className="fas fa-trash-alt"
                                    style={{ fontSize: "20px" }}
                                  ></i>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="AddCompany"
          tabindex="-1"
          aria-labelledby="CreateCompany"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="CreateCompany">
                  Create New Company
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
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="role-name" className="col-form-label">
                          Company no:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Company Unique id:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Company url:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Company Name:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Address:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Contact Number 1:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Contact Number 2:
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
                        <label htmlFor="role-name" className="col-form-label">
                          Contact Person Name:
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
                        <label htmlFor="Status" className="col-form-label">
                          Status:
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="Status"
                        >
                          <option selected>Select Status</option>
                          <option value="1">Active</option>
                          <option value="2">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="role-res"
                          className="col-form-label form-label"
                        >
                          Select Internal user:
                        </label>
                        <select
                          className="select2 form-control select2-multiple"
                          multiple="multiple"
                          data-placeholder="Choose ..."
                        >
                          <optgroup label="Responsibility">
                            <option value="AK">Fname Lname - Role </option>
                            <option value="HI">Fname Lname - Role</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary">
                  Create Company
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onclick="resetForm();"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="AssignUser"
          tabindex="-1"
          aria-labelledby="AssignUserStuday"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AssignUserStuday">
                  Assign Internal User
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
                          htmlFor="role-res"
                          className="col-form-label form-label"
                        >
                          Select Internal user:
                        </label>
                        <select
                          className="select2 form-control select2-multiple"
                          multiple="multiple"
                          data-placeholder="Choose ..."
                        >
                          <optgroup label="Responsibility">
                            <option value="AK">Fname Lname - Role </option>
                            <option value="HI">Fname Lname - Role</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="button" className="btn btn-primary">
                      Assign User
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
      
    </>
  );
};

export default ListofCompanies;
