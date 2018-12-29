import React, { Component } from "react";

class ColumnDataSelectionFormCard extends Component {
  state = {};

  checkedColumns() {
    return this.props.selectedTable.columns.filter(column => column.isChecked);
  }

  render() {
    let { selectedTable } = this.props;

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
            {this.checkedColumns().map((column, index) => (
              <React.Fragment key={column.name}>
                <div key={column.name} className="col-4 faker-box">
                  <div className="border border-light-grey my-2 p-2 position-relative">
                    <h5>{column.name}</h5>
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
                </div>
                {(index + 1) % 3 == 0 ? <div className="w-100" /> : null}
              </React.Fragment>
            ))}
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
