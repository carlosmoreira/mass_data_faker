import React, { Component } from "react";

class DatabaseConnectionInformationForm extends Component {
  state = {};
  render() {
    let { tables } = this.props;

    console.log("col", tables);

    return (
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
                    <input className="form-control" type="text" id="username" />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="text" id="password" />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="database">Database</label>
                    <input className="form-control" type="text" id="database" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default DatabaseConnectionInformationForm;
