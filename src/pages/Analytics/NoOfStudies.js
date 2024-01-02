import React from "react";

const NoOfStudies = () => {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">No. of study</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Super Admin</a>
                      </li>
                      <li className="breadcrumb-item active">No. of study</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="mb-3">
                          <div className=" mb-3">
                            <div className="d-inline-block ms-3">
                              <div className="row gx-3 mb-3">
                                <span className="d-inline-block me-2 col-auto col-form-label">
                                  <i className="fas fa-filter"></i> Filter
                                </span>
                                <div className="col-auto">
                                  {" "}
                                  <label
                                    htmlFor="startdate"
                                    className="col-auto col-form-label"
                                  >
                                    Start Date
                                  </label>
                                  <div className="col-auto">
                                    <input
                                      id="startdate"
                                      type="date"
                                      className="form-control"
                                      name="start"
                                    />
                                  </div>
                                </div>
                                <div className="col-auto">
                                  <label
                                    htmlFor="enddate"
                                    className="col-auto col-form-label"
                                  >
                                    End Date
                                  </label>
                                  <div className="col-auto">
                                    <input
                                      id="enddate"
                                      type="date"
                                      className="form-control"
                                      name="end"
                                    />
                                  </div>
                                </div>
                                <div className="col-auto">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-auto col-form-label"
                                  >
                                    Country
                                  </label>
                                  <div className="col-auto">
                                    <select
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
                                <div className="col-auto">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-auto col-form-label"
                                  >
                                    Study
                                  </label>
                                  <div className="col-auto">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option value="0">Study1</option>
                                      <option value="1">Study2</option>
                                      <option value="2">Study3</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-auto">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-auto col-form-label"
                                  >
                                    Company
                                  </label>
                                  <div className="col-auto">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option value="0">Company1</option>
                                      <option value="1">Company2</option>
                                      <option value="2">Company3</option>
                                      <option value="3">Company4</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <ul className="nav">
                            <li className="nav-item">
                              <a
                                className="nav-link active ps-0"
                                aria-current="page"
                                href="#"
                              >
                                Today
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Yesterday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Current Week
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Previous Week
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Current Month
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Previous Month
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Current Year
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Previous Year
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="text-end mb-4">
                          <a
                            href="#"
                            className="btn btn-primary  btn-rounded waves-effect waves-light"
                          >
                            <i className="fas fa-file-export"></i> Export
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="align-middle">No.</th>
                            <th className="align-middle">Study name</th>
                            <th className="align-middle">Company name</th>
                            <th className="align-middle">Country name</th>
                            <th className="align-middle">Site name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
                          </tr>
                          <tr>
                            <td className="text-body fw-bold">1</td>
                            <td>Study name</td>
                            <td>Companyabc</td>
                            <td>UK</td>
                            <td>Site name</td>
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
    </>
  );
};

export default NoOfStudies;
