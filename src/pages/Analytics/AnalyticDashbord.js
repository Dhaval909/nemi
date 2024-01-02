import React from "react";

import { Link } from "react-router-dom";

const AnalyticDashbord = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Analytics</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item active">
                        <a href="#">Analytics</a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/no-of-companies">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-clipboard-list font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              No Of Companies
                            </h2>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- <div className="card-footer bg-transparent border-top">
                                        <div className=" d-flex font-size-20 justify-content-center">
                                            <a href="license-log.php" className="btn btn-primary waves-effect waves-light btn-sm">View List</a>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/no-of-users-asper-role">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-telescope font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              No Of Users As Per Role
                            </h2>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- <div className="card-footer bg-transparent border-top">
                                        <div className=" d-flex font-size-20 justify-content-center">
                                            <a href="study-log.php" className="btn btn-primary waves-effect waves-light btn-sm">View List</a>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/no-of-studies">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-telescope font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              No Of Study
                            </h2>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/no-of-sites">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-telescope font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              No Of Site
                            </h2>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/no-of-active-users">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-telescope font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              Active/ Inactive User
                            </h2>
                          </div>
                        </Link>
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

export default AnalyticDashbord;
