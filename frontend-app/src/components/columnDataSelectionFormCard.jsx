import React, { Component } from "react";

class ColumnDataSelectionFormCard extends Component {
  state = {};

  checkedColumns() {
    if (!this.props.selectedTable) return [];
    return this.props.selectedTable.columns.filter(column => column.isChecked);
  }

  submitFakerValues() {
    console.log("submit faker values: ", this.props.selectedTable);
  }

  render() {
    if (this.checkedColumns() < 1) {
      return (
        <p className="alert alert-warning">
          <i className="fa fa-exclamation-circle" /> Select a <u>table</u> and
          at-leat one <u>column</u> from the left.
        </p>
      );
    }
    let { fakerTypes, handleRemoveColumn, onChangeSetFakerType } = this.props;
    return (
      <div className="card">
        <div className="card-header text-center">
          Insert Data In Following Columns ({this.checkedColumns().length})
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
                    <small>
                      <i>({column.dataType})</i>
                    </small>
                    <h5 className="border-bottom clearfix mt-0">
                      <span>{column.name}</span>
                    </h5>
                    <select
                      onChange={event => onChangeSetFakerType(column, event)}
                      name="ctrl1"
                      id="ctr1"
                      className="form-control"
                    >
                      <option value="">Select...</option>
                      {Object.keys(fakerTypes).map(fakerType => (
                        <React.Fragment key={fakerType}>
                          <option value="" disabled>
                            --- {fakerType} ---
                          </option>
                          <React.Fragment>
                            {fakerTypes[fakerType].map(value => (
                              <option key={value} value={value}>
                                {value}
                              </option>
                            ))}
                          </React.Fragment>
                        </React.Fragment>
                      ))}
                    </select>
                    <i
                      className="fa fa-times-circle remove-column cursor-pointer"
                      onClick={() => handleRemoveColumn(column)}
                    />
                  </div>
                </div>
                {(index + 1) % 3 == 0 ? <div className="w-100" /> : null}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <button
            onClick={() => this.submitFakerValues()}
            className="btn btn-primary float-right"
          >
            Create!
          </button>
        </div>
      </div>
    );
  }
}

export default ColumnDataSelectionFormCard;
