import React from "react";

import { Link } from "react-router-dom";

const CompanyMenuDashbord = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Company</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item active">
                        <a href="#">Company</a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* <!-- <div className="col-lg-4">
 <div className="card overflow-hidden">
                                    <div className="bg-primary bg-soft">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="text-primary p-3">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Super Admin</p>
                                                </div>
                                            </div>
                                            <div className="col-3 align-self-end">
                                                <img src="assets/images/profile-img.png" alt="" className="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <img src="assets/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle">
                                                </div>
                                                <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                                <p className="text-muted mb-0 text-truncate">Super Admin</p>
												
                                            </div>
<div className="col-md-6 text-end align-self-end">
<p className="text-muted"><i className="fas fa-phone-alt" ></i> (123) 123 1234
</p>
<div className="mt-1">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#ViewProfile" className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                    </div>
                                                    </div>
                                            
                                        </div>
                                    </div>
                                </div>
								<div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-5">Activity</h4>
                                        <ul className="verti-timeline list-unstyled">
                                            <li className="event-list active">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                                </div>
                                                <div className="media">
                                                    <div className="me-3">
                                                        <h5 className="font-size-14 d-flex align-items-center"><span>10 Nov
                                                            <br><span className="text-muted text-sm">11:10 AM</span>
                                                            </span> <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>
                                                            New Study Created
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
                                                        <h5 className="font-size-14 d-flex align-items-center"><span>10 Nov
                                                            <br><span className="text-muted text-sm">10:15 AM</span>
                                                            </span> <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>
                                                            Training Updated
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
                                                        <h5 className="font-size-14 d-flex align-items-center"><span>10 Nov
                                                            <br><span className="text-muted text-sm">09:10 AM</span>
                                                            </span> <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>
                                                            Training completition Log
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
                                                        <h5 className="font-size-14 d-flex align-items-center"><span>10 Nov
                                                            <br><span className="text-muted text-sm">08:10 AM</span>
                                                            </span> <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>
                                                            Training completition Log
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4"><a href="index.html" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a></div>
                                    </div>
                                </div>
								
								<div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Study
Logs</h4>
                                        
                                        <div id="study_chart" className="apex-charts" dir="ltr"></div>                                      
                                    </div>
                                </div>
</div> --> */}
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <Link to="/createcompany">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-clipboard-list font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              Create Company
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
                        <Link to="/listofcompanies">
                          <div className="text-center">
                            <div className="d-inline-block mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="mdi mdi-telescope font-size-24"></i>
                              </span>
                            </div>
                            <p className="text-muted fw-medium"></p>
                            <h2 className="mb-4 font-size-24 text-primary">
                              List of Companies
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

export default CompanyMenuDashbord;
