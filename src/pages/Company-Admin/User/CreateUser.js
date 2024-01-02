import React from "react";

const CreateUser = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
     
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Create User</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Company Admin</a>
                      </li>
                      <li className="breadcrumb-item active">Create User</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <form
                      className="outer-repeater"
                      id="myForm"
                      action="view-sites.php"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Role:
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
                              First Name:
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
                              Last Name:
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
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Email Id:
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
                            <label
                              htmlFor="role-name"
                              className="col-form-label"
                            >
                              Contact Number:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="role-name"
                            />
                          </div>
                        </div>

                        <div data-repeater-list="group-a">
                          <div data-repeater-item className="row">
                            <div className="mb-3 col-lg-3">
                              <label htmlFor="name">Company</label>
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

                            <div className="mb-3 col-lg-3">
                              <label htmlFor="email">Study</label>
                              <select
                                className="select2 form-control select2-multiple"
                                multiple="multiple"
                                data-placeholder="Choose ..."
                              >
                                <option value="AK">Study 1 </option>
                                <option value="HI">Study 2</option>
                                <option value="HI">Study 3</option>
                              </select>
                            </div>

                            <div className="mb-3 col-lg-3">
                              <label htmlFor="subject">Site</label>
                              <select
                                className="select2 form-control select2-multiple"
                                multiple="multiple"
                                data-placeholder="Choose ..."
                              >
                                <option value="AK">site 1 </option>
                                <option value="HI">site 2</option>
                                <option value="HI">site 3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <input
                          data-repeater-delete
                          type="button"
                          className="btn btn-primary inner me-3"
                          value="Delete"
                        />
                        <input
                          data-repeater-create
                          type="button"
                          className="btn btn-success mt-3 mt-lg-0 me-3"
                          value="Add"
                        />
                        <button
                          className="btn btn-primary me-3"
                          data-bs-toggle="modal"
                          data-bs-target="#uploadDoc"
                        >
                          Create User
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary me-3"
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

export default CreateUser;
