import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src="img/logo.PNG" alt="" />
          </div>
        </div>
        <form action="">
          <div className="form-group row">
            <div className="col">
              <div className="card">
                <div className="card-header text-center">
                  Database Connection Information
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2">
                      <label htmlFor="db_type">Database Type</label>
                      <select
                        className="form-control"
                        name="db_type"
                        id="db_type"
                      >
                        <option value="mysql">MySql</option>
                        <option value="sql">SQL</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="host">Host</label>
                      <input className="form-control" type="text" id="host" />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="username">Username</label>
                      <input
                        className="form-control"
                        type="text"
                        id="username"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="text"
                        id="password"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="database">Database</label>
                      <input
                        className="form-control"
                        type="text"
                        id="database"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header text-center">Tables</div>
              <div className="card-body">
                <div className="list-group list-group-root">
                  <a
                    href="#item-2"
                    className="list-group-item"
                    data-toggle="collapse"
                  >
                    <i className="glyphicon glyphicon-chevron-right" />
                    Table 1 (8)
                  </a>
                  <div className="list-group collapse" id="item-2">
                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col1" />{" "}
                      <label htmlFor="col1">Column 1 (PK)</label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col2" />{" "}
                      <label htmlFor="col2">
                        Column 2 <span className="text-info">(Nullable)</span>
                      </label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col3" />{" "}
                      <label htmlFor="col3">
                        Column 3 <span className="text-danger">(Required)</span>
                      </label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col4" />{" "}
                      <label htmlFor="col4">Column 4</label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col5" />{" "}
                      <label htmlFor="col5">Column 5</label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col6" />{" "}
                      <label htmlFor="col6">Column 6</label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col7" />{" "}
                      <label htmlFor="col7">Column 7</label>
                    </div>

                    <div className="list-group-item pt-0 pb-0">
                      <input type="checkbox" id="col8" />{" "}
                      <label htmlFor="col8">Column 8</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header text-center">
                Insert Data In Following Columns (3)
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center border-bottom pb-2 mb-2">
                  <div className="d-flex">
                    <label htmlFor="total_rows">How many rows?</label>
                    <input
                      type="text"
                      className="form-control mx-3"
                      id="total_rows"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="delete_prev_data">
                      <input type="checkbox" id="delete_prev_data" /> Truncate
                      Tables
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col m-2 p-2 faker-box border border-light-grey">
                    <h5>Col #1</h5>
                    <h6>(int)</h6>
                    <select name="ctrl1" id="ctr1" className="form-control">
                      <option value="">Select...</option>
                      <option value="" disabled>
                        --- Area1 ---
                      </option>
                      <option value="">Date Of Birth</option>
                      <option value="">Full Name</option>
                      <option value="" disabled>
                        --- Area2 ---
                      </option>
                      <option value="">Address</option>
                    </select>

                    <i className="fas fa-times-circle remove-column cursor-pointer" />
                  </div>
                  <div className="col m-2 p-2 faker-box border border-light-grey">
                    <h5>Col #2</h5>
                    <h6>var_char(255)</h6>
                    <select name="ctrl1" id="ctr1" className="form-control">
                      <option value="">Select...</option>
                      <option value="" disabled>
                        --- Area1 ---
                      </option>
                      <option value="">Date Of Birth</option>
                      <option value="">Full Name</option>
                      <option value="" disabled>
                        --- Area2 ---
                      </option>
                      <option value="">Address</option>
                    </select>

                    <i className="fas fa-times-circle remove-column cursor-pointer" />
                  </div>
                  <div className="col m-2 p-2 faker-box border border-light-grey">
                    <h5>Col #1</h5>
                    <h6>(datetime)</h6>
                    <select name="ctrl1" id="ctr1" className="form-control">
                      <option value="">Select...</option>
                      <option value="" disabled>
                        --- Area1 ---
                      </option>
                      <option value="">Date Of Birth</option>
                      <option value="">Full Name</option>
                      <option value="" disabled>
                        --- Area2 ---
                      </option>
                      <option value="">Address</option>
                    </select>

                    <i className="fas fa-times-circle remove-column cursor-pointer" />
                  </div>

                  <div className="w-100" />

                  <div className="col m-2 p-2 faker-box border border-light-grey">
                    <h5>Col #1</h5>
                    <h6>(datetime)</h6>
                    <select name="ctrl1" id="ctr1" className="form-control">
                      <option value="">Select...</option>
                      <option value="" disabled>
                        --- Area1 ---
                      </option>
                      <option value="">Date Of Birth</option>
                      <option value="">Full Name</option>
                      <option value="" disabled>
                        --- Area2 ---
                      </option>
                      <option value="">Address</option>
                    </select>
                    <i className="fas fa-times-circle remove-column cursor-pointer" />
                  </div>
                  <div className="col m-2 p-2 faker-box border border-light-grey">
                    <h5>Col #1</h5>
                    <h6>(datetime)</h6>
                    <select name="ctrl1" id="ctr1" className="form-control">
                      <option value="">Select...</option>
                      <option value="" disabled>
                        --- Area1 ---
                      </option>
                      <option value="">Date Of Birth</option>
                      <option value="">Full Name</option>
                      <option value="" disabled>
                        --- Area2 ---
                      </option>
                      <option value="">Address</option>
                    </select>
                    <i className="fas fa-times-circle remove-column cursor-pointer" />
                  </div>
                  <div className="col m-2 p-2 faker-box border border-light-grey">
                    <h5>Col #1</h5>
                    <h6>(datetime)</h6>
                    <select name="ctrl1" id="ctr1" className="form-control">
                      <option value="">Select...</option>
                      <option value="" disabled>
                        --- Area1 ---
                      </option>
                      <option value="">Date Of Birth</option>
                      <option value="">Full Name</option>
                      <option value="" disabled>
                        --- Area2 ---
                      </option>
                      <option value="">Address</option>
                    </select>
                    <i className="fas fa-times-circle remove-column cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary float-right">Create!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
