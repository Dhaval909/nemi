import React from "react";
import { Link } from "react-router-dom";

const ReviewTrainingLog = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}{" "}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Review Training Log</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href={"#"}>Super Admin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Study2</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Review Training Log
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
                      <Link
                        className="nav-link"
                        id="v-pills-gen-ques-tab"
                        to="/review-ISF"
                        role="tab"
                        aria-controls="v-pills-gen-ques"
                        aria-selected="true"
                      >
                        <i className="fas fa-id-badge d-block check-nav-icon mt-4 mb-2"></i>
                        <p className="fw-bold mb-4">Review ISF</p>
                      </Link>
                      <Link
                        className="nav-link"
                        id="v-pills-privacy-tab"
                        to="/review-delegationlog"
                        role="tab"
                        aria-controls="v-pills-privacy"
                        aria-selected="false"
                      >
                        <i className="fas fa-clipboard-list d-block check-nav-icon mt-4 mb-2"></i>
                        <p className="fw-bold mb-4">Review Delegation Log</p>
                      </Link>
                      <Link
                        className="nav-link active"
                        id="v-pills-support-tab"
                        href="/review-training-log"
                        role="tab"
                        aria-controls="v-pills-support"
                        aria-selected="false"
                      >
                        <i className="fas fa-file-alt d-block check-nav-icon mt-4 mb-2"></i>
                        <p className="fw-bold mb-4">Review Training Document</p>
                      </Link>
                      <Link
                        class="nav-link "
                        id="v-pills-support-tab"
                        to="/upload-document"
                        role="tab"
                        aria-controls="v-pills-support"
                        aria-selected="false"
                      >
                        <i class="fas fa-file-upload d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="fw-bold mb-4">Upload Document</p>
                      </Link>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-6 fw-bold">Study2</div>
                        <div className="col-6 text-end fw-bold">Site1</div>
                      </div>
                      <div className="table-responsive">
                        <table
                          className="table align-middle table-nowrap mb-0"
                          id="table"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="align-middle">Name</th>
                              <th className="align-middle">Role</th>
                              <th className="align-middle">Responsibility</th>
                              <th className="align-middle">Start Date</th>

                              <th className="align-middle">Stop Date</th>

                              <th className="align-middle">Protocol 1</th>
                              <th className="align-middle">IB 1</th>
                              <th className="align-middle">Protocol 2</th>
                              <th className="align-middle">Protocol 3</th>
                              <th className="align-middle">Protocol 4</th>

                              <th className="align-middle">Protocol 5</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-body fw-bold">Kartik</td>
                              <td>SC</td>
                              <td>1-30</td>
                              <td>01-May-2021</td>
                              <td>31-May-2021</td>
                              <td>02-June-2021</td>
                              <td>12-July-2021</td>
                              <td>N/A</td>
                              <td>06-June-2021</td> <td>N/A</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Krutika</td>
                              <td>CRO</td>
                              <td>1-30</td>
                              <td>01-May-2021</td>
                              <td>31-May-2021</td>
                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>06-June-2021</td> <td>N/A</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Nemi</td>
                              <td>SC</td>
                              <td>1-30</td>
                              <td>01-May-2021</td>
                              <td>31-May-2021</td>
                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>N/A</td>
                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>{" "}
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Smith</td>
                              <td>PI</td>

                              <td>1-30</td>
                              <td>01-May-2021</td>

                              <td>31-May-2021</td>

                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>N/A</td>

                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Shreeya</td>
                              <td>Site Staff</td>
                              <td>1-30</td>
                              <td>01-May-2021</td>
                              <td>31-May-2021</td>
                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>06-June-2021</td> <td>N/A</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Astha</td>
                              <td>SC</td>

                              <td>1-30</td>
                              <td>01-May-2021</td>

                              <td>31-May-2021</td>

                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>N/A</td>

                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Nayana</td>
                              <td>PI</td>

                              <td>1-30</td>
                              <td>01-May-2021</td>

                              <td>31-May-2021</td>

                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>N/A</td>

                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Prerak</td>
                              <td>SC</td>

                              <td>1-30</td>
                              <td>01-May-2021</td>

                              <td>31-May-2021</td>

                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>06-June-2021</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Prachi</td>
                              <td>SC</td>
                              <td>1-30</td>
                              <td>01-May-2021</td>
                              <td>31-May-2021</td>
                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>N/A</td>
                              <td>06-June-2021</td> <td>N/A</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body fw-bold">Rachi</td>
                              <td>Site Staff</td>

                              <td>1-30</td>
                              <td>01-May-2021</td>

                              <td>31-May-2021</td>

                              <td>06-June-2021</td>
                              <td>06-June-2021</td>
                              <td>N/A</td>

                              <td>06-June-2021</td>
                              <td>N/A</td>
                              <td>
                                <i className="mdi mdi-close text-primary mdi-24px"></i>
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
      </div>
    </>
  );
};

export default ReviewTrainingLog;
