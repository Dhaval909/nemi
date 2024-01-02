import React from "react";
import { Link } from "react-router-dom";

function ReviewISF() {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}{" "}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Review ISF</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">Review ISF</li>
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
                    <Link
                      className="nav-link active"
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
                      className="nav-link"
                      id="v-pills-support-tab"
                      to="/review-training-log"
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
                      href="/upload-document"
                      role="tab"
                      aria-controls="v-pills-support"
                      aria-selected="false"
                    >
                      <i class="fas fa-file-upload d-block check-nav-icon mt-4 mb-2"></i>
                      <p class="fw-bold mb-4">Upload Document</p>
                    </Link>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-lg-3 pt-lg-3">
                    <div className="card filemanager-sidebar me-md-2 mb-md-0 w-100 mxw-auto mt-lg-5">
                      <div className="card-body px-0 pt-2">
                        <div
                          className="d-flex flex-column leftfoderMenu sidebar-menu"
                          id="sidebar-floder"
                        >
                          <ul
                            className="metismenu list-unstyled sidemenu side-menu"
                            id="side-menu-floder"
                          >
                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                Contracts and Feasibility
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    data-bs-toggle="collapse"
                                    href="#reviewisf"
                                    key="t-level-1-1"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    CDA
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="has-arrow"
                                    key="t-level-1-2"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Indemnity
                                  </a>
                                  <ul className="sub-menu" >
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-1"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        CTA
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-2"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Insurance
                                      </a>
                                      <ul
                                        className="sub-menu"
                                        
                                      >
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-1"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            SSDA
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-2"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            EMRQ
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                Delegation Log
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="#"
                                    key="t-level-1-1"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.1
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="has-arrow"
                                    key="t-level-1-2"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.2
                                  </a>
                                  <ul className="sub-menu" >
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-1"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.1
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-2"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.2
                                      </a>
                                      <ul
                                        className="sub-menu"
                                        
                                      >
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-1"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.1
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-2"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.2
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                Study Logs
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="#"
                                    key="t-level-1-1"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.1
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="has-arrow"
                                    key="t-level-1-2"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.2
                                  </a>
                                  <ul className="sub-menu" >
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-1"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.1
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-2"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.2
                                      </a>
                                      <ul
                                        className="sub-menu"
                                        
                                      >
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-1"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.1
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-2"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.2
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                Personnel Documents
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="#"
                                    key="t-level-1-1"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.1
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="has-arrow"
                                    key="t-level-1-2"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.2
                                  </a>
                                  <ul className="sub-menu" >
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-1"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.1
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-2"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.2
                                      </a>
                                      <ul
                                        className="sub-menu"
                                        
                                      >
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-1"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.1
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-2"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.2
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="has-arrow waves-effect"
                              >
                                <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                Monitoring Documents
                              </a>
                              <ul className="sub-menu" >
                                <li>
                                  <a
                                    href="#"
                                    key="t-level-1-1"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.1
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="has-arrow"
                                    key="t-level-1-2"
                                  >
                                    <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                    Folder Level 1.2
                                  </a>
                                  <ul className="sub-menu" >
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-1"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.1
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        key="t-level-2-2"
                                      >
                                        <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                        Level 2.2
                                      </a>
                                      <ul
                                        className="sub-menu"
                                        
                                      >
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-1"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.1
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            key="t-level-2-2"
                                          >
                                            <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                                            Level 3.2
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <div className="mt-3 mx-4 create-folder">
                            <div className="dropdown">
                              <button
                                className="btn btn-light dropdown-toggle w-100"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-plus me-1"></i> Create New
                              </button>
                              <div className="dropdown-menu">
                                <div className="dropdown">
                                  <a
                                    className="dropdown-item dropdown-toggle arrow-none"
                                    href="#"
                                    id="topnav-email"
                                    role="button"
                                  >
                                    <span key="t-email">
                                      <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                      Folder Name
                                    </span>{" "}
                                    <div className="arrow-down"></div>
                                  </a>
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="topnav-email"
                                  >
                                    <a
                                      href="#"
                                      className="dropdown-item"
                                      key="t-inbox"
                                    >
                                      <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                      Folder Name
                                    </a>
                                    <a
                                      href="#"
                                      className="dropdown-item"
                                      key="t-read-email"
                                    >
                                      <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                      Folder Name
                                    </a>

                                    <div className="dropdown">
                                      <a
                                        className="dropdown-item dropdown-toggle arrow-none"
                                        href="#"
                                        id="topnav-blog"
                                        role="button"
                                      >
                                        <span key="t-email-templates">
                                          <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                          Folder Name
                                        </span>{" "}
                                        <div className="arrow-down"></div>
                                      </a>
                                      <div
                                        className="dropdown-menu"
                                        aria-labelledby="topnav-blog"
                                      >
                                        <a
                                          href="#"
                                          className="dropdown-item"
                                          key="t-basic-action"
                                        >
                                          <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                          Folder Name
                                        </a>
                                        <a
                                          href="#"
                                          className="dropdown-item"
                                          key="t-alert-email"
                                        >
                                          <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                          Folder Name
                                        </a>
                                        <a
                                          href="#"
                                          className="dropdown-item"
                                          key="t-bill-email"
                                        >
                                          <i className="mdi mdi-folder text-warning me-1"></i>{" "}
                                          Folder Name
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
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="min-100">
                      <div className="min-100">
                        <div className="rightContent" id="LicenseLog">
                          <div className="mb-2">
                            <div className="row mb-3">
                              <div className="col-lg-8">
                                <div className="mt-2">
                                  <h5>
                                    Monitoring Documents / Folder Level 1.1
                                  </h5>
                                </div>
                              </div>
                              <div className="col-lg-4"></div>
                            </div>
                          </div>

                          <div className="table-responsive">
                            <table class="table project-list-table table-nowrap align-middle table-borderless">
                              <thead>
                                <tr>
                                  <th class="align-middle">No.</th>
                                  <th class="align-middle">Document Name</th>
                                  <th class="align-middle">Date</th>
                                  <th class="align-middle">Status</th>
                                  <th class="align-middle">Modified By</th>

                                  <th class="align-middle" width="100">
                                    Action{" "}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-body fw-bold">
                                    1
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document1</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>

                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Smith
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        Study Updated{" "}
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Superseded
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Kartik
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      09 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        Study Updated
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              <span class="badge badge-pill badge-soft-success font-size-11">
                                                Superseded
                                              </span>
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Prerak
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      08 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        Study Updated
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              <span class="badge badge-pill badge-soft-success font-size-11">
                                                Superseded
                                              </span>
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Astha
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      07 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        Study Updated
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              <span class="badge badge-pill badge-soft-success font-size-11">
                                                Superseded
                                              </span>
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Shreeya
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    2
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity2"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document2</td>
                                  <td>11-04-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Prerak
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity2"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    3
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity3"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document3</td>
                                  <td>10-03-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Purva
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity3"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    4
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity4"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document4</td>
                                  <td>22-02-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Astha
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity4"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    5
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity5"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document5</td>
                                  <td>19-02-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Shreeya
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity5"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    6
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity6"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document6</td>
                                  <td>08-02-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Nayana
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>

                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity6"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    7
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity7"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document7</td>
                                  <td>04-02-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Nemi
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity7"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    8
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity8"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document8</td>
                                  <td>22-01-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Kartik
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity8"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    9
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity9"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document9</td>
                                  <td>19-01-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Pravin
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity9"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Smith
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-body fw-bold">
                                    10
                                    <a
                                      data-bs-toggle="collapse"
                                      href="#collapseActivity10"
                                      role="button"
                                      class="viewact collapsed"
                                    >
                                      <i
                                        class="fas fa-plus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                      <i
                                        class="fas fa-minus-circle"
                                        style={{ fontSize: "16px" }}
                                      ></i>
                                    </a>
                                  </td>
                                  <td>Document10</td>
                                  <td>02-01-2021</td>
                                  <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">
                                      Current
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      class="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Parth
                                    </a>
                                  </td>

                                  <td class="align-middle">
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        class="d-inline-block mx-2"
                                      >
                                        <i
                                          class="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a href="#" class="d-inline-block mx-2">
                                        <i
                                          class="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  class="align-top collapse"
                                  id="collapseActivity10"
                                >
                                  <td colspan="6" class="p-0">
                                    <table class="table border-white mb-0">
                                      <tbody class="verti-timeline">
                                        <tr>
                                          <td width="470">
                                            <div class="event-list active">
                                              <div class="event-timeline-dot">
                                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      22 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Neha
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Astha
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Prerak
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="470">
                                            <div class="event-list">
                                              <div class="event-timeline-dot">
                                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                                              </div>
                                              <div class="media">
                                                <div class="me-3">
                                                  <h5 class="font-size-14 d-flex align-items-center">
                                                    <span>
                                                      10 Nov
                                                      <span class="text-muted text-sm">
                                                        11:10 AM
                                                      </span>
                                                    </span>{" "}
                                                    <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                                  </h5>
                                                </div>
                                                <div class="media-body">
                                                  <div>
                                                    <h6>
                                                      <a
                                                        href="#"
                                                        class="fw-bold text-dark"
                                                      >
                                                        New study created
                                                      </a>{" "}
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="" width="110">
                                            <span class="badge badge-pill badge-soft-success font-size-11">
                                              Active
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              class="fw-bold"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modifyBy"
                                            >
                                              Shreeya
                                            </a>
                                          </td>

                                          <td
                                            class="align-middle text-end"
                                            width="100"
                                          >
                                            <div class="d-flex align-items-center">
                                              <a
                                                href="assets/pdf/Data_Tables.pdf"
                                                target="blank"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-eye"
                                                  style={{ fontSize: "22px" }}
                                                ></i>
                                              </a>

                                              <a
                                                href="#"
                                                class="d-inline-block mx-2"
                                              >
                                                <i
                                                  class="fas fa-download"
                                                  style={{ fontSize: "20px" }}
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
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
                        <div className="rightContent collapse" id="reviewisf">
                          <div className="mb-2">
                            <div className="row mb-3">
                              <div className="col-xl-12">
                                <div className="mt-2">
                                  <h5>Selected Folder Name</h5>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="table-responsive">
                            <table className="table project-list-table table-nowrap align-middle table-borderless">
                              <thead className="table-light">
                                <tr>
                                  <th className="align-middle">No.</th>
                                  <th className="align-middle">
                                    Document Name
                                  </th>
                                  <th className="align-middle">Date</th>
                                  <th className="align-middle">Status</th>
                                  <th className="align-middle">Modified By</th>

                                  <th className="align-middle" width="100">
                                    Action{" "}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-body fw-bold">11</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Sneha
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="text-body fw-bold">2</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Kartik
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="assets/pdf/Data_Tables.pdf"
                                        target="blank"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">3</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Saurya
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">4</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Nemi
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">5</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Priya
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">6</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Purvi
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">7</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Kabir
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">8</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Parth
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">9</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Payal
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
                                          style={{ fontSize: "20px" }}
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-body fw-bold">10</td>
                                  <td>Document Name</td>
                                  <td>19-05-2021</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-11">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="fw-bold"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modifyBy"
                                    >
                                      Nirav
                                    </a>
                                  </td>

                                  <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-eye"
                                          style={{ fontSize: "22px" }}
                                        ></i>
                                      </a>

                                      <a
                                        href="#"
                                        className="d-inline-block mx-2"
                                      >
                                        <i
                                          className="fas fa-download"
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
                          <div className="card-footer bg-transparent border-top">
                            <div className=" d-flex font-size-20 justify-content-center">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#uploadDoc"
                                className="btn btn-primary btn-rounded waves-effect waves-light mx-2"
                              >
                                <i
                                  className="fas fa-file-upload"
                                  style={{ fontSize: "12px" }}
                                ></i>{" "}
                                Upload Document
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
        </div>
        <div
          className="modal fade"
          id="modifyBy"
          tabindex="-1"
          aria-labelledby="UploadDocument"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="UploadDocument">
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
        </div>

        <div
          className="modal fade"
          id="collapseActivity"
          tabindex="-1"
          aria-labelledby="UploadDocument"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="UploadDocument">
                  Document Update History
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  data-simplebar
                  className="mt-2"
                  style={{ maxHeight: "240px" }}
                >
                  <ul className="verti-timeline list-unstyled">
                    <li className="event-list active">
                      <div className="event-timeline-dot">
                        <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14 d-flex align-items-center">
                            <span>
                              10 Nov
                              <span className="text-muted text-sm">
                                11:10 AM
                              </span>
                            </span>{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <div>
                            <h6>
                              <a href="#" className="fw-bold text-dark">
                                New study created
                              </a>{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14 d-flex align-items-center">
                            <span>
                              10 Nov
                              <span className="text-muted text-sm">
                                11:10 AM
                              </span>
                            </span>{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <div>
                            <h6>
                              <a href="#" className="fw-bold text-dark">
                                Training updated{" "}
                              </a>{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14 d-flex align-items-center">
                            <span>
                              10 Nov
                              <span className="text-muted text-sm">
                                11:10 AM
                              </span>
                            </span>{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <div>
                            <h6>
                              <a href="#" className="fw-bold text-dark">
                                Training Completion Log
                              </a>{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14 d-flex align-items-center">
                            <span>
                              10 Nov
                              <span className="text-muted text-sm">
                                11:10 AM
                              </span>
                            </span>{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <div>
                            <h6>
                              <a href="#" className="fw-bold text-dark">
                                Training updated{" "}
                              </a>{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18"></i>
                      </div>
                      <div className="media">
                        <div className="me-3">
                          <h5 className="font-size-14 d-flex align-items-center">
                            <span>
                              10 Nov
                              <span className="text-muted text-sm">
                                11:10 AM
                              </span>
                            </span>{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div className="media-body">
                          <div>
                            <h6>
                              <a href="#" className="fw-bold text-dark">
                                Training Completion Log
                              </a>{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="uploadDoc"
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
                <div className="Upload_Folder myForm">
                  <form id="myForm">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label htmlFor="role-name" className="col-form-label">
                            File Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="role-name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label htmlFor="formFile" className="col-form-label">
                            File Upload{" "}
                            <small className="text-muted sm-12">
                              (Upload max 5 at a time)
                            </small>
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            multiple="multiple"
                          />
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
      </div>
    </>
  );
}

export default ReviewISF;
