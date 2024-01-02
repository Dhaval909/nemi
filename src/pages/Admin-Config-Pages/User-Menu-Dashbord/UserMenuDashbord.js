import React from "react";


import { Link } from "react-router-dom";

const UserMenuDashbord = () => {
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
                  <h4 className="mb-sm-0 font-size-18">Users</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item active">
                        <a href="/">Users</a>
                        {/* <a href="#"> 
                          </a> */}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/listof-user-role2">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-clipboard-list font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              List Of Role
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
                        <Link to="/listof-user-responsibility2">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-telescope font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              List Permission
                            </h2>
                            {/* <!-- <h2 className="mb-4 font-size-24 text-primary">List of User Responsibility</h4> --> */}
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
                        <Link to="/listof-permission2">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-image-area font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              Delegation Log Responsibilities
                            </h2>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- <div className="card-footer bg-transparent border-top">
                                        <div className=" d-flex font-size-20 justify-content-center">
                                            <a href="site-log.php" className="btn btn-primary waves-effect waves-light btn-sm">View List</a>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>

                  {/* <!-- end row --> */}
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

export default UserMenuDashbord;
