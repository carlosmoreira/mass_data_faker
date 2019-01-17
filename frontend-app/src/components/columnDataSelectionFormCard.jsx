import React, { Component } from "react";
import Config from "../config";
import axios from "axios";
import swal from "sweetalert";

class ColumnDataSelectionFormCard extends Component {
  state = {
    loading: false
  };

  showSpinner = () => {
    if (this.state.loading) return <i className="fa fa-spinner fa-spin" />;
    return null;
  };

  checkedColumns() {
    if (!this.props.selectedTable) return [];
    return this.props.selectedTable.columns.filter(column => column.isChecked);
  }

  showRemoveIcon(column) {
    if (column.isNullable === "NO") return;
    return (
      <i
        className="fa fa-times-circle remove-column cursor-pointer"
        onClick={() => this.props.handleRemoveColumn(column)}
      />
    );
  }

  submitFakerValues = async () => {
    let request = { ...this.props.selectedTable };
    request.columns = request.columns.filter(
      column => column.isChecked && !column.hasAutoIncrement
    );
    try {
      this.setState({ loading: true });
      let response = await axios.post(Config.api_url + "create", request, {
        withCredentials: true
      });
      swal("Check your DB!", "Data has been inserted successfully!", "success");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      let errorMessage = "Server Error";
      if (error.response && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      swal("Error: " + error.message, errorMessage, "error");
    }
    this.setState({ loading: false });
  };

  showFakerSelectOptions(column) {
    let { fakerTypes, onChangeSetFakerType } = this.props;
    if (column.hasAutoIncrement) {
      return (
        <p className="alert alert-warning">
          <i className="fa fa-exclamation-circle" /> Column has auto increment.
          No selection needed.
        </p>
      );
    }
    return (
      <select
        onChange={event => onChangeSetFakerType(column, event)}
        name="ctrl1"
        id="ctr1"
        className="form-control"
        disabled={column.hasManualOffer}
      >
        <option value="">Select...</option>
        {Object.keys(fakerTypes).map((fakerType, index) => (
          <React.Fragment key={column + fakerType + index}>
            <option value="" disabled>
              --- {fakerType} ---
            </option>
            <React.Fragment>
              {fakerTypes[fakerType].map((value, index) => (
                <option key={value + index} value={value}>
                  {value}
                </option>
              ))}
            </React.Fragment>
          </React.Fragment>
        ))}
      </select>
    );
  }
  handleManualInputChange(column) {
    return null;
  }
  showManualOption(column) {
    if (column.hasAutoIncrement) {
      return;
    }

    let manualOfferHtml = [
      <label htmlFor="isManual">
        <input
          onChange={() => this.props.updateColumnManual(column)}
          type="checkbox"
          id="isManual"
          name="isManual"
        />{" "}
        Manual Value?
      </label>
    ];

    if (column.hasManualOffer) {
      manualOfferHtml.push(
        <input
          onChange={event => this.props.updateColumnManualValue(column, event)}
          value={column.manualOfferValue}
          type="text"
          className="form-control"
          placeholder="Enter Value"
        />
      );
    }

    return manualOfferHtml;
  }

  render() {
    let { selectedTable } = this.props;
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
                onChange={event =>
                  this.props.onChangeDataRowInfo("text", "rows", event)
                }
                value={
                  selectedTable.props && selectedTable.props.rows
                    ? selectedTable.props.rows
                    : ""
                }
              />
            </div>
            <div className="">
              <label htmlFor="delete_prev_data">
                <input
                  type="checkbox"
                  id="delete_prev_data"
                  onChange={event =>
                    this.props.onChangeDataRowInfo(
                      "checkbox",
                      "truncate",
                      event
                    )
                  }
                  checked={
                    selectedTable.props ? selectedTable.props.truncate : false
                  }
                />{" "}
                Truncate Tables
              </label>
            </div>
          </div>
          <div className="row">
            {this.checkedColumns().map((column, index) => (
              <React.Fragment key={column.name + index}>
                <div key={column.name} className="col-4 faker-box">
                  <div className="border border-light-grey my-2 p-2 position-relative">
                    <small>
                      <i>({column.dataType})</i>
                    </small>
                    <h5 className="border-bottom clearfix mt-0">
                      <span>{column.name}</span>
                    </h5>
                    {this.showFakerSelectOptions(column)}
                    {this.showManualOption(column)}
                    {this.showRemoveIcon(column)}
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
            disabled={this.state.loading}
          >
            Create! {this.showSpinner()}
          </button>
        </div>
      </div>
    );
  }
}

export default ColumnDataSelectionFormCard;
