import React from "react";

const ListofUserResponsibility2 = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    List of User Responsibility
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">
                        List of User Responsibility
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="text-end mb-4">
                      <a
                        href="#"
                        className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                        data-bs-toggle="modal"
                        data-bs-target="#AddEditUserResponsibilityModal"
                        data-bs-whatever="Add User Responsibility"
                      >
                        <i className="fas fa-plus"></i> Add User Responsibility
                      </a>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="align-middle">Responsibility No.</th>
                            <th className="align-middle">
                              Responsibility Name
                            </th>

                            <th className="align-middle">Status</th>
                            <th className="align-middle" width="200">
                              Action{" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Obtain Consent</td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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
                          <tr>
                            <td className="text-body fw-bold">2</td>
                            <td>Medical History</td>

                            <td>
                              <span className="badge badge-pill badge-soft-danger font-size-11">
                                Inactive
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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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

                          <tr>
                            <td className="text-body fw-bold">3</td>
                            <td>Review Subject Eligibility</td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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
                          <tr>
                            <td className="text-body fw-bold">4</td>
                            <td>Conduct Physical Exam</td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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

                          <tr>
                            <td className="text-body fw-bold">5</td>
                            <td>Interpret Lab Data </td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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

                          <tr>
                            <td className="text-body fw-bold">6</td>
                            <td>Assess AE/SAE</td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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
                          <tr>
                            <td className="text-body fw-bold">7</td>
                            <td>Collect & Report AE/SAE Data </td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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

                          <tr>
                            <td className="text-body fw-bold">8</td>
                            <td>Vital Signs</td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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
                          <tr>
                            <td className="text-body fw-bold">9</td>
                            <td>Conducting ECGs</td>

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
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
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

                          <tr>
                            <td className="text-body fw-bold">10</td>
                            <td>Blood Draw</td>

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
                                  data-bs-toggle="modal"
                                  data-bs-target="#AddEditUserResponsibilityModal"
                                  data-bs-whatever="Edit Responsibility"
                                  className="d-inline-block mx-2"
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
                    {/* <!-- end table-responsive --> */}
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

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="AddEditUserResponsibilityModal"
          tabindex="-1"
          aria-labelledby="UserResponsibilityModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="UserResponsibilityModal">
                  New message
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
                  <div className="mb-3">
                    <label htmlFor="role-name" className="col-form-label">
                      Responsibility Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="role-name"
                      value="Obtain Consent"
                    />
                  </div>

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
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary">
                  Save
                </button>
                <button type="button" className="btn btn-secondary">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default ListofUserResponsibility2;
