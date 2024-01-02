import React from "react";

const CreateStudy = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Create a Study</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">Create a Study</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-10">
                <div className="card">
                  <div className="card-body">
                    <form id="myForm" action="upload-document-study.php">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Name Of Study:
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
                              Study Code:
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
                              htmlFor="role-Email"
                              className="col-form-label"
                            >
                              Date:
                            </label>
                            <input
                              className="form-control"
                              type="datetime-local"
                              value="2019-08-19T13:45:00"
                              id="example-datetime-local-input"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Contact Person Name:
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
                              Contact Person Number:
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
                              Contact Email:
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
                            <label
                              htmlFor="last-name"
                              className="col-form-label"
                            >
                              Description:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Select Company:
                            </label>
                            <select
                              className="select2 form-control select2-multiple"
                              data-placeholder="Choose ..."
                            >
                              <option value="">Select Company</option>
                              <optgroup label="Company 1">
                                <option value="AK">Site Name1</option>
                                <option value="HI">Site Name2</option>
                                <option value="HI">Site Name3</option>
                              </optgroup>
                              <optgroup label="Company 2">
                                <option value="AK">Site Name1</option>
                                <option value="HI">Site Name2</option>
                                <option value="HI">Site Name3</option>
                              </optgroup>
                              <optgroup label="Company 3">
                                <option value="AK">Site Name1</option>
                                <option value="HI">Site Name2</option>
                                <option value="HI">Site Name3</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <button
                          className="btn btn-primary mx-4"
                          data-bs-toggle="modal"
                          data-bs-target="#uploadDoc"
                        >
                          Create Study
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

export default CreateStudy;
