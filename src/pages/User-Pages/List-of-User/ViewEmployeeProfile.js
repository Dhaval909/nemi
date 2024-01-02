import React from "react";


const ViewEmployeeProfile = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">View Internal Users</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Company name</a>
                      </li>
                      <li className="breadcrumb-item active">
                        View Internal Users
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
                        <div className="col-lg-7">
                          <h3>Internal Users</h3>
                        </div>
                        <div className="col-lg-5">
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
                              <th className="align-middle ">Last Name</th>
                              <th className="align-middle">Email id</th>
                              <th className="align-middle">Contact Number</th>
                              {/* <!-- <th className="align-middle">Companies</th> --> */}
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

                              <td>JohnMethews@cadila.com</td>
                              <td>+1 (808) 764 554 330</td>
                              {/* <!-- <td>Cadila, Sun Pharma</td> --> */}
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
                                        checked=""
                                      />
                                      {/* <!--<label className="form-check-label" htmlFor="SwitchCheckSizelg">Large Size Switch</label>--> */}
                                    </div>
                                  </div>
                                  <a
                                    href="#"
                                    className="d-inline-block mx-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#AddEditEmployeeModal"
                                    data-bs-whatever="View Employee"
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
                                    data-bs-whatever="Edit Employee"
                                  >
                                    <i
                                      className="fas fa-edit"
                                      style={{ fontSize: "20px" }}
                                    ></i>
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
                                tabIndex="0"
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
                                tabIndex="0"
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
                                tabIndex="0"
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
                                tabIndex="0"
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
                                tabIndex="0"
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
                                tabIndex="0"
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
                                tabIndex="0"
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
                                tabIndex="0"
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
          {/* <!-- End Page-content --> */}

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="AddEmployeeModal"
            tabIndex="-1"
            aria-labelledby="CreateEmployee"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="CreateEmployee">
                    Create New Employee
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
                            value=""
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
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="role-Email"
                            className="col-form-label"
                          >
                            Email id:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="role-Email"
                            value=""
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
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="role-Address"
                            className="col-form-label"
                          >
                            Select Role:
                          </label>
                          <select className="form-select">
                            <option>Admin</option>
                            <option>Admin</option>
                            <option>Admin</option>
                            <option>Admin</option>
                            <option>Admin</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="AddEditEmployeeModal"
            tabIndex="-1"
            aria-labelledby="CreateEmployee"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="CreateEmployee">
                    Create New Employee
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
                            value=""
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
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="role-Email"
                            className="col-form-label"
                          >
                            Email id:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="role-Email"
                            value=""
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
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="role-Address"
                            className="col-form-label"
                          >
                            Select Role:
                          </label>
                          <select className="form-select">
                            <option>Admin</option>
                            <option>Admin</option>
                            <option>Admin</option>
                            <option>Admin</option>
                            <option>Admin</option>
                          </select>
                        </div>
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
        </div>
        {/* this model not working */}
        {/* <div
            className="modal fade"
            id="liecenceModal"
            tabIndex="-1"
            aria-labelledby="liecenceModalView"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="liecenceModalView">
                    CV
                  </h1>
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
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
                            <a
                              href="assets/pdf/Data_Tables.pdf"
                              target="_blank"
                            >
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
                            <a
                              href="assets/pdf/Data_Tables.pdf"
                              target="_blank"
                            >
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
                            <a
                              href="assets/pdf/Data_Tables.pdf"
                              target="_blank"
                            >
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
                            <a
                              href="assets/pdf/Data_Tables.pdf"
                              target="_blank"
                            >
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
          </div> */}
      </div>
      
    </>
  );
};

export default ViewEmployeeProfile;
