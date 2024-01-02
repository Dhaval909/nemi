import React from "react";

const DelegationLog = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Review Delegation Log
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">PI</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Study Name</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Site Number</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Review Delegation Log
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6 mb-4 mb-lg-0">
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
                                  <h4 className="mb-1">Study2</h4>
                                  <p className="mb-0">11 Jan, 2018</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 text-lg-end">
                        <div className="text-muted me-4 d-inline-block text-start">
                          <h5 className="mb-1">Site1</h5>
                          <p className="mb-0">
                            <a
                              className="fw-bold text-primary"
                              href="individual-study-in-site.php"
                            >
                              Site Name
                            </a>
                          </p>
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
                      className="nav-link active"
                      id="v-pills-privacy-tab"
                      href="delegation-log.php"
                      role="tab"
                      aria-controls="v-pills-privacy"
                      aria-selected="false"
                    >
                      <i className="fas fa-clipboard-list d-block check-nav-icon mt-4 mb-2"></i>
                      <p className="fw-bold mb-4">Delegation Log</p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-support-tab"
                      href="training-log.php"
                      role="tab"
                      aria-controls="v-pills-support"
                      aria-selected="false"
                    >
                      <i className="fas fa-file-alt d-block check-nav-icon mt-4 mb-2"></i>
                      <p className="fw-bold mb-4">Complete Training Document</p>
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-6 fw-bold"></div>
                      <div className="col-6 text-end fw-bold">
                        <a
                          href="#"
                          className="btn btn-primary btn-rounded"
                          data-bs-toggle="modal"
                          data-bs-target="#CreateDelegation"
                        >
                          Create Delegation
                        </a>
                        <a
                          href="#"
                          className="btn btn-primary btn-rounded"
                          data-bs-toggle="modal"
                          data-bs-target="#ReviewResponsibility"
                        >
                          Review Responsibility
                        </a>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="align-middle">Name</th>
                            <th className="align-middle">Role</th>
                            <th className="align-middle">Responsibility</th>
                            <th className="align-middle">Start Date</th>
                            <th className="align-middle">Signature</th>
                            <th className="align-middle">Stop Date</th>
                            <th className="align-middle">Signature</th>
                            <th className="align-middle">CV</th>
                            <th className="align-middle">GCP</th>
                            <th className="align-middle">Training</th>
                            <th className="align-middle">Licence</th>
                            <th className="align-middle">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-body fw-bold">Kartik</td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddRole"
                                data-bs-whatever="Add Responsibility"
                              >
                                <i
                                  className="fas fa-plus-square"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>

                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddResponsibilityNew"
                                data-bs-whatever="Add Responsibility"
                              >
                                <i
                                  className="fas fa-plus-square"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddStartDate"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-calendar-alt"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddStopDate"
                                data-bs-whatever="Add Stop Date"
                              >
                                <i
                                  className="fas fa-calendar-alt"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#DucmentView"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-eye"
                                  style={{ fontSize: "22px" }}
                                ></i>
                              </a>
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
                                  </div>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#EditDelegation"
                                data-bs-whatever="Edit Responsibility"
                              >
                                <i
                                  className="fas fa-edit"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">Kartik</td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddRole"
                                data-bs-whatever="Add Responsibility"
                              >
                                <i
                                  className="fas fa-plus-square"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>

                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddResponsibilityNew"
                                data-bs-whatever="Add Responsibility"
                              >
                                <i
                                  className="fas fa-plus-square"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddStartDate"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-calendar-alt"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddStopDate"
                                data-bs-whatever="Add Stop Date"
                              >
                                <i
                                  className="fas fa-calendar-alt"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#DucmentView"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-eye"
                                  style={{ fontSize: "22px" }}
                                ></i>
                              </a>
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
                                  </div>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#EditDelegation"
                                data-bs-whatever="Edit Responsibility"
                              >
                                <i
                                  className="fas fa-edit"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">Kartik</td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddRole"
                                data-bs-whatever="Add Responsibility"
                              >
                                <i
                                  className="fas fa-plus-square"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>

                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddResponsibilityNew"
                                data-bs-whatever="Add Responsibility"
                              >
                                <i
                                  className="fas fa-plus-square"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddStartDate"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-calendar-alt"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#AddStopDate"
                                data-bs-whatever="Add Stop Date"
                              >
                                <i
                                  className="fas fa-calendar-alt"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#DucmentView"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-eye"
                                  style={{ fontSize: "22px" }}
                                ></i>
                              </a>
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
                                  </div>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#EditDelegation"
                                data-bs-whatever="Edit Responsibility"
                              >
                                <i
                                  className="fas fa-edit"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">Sneha</td>
                            <td>SC</td>

                            <td>1-30</td>
                            <td>01-May-2021 09:00:00</td>
                            <td>JSmith</td>
                            <td>31-May-2021 10:00:00</td>
                            <td>JSmith</td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="assets/pdf/Data_Tables.pdf"
                                target="_blank"
                                className="position-relative btn btn-primary px-2 py-1"
                              >
                                <svg
                                  aria-hidden="true"
                                  width="20"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="eye"
                                  className="svg-inline--fa fa-eye fa-w-18"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#fff"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  width="16"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check fa-w-16 check-ab"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#DucmentView"
                                data-bs-whatever="Add Role"
                              >
                                <i
                                  className="fas fa-eye"
                                  style={{ fontSize: "22px" }}
                                ></i>
                              </a>
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
                                  </div>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="d-inline-block mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#EditDelegation"
                                data-bs-whatever="Edit Responsibility"
                              >
                                <i
                                  className="fas fa-edit"
                                  style={{ fontSize: "20px" }}
                                ></i>
                              </a>
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
      <div
        className="modal fade"
        id="ReviewResponsibility"
        tabindex="-1"
        aria-labelledby="ContactStudymodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Review Responsibility</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Search Responsibility"
                      name="search"
                      id="search"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6" style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onclick="CloseResponsiblityNewModal();"
                  >
                    Add Responsibility
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="employee_table">
                      <tr>
                        <th width="25%">Responsibility Number</th>

                        <th width="25%">Responsibility Name</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Obtain Consent</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Medical History</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Review Subject Eligibility</td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Conduct Physical Exam</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Interpret Lab Data</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onclick="resetForm();"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="AddResponsibilityNew"
        tabindex="-1"
        aria-labelledby="ContactStudymodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Review Responsibility</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-md-6">
                  <div align="center">
                    <input
                      type="text"
                      placeholder="Search Responsibility"
                      name="search"
                      id="search"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6" style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onclick="CloseResponsiblityNewModal();"
                  >
                    Add More Responsibility
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="employee_table">
                      <tr>
                        <th width="25%">Responsibility Number</th>

                        <th width="25%">Responsibility Name</th>
                        <th width="25%">Choose Responsibility</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Obtain Consent</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Medical History</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Review Subject Eligibility</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Conduct Physical Exam</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Interpret Lab Data</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#CloseResponsiblityNewModal"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onclick="resetForm();"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="CreateDelegation"
        tabindex="-1"
        aria-labelledby="ContactStudymodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Delegation</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-md-6">
                  <div align="center">
                    <input
                      type="text"
                      placeholder="Search User"
                      name="search"
                      id="search"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6" style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onclick="OpenNamePopup();"
                  >
                    Add Name
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="employee_table">
                      <tr>
                        <th width="25%">First Name</th>
                        <th width="25%">Last Name</th>
                        <th width="25%">Select</th>
                      </tr>
                      <tr>
                        <td>Ronald</td>
                        <td>Colella</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Martha</td>
                        <td>Tomlinson</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Cameron</td>
                        <td>Barnett</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>James</td>
                        <td>Foreman</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Dallas</td>
                        <td>Texas</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Patricia</td>
                        <td>Lohman</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#uploadDoc"
                >
                  Save Changes
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
      <div
        className="modal fade"
        id="AddName"
        tabindex="-1"
        aria-labelledby="AddNamemodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Name</h5>
              <button
                type="button"
                className="btn-close"
                onclick="CloseNamePopup();"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="upload-document-study.php">
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
                      <label htmlFor="role-Email" className="col-form-label">
                        Last Name:
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6"></div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#uploadDoc"
                  >
                    Add Name
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
      <div
        className="modal fade"
        id="AddRole"
        tabindex="-1"
        aria-labelledby="AddRolemodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Role</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Role:
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="role-name"
                      >
                        <option selected="">Select Role</option>
                        <option value="2">SC</option>
                        <option value="2">PI</option>
                        <option value="2">Site Staff</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onclick="CloseRoleModal();"
                  >
                    Add Role
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
      <div
        className="modal fade"
        id="AddResponsibility"
        tabindex="-1"
        aria-labelledby="AddResponsibilitymodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Responsibility</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Responsibility:
                      </label>
                      <select
                        className="select2 form-control select2-multiple"
                        multiple="multiple"
                        data-placeholder="Choose ..."
                      >
                        <option value="">Select Responsibility</option>
                        <option value="1">1 Obtain Consent</option>
                        <option value="2">2 Medical History</option>
                        <option value="2">3 Review Subject Eligibility</option>
                        <option value="2">4 Conduct Physical Exam</option>
                        <option value="2">5 Interpret Lab Data</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    onclick="CloseResponsiblityNewModal();"
                  >
                    Add Responsibility
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
      <div
        className="modal fade"
        id="EditDelegation"
        tabindex="-1"
        aria-labelledby="EditDelegationmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Delegation</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Role:
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="role-name"
                      >
                        <option selected="">Select Role</option>
                        <option value="1">CRO</option>
                        <option value="2">SC</option>
                        <option value="2">PI</option>
                        <option value="2">Site Staff</option>
                        <option value="2">Company Admin</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Responsibility:
                      </label>
                      <select
                        className="select2 form-control select2-multiple"
                        multiple="multiple"
                        data-placeholder="Choose ..."
                      >
                        <option value="">Select Role</option>
                        <option value="1">1 Obtain Consent</option>
                        <option value="2">2 Medical History</option>
                        <option value="2">3 Review Subject Eligibility</option>
                        <option value="2">4 Conduct Physical Exam</option>
                        <option value="2">5 Interpret Lab Data</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#uploadDoc"
                  >
                    Save Changes
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
      <div
        className="modal fade"
        id="AddStartDate"
        tabindex="-1"
        aria-labelledby="AddStartDatemodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Start Date</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Start Date:
                      </label>
                      <input
                        className="form-control"
                        type="date"
                        value="2019-08-19"
                        id="example-date-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onclick="CloseStartDateModal();"
                  >
                    Add Start Date
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
      <div
        className="modal fade"
        id="AddStopDate"
        tabindex="-1"
        aria-labelledby="AddStopDatemodal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Stop Date</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Stop Date:
                      </label>
                      <input
                        className="form-control"
                        type="date"
                        value="2019-08-19"
                        id="example-date-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onclick="CloseStopDateModal();"
                  >
                    Add Stop Date
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
      <div
        className="modal fade"
        id="DucmentView"
        tabindex="-1"
        aria-labelledby="DucmentView"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Document View</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Document
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="kartik.text"
                        id="example-date-input"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Due Date
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="1-2-2022"
                        id="example-date-input"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="role-name" className="col-form-label">
                        Action
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="Mark As A Complete"
                        id="example-date-input"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DelegationLog;
