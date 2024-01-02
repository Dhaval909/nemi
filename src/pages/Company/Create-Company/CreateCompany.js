import React from "react";


const CreateCompany = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Create a Company</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="/">Company</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Create a Company
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-10">
                <div className="card">
                  <div className="card-body">
                    <form id="myForm" action="upload-document-study.html">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Company no:
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
                              Company Unique id:
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="unique-id"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="last-name"
                              className="col-form-label"
                            >
                              Company Url:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Company Name:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Address:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Company Number 1:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Company Number 2:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Contact Person Name:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Status:
                            </label>
                            <select
                              id="selectcity"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="">Select Status</option>
                              <option value="0">Active</option>
                              <option value="0">In Active</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label
                              htmlFor="role-Responsibility"
                              className="col-form-label"
                            >
                              Select Internal user:
                            </label>
                            <select
                              className="select2 form-control select2-multiple"
                              multiple="multiple"
                              data-placeholder="Choose ..."
                            >
                              <optgroup label="Responsibility">
                                <option value="AK">
                                  List ALL Company Admin{" "}
                                </option>
                                <option value="HI">Kartik </option>
                                <option value="HI">Chetan </option>
                              </optgroup>
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
                          Create Company
                        </button>
                        <button type="button" className="btn btn-secondary">
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

export default CreateCompany;
