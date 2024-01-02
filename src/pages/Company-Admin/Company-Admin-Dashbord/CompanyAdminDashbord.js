import React from "react";

import { Link } from "react-router-dom";

const CompanyAdminDashbord = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Company Admin</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item active">
                        <a href="#">Company Admin</a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button fw-medium"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          
                          aria-controls="collapseOne"
                        >
                          Study
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card mini-stats-wid">
                                <div className="card-body">
                                  <Link to="/create-study">
                                    <div className="text-center">
                                      <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span className="avatar-title">
                                          <i className="mdi mdi-clipboard-listfont-size-24"></i>
                                        </span>
                                      </div>
                                      <p className="text-muted fw-medium"></p>
                                      <h2 className="mb-4 font-size-24 text-primary">
                                        Create Study
                                      </h2>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card mini-stats-wid">
                                <div className="card-body">
                                  <Link to="/listof-study">
                                    <div className="text-center">
                                      <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span className="avatar-title">
                                          <i className="mdi mdi-clipboard-listfont-size-24"></i>
                                        </span>
                                      </div>
                                      <p className="text-muted fw-medium"></p>
                                      <h2 className="mb-4 font-size-24 text-primary">
                                        List Out Study
                                      </h2>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button fw-medium collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Site
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card mini-stats-wid">
                                <div className="card-body">
                                  <Link to="/create-site">
                                    <div className="text-center">
                                      <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span className="avatar-title">
                                          <i className="mdi mdi-clipboard-listfont-size-24"></i>
                                        </span>
                                      </div>
                                      <p className="text-muted fw-medium"></p>
                                      <h2 className="mb-4 font-size-24 text-primary">
                                        Create Site
                                      </h2>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card mini-stats-wid">
                                <div className="card-body">
                                  <Link to="/listof-sites">
                                    <div className="text-center">
                                      <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span className="avatar-title">
                                          <i className="mdi mdi-clipboard-listfont-size-24"></i>
                                        </span>
                                      </div>
                                      <p className="text-muted fw-medium"></p>
                                      <h2 className="mb-4 font-size-24 text-primary">
                                        List Out Site
                                      </h2>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button fw-medium collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          User
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card mini-stats-wid">
                                <div className="card-body">
                                  <Link to="/create-user">
                                    <div className="text-center">
                                      <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span className="avatar-title">
                                          <i className="mdi mdi-clipboard-listfont-size-24"></i>
                                        </span>
                                      </div>
                                      <p className="text-muted fw-medium"></p>
                                      <h2 className="mb-4 font-size-24 text-primary">
                                        Create User
                                      </h2>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card mini-stats-wid">
                                <div className="card-body">
                                  <Link to="/list-user">
                                    <div className="text-center">
                                      <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span className="avatar-title">
                                          <i className="mdi mdi-clipboard-listfont-size-24"></i>
                                        </span>
                                      </div>
                                      <p className="text-muted fw-medium"></p>
                                      <h2 className="mb-4 font-size-24 text-primary">
                                        List Out User
                                      </h2>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- <div className="row">
							<div className="col-md-12">
							<div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">License Log</h4>
                                        
                                        <div id="column_chart" className="apex-charts" dir="ltr"></div>                                      
                                    </div>
                                </div>
							</div>
							<div className="col-md-6"></div>
							</div> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default CompanyAdminDashbord;
