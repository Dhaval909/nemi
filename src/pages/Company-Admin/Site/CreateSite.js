import React from "react";

const CreateSite = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Create Site</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">Create Site</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <form id="myForm" action="view-sites.html">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Contact"
                              className="col-form-label"
                            >
                              Select Company:
                            </label>

                            <select
                              id="selectCounty"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Company</option>
                              <option value="1">Company</option>
                              <option value="2">Company</option>
                              <option value="3">Company</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Address"
                              className="col-form-label"
                            >
                              Select Study:
                            </label>

                            <select
                              id="selectState"
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
                        </div>

                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Contact"
                              className="col-form-label"
                            >
                              Country:
                            </label>

                            <select
                              id="selectCounty"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">USA</option>
                              <option value="1">Germany</option>
                              <option value="2">Russia</option>
                              <option value="3">Italy</option>
                            </select>
                          </div>
                        </div>
                        {/* <!-- <div className="col-md-4">
		<div className="mb-3">
            <label htmlFor="role-Address" className="col-form-label">State:</label>
            
    
      <select id="selectState" className="form-select" aria-label="Default select example">
        <option value="0">All</option>
 <option value="0">Ohio</option>
  <option value="1">Delaware</option>
  <option value="2">Florida</option>
  <option value="3">Texas</option>
  
</select>
          </div>
		</div> --> */}
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-City"
                              className="col-form-label"
                            >
                              City:
                            </label>
                            <select
                              id="selectcity"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">All</option>
                              <option value="0">Columbus</option>
                              <option value="1">Delaware</option>
                              <option value="2">Florida</option>
                              <option value="3">Texas</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Site Number:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="role-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Site Name:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="role-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-City"
                              className="col-form-label"
                            >
                              Select Status
                            </label>
                            <select
                              id="selectcity"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Active</option>
                              <option value="0">In Active</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <button
                          className="btn btn-primary mx-4"
                          data-bs-toggle="modal"
                          data-bs-target="#uploadDoc"
                        >
                          Create Site
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
      </div>
      
    </>
  );
};

export default CreateSite;
