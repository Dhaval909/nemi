import React from "react";

const ViewExternelUserProfile = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Users</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Company name</a>
                      </li>
                      <li className="breadcrumb-item active">
                        View External Users
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <a
                            className="text-dark"
                            data-bs-toggle="collapse"
                            href="#collapseFilter"
                          >
                            <i className="fas fa-filter"></i>
                            <span className="me-3">Filter</span>
                          </a>
                          <div className="d-inline-block">
                            <div className="collapse" id="collapseFilter">
                              <div className="row gx-2">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-auto col-form-label font-sm"
                                >
                                  First name
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
                                  Last name
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
                                    <option value="0">Study</option>
                                    <option value="1">Study</option>
                                    <option value="2">Study</option>
                                    <option value="3">Study</option>
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
                                    <option value="0">Site</option>
                                    <option value="1">Site</option>
                                    <option value="2">Site</option>
                                    <option value="3">Site</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="text-end mb-4">
                            <a
                              href="#"
                              id="addEmp"
                              className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              data-bs-toggle="modal"
                              data-bs-target="#AddEmployeeModal"
                              data-bs-whatever="Add Employee"
                            >
                              <i className="fas fa-plus"></i> Add New User
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table align-middle table-nowrap mb-0">
                          <thead className="table-light">
                            <tr>
                              <th className="align-middle">No.</th>
                              <th className="align-middle ">First Name</th>{" "}
                              <th className="align-middle ">Last Name</th>{" "}
                              <th className="align-middle ">Company</th>
                              <th className="align-middle ">Study</th>
                              <th className="align-middle ">Site</th>
                              <th className="align-middle">Email id</th>
                              <th className="align-middle">Contact Number</th>
                              <th className="align-middle">Role</th>
                              <th className="align-middle">Status</th>
                              <th className="align-middle" width="200">
                                Action{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-body fw-bold ">1</td>
                              <td className="">John</td>
                              <td className="">Methews</td>
                              <td className="">Company Name</td>
                              <td className="">Study Name</td>
                              <td className="">Site Name</td>

                              <td>JohnMethews@cadila.com</td>
                              <td>+1 (808) 764 554 330</td>

                              <td>Admin</td>

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
                                  <a
                                    href="#"
                                    className="d-inline-block mx-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#AddEditEmployeeModal"
                                    data-bs-whatever="View User"
                                  >
                                    <i
                                      className="fas fa-eye"
                                      style={{ fontSize: "22px" }}
                                    ></i>
                                  </a>
                                  <a
                                    href="#"
                                    className="d-inline-block mx-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#AddEditEmployeeModal"
                                    data-bs-whatever="Edit User"
                                  >
                                    <i
                                      className="fas fa-edit"
                                      style={{ fontSize: "20px" }}
                                    ></i>
                                  </a>
                                  <a
                                    href="#"
                                    id="addEmp"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    data-bs-toggle="modal"
                                    data-bs-target="#AddSite"
                                    data-bs-whatever="Add Employee"
                                  >
                                    <i className="fas fa-plus"></i> Add New Site
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
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="AddSite"
          tabindex="-1"
          aria-labelledby="CreateEmployee"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="CreateEmployee">
                  Assign New Site
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
                        <label
                          htmlFor="role-Contact"
                          className="col-form-label"
                        >
                          Select Role:
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">Role</option>
                          <option value="0">Role</option>
                          <option value="0">Role</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="role-name" className="col-form-label">
                          Select Company:
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">Company</option>
                          <option value="1">Company</option>
                          <option value="2">Company</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="last-name" className="col-form-label">
                          Select Study:
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">Study</option>
                          <option value="0">Study</option>
                          <option value="0">Study</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="role-Email" className="col-form-label">
                          Select Site:
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">Site</option>
                          <option value="0">Site</option>
                          <option value="0">Site</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary">
                  Assign Site
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
          id="AddEmployeeModal"
          tabindex="-1"
          aria-labelledby="CreateEmployee"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="CreateEmployee">
                  Create New User
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
                          First Name:
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
                        <label htmlFor="last-name" className="col-form-label">
                          Last Name:
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
                        <label htmlFor="role-Email" className="col-form-label">
                          Email id:
                        </label>
                        <input
                          type="text"
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
                          Contact Number:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="role-Contact"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary">
                  Add User
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
          id="AddEditEmployeeModal"
          tabindex="-1"
          aria-labelledby="CreateEmployee"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="CreateEmployee">
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
                <form id="myForm" className="outer-repeater">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="role-name" className="col-form-label">
                          First Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="role-name"
                          value="John "
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="last-name" className="col-form-label">
                          Last Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                          value="Methews"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="role-Email" className="col-form-label">
                          Email id:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="role-Email"
                          value="JohnMethews@cadila.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="role-Contact"
                          className="col-form-label"
                        >
                          Contact Number:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="role-Contact"
                          value="+1 (808) 764 554 330"
                        />
                      </div>
                    </div>

                    <div data-repeater-list="group-a">
                      <div data-repeater-item className="row">
                        <div className="mb-3 col-lg-3">
                          <label htmlFor="name">Company</label>
                          <select
                            className="select2 form-control select2-multiple"
                            data-placeholder="Choose ..."
                          >
                            <option value="">Select Company</option>
                            <optgroup label="Company 1">
                              <option value="AK">Site Name1</option>
                              <option value="HI">Site Name2</option>
                              <option value="HI">Site Name3</option>
                            </optgroup>
                            <optgroup label="Company 2">
                              <option value="AK">Site Name1</option>
                              <option value="HI">Site Name2</option>
                              <option value="HI">Site Name3</option>
                            </optgroup>
                            <optgroup label="Company 3">
                              <option value="AK">Site Name1</option>
                              <option value="HI">Site Name2</option>
                              <option value="HI">Site Name3</option>
                            </optgroup>
                          </select>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label htmlFor="email">Study</label>
                          <select
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <option value="">Select Study</option>
                            <option value="AK">Study 1 </option>
                            <option value="HI">Study 2</option>
                            <option value="HI">Study 3</option>
                          </select>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label htmlFor="subject">Site</label>
                          <select
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <option value="AK">site 1 </option>
                            <option value="HI">site 2</option>
                            <option value="HI">site 3</option>
                          </select>
                        </div>

                        <div className="col-lg-2 align-self-center">
                          <div className="d-grid">
                            <input
                              data-repeater-delete
                              type="button"
                              className="btn btn-primary inner"
                              value="Delete"
                            />
                          </div>
                        </div>
                      </div>
                      <div data-repeater-item className="row">
                        <div className="mb-3 col-lg-3">
                          <label htmlFor="name">Company</label>
                          <select
                            className="select2 form-control select2-multiple"
                            data-placeholder="Choose ..."
                          >
                            <option value="">Select Company</option>
                            <optgroup label="Company 1">
                              <option value="AK">Site Name1</option>
                              <option value="HI">Site Name2</option>
                              <option value="HI">Site Name3</option>
                            </optgroup>
                            <optgroup label="Company 2">
                              <option value="AK">Site Name1</option>
                              <option value="HI">Site Name2</option>
                              <option value="HI">Site Name3</option>
                            </optgroup>
                            <optgroup label="Company 3">
                              <option value="AK">Site Name1</option>
                              <option value="HI">Site Name2</option>
                              <option value="HI">Site Name3</option>
                            </optgroup>
                          </select>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label htmlFor="email">Study</label>
                          <select
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <option value="AK">Study 1 </option>
                            <option value="HI">Study 2</option>
                            <option value="HI">Study 3</option>
                          </select>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label htmlFor="subject">Site</label>
                          <select
                            className="select2 form-control select2-multiple"
                            multiple="multiple"
                            data-placeholder="Choose ..."
                          >
                            <option value="AK">site 1 </option>
                            <option value="HI">site 2</option>
                            <option value="HI">site 3</option>
                          </select>
                        </div>

                        <div className="col-lg-2 align-self-center">
                          <div className="d-grid">
                            <input
                              data-repeater-delete
                              type="button"
                              className="btn btn-primary inner"
                              value="Delete"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 col-lg-1">
                      <input
                        data-repeater-create
                        type="button"
                        className="btn btn-success mt-3 mt-lg-0"
                        value="Add"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary">
                  Update User
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
          id="liecenceModal"
          tabindex="-1"
          aria-labelledby="liecenceModalView"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="liecenceModalView">
                  CV
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      CV
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      GCP
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      liecence
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  {" "}
                  <ul className="verti-timeline list-unstyled my-4">
                    <li className="event-list active">
                      <div className="event-timeline-dot">
                        <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14">
                            22 Nov{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <a href="assets/pdf/Data_Tables.pdf" target="_blank">
                            <i
                              className="fas fa-file-pdf"
                              style={{ fontSize: "20px" }}
                            ></i>{" "}
                            CV Name
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14">
                            17 Nov{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <a href="assets/pdf/Data_Tables.pdf" target="_blank">
                            <i
                              className="fas fa-file-pdf"
                              style={{ fontSize: "20px" }}
                            ></i>{" "}
                            CV Name
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14">
                            15 Nov{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <a href="assets/pdf/Data_Tables.pdf" target="_blank">
                            <i
                              className="fas fa-file-pdf"
                              style={{ fontSize: "20px" }}
                            ></i>{" "}
                            CV Name
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14">
                            12 Nov{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <a href="assets/pdf/Data_Tables.pdf" target="_blank">
                            <i
                              className="fas fa-file-pdf"
                              style={{ fontSize: "20px" }}
                            ></i>{" "}
                            CV Name
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default ViewExternelUserProfile;
