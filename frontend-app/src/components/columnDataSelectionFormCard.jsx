import React, { Component } from "react";

class ColumnDataSelectionFormCard extends Component {
  state = {};
  render() {
    return (
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
                <input type="checkbox" id="delete_prev_data" /> Truncate Tables
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

              <i className="fa fa-times-circle remove-column cursor-pointer" />
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

              <i className="fa fa-times-circle remove-column cursor-pointer" />
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

              <i className="fa fa-times-circle remove-column cursor-pointer" />
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
              <i className="fa fa-times-circle remove-column cursor-pointer" />
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
              <i className="fa fa-times-circle remove-column cursor-pointer" />
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
              <i className="fa fa-times-circle remove-column cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary float-right">Create!</button>
        </div>
      </div>
    );
  }
}

export default ColumnDataSelectionFormCard;
