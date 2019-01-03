import React, { Component } from "react";
import DatabaseConnectionInformationForm from "./components/databaseConnectionInfoForm";
import TablesColumnsSelectionCard from "./components/tablesColumnsSelectionCard";
import ColumnDataSelectionFormCard from "./components/columnDataSelectionFormCard";
import HeaderSection from "./components/sections/HeaderSection";
import Error from "./components/error";
import axios from "axios";
import config from "./config";

class App extends Component {
  state = {
    dbStructure: null,
    fakerTypes: null,
    selectedTable: null,
    error: null
  };

  setError = error => {
    if (!error) {
      this.setState({ error: null });
      return;
    }
    this.setState({ error });
  };

  selectTable = selectedTable => {
    selectedTable.columns.map(column => {
      if (column.isNullable === "NO") {
        column.isChecked = true;
      }
    });
    this.setState({ selectedTable });
  };

  inputColumnChange = column => {
    let selectedTable = { ...this.state.selectedTable };
    let foundColumn = selectedTable.columns.find(
      columnItr => columnItr.name === column.name
    );
    if (foundColumn.isNullable === "NO") return;
    foundColumn.isChecked = !foundColumn.isChecked;
    this.setState({ selectedTable });
  };

  setFakerType = (column, event) => {
    let selectedTable = { ...this.state.selectedTable };
    let foundColumn = selectedTable.columns.find(
      columnItr => columnItr.name === column.name
    );
    foundColumn.faker = event.target.value;
    this.setState({ selectedTable });
  };

  handleDbFormSubmit = async (
    dbFormValues,
    { props = this.props, setSubmitting }
  ) => {
    //process form submission here
    //done submitting, set submitting to false
    try {
      this.setError(false);
      let response = await axios.post(
        config.api_url + "readDatabase",
        dbFormValues,
        {
          withCredentials: true
        }
      );
      console.log(response.data);
      console.log("values", dbFormValues);
      this.setState({ ...response.data });
      setSubmitting(false);
      return;
    } catch (exception) {
      console.log(exception);
      this.setError(exception.message);
      setSubmitting(false);
    }
  };

  renderTableInformation = () => {
    if (!this.state.dbStructure) {
      return (
        <p className="alert alert-warning">
          <i className="fa fa-exclamation-circle" /> Please enter Database
          Information above
        </p>
      );
    }
    return (
      <div className="row">
        <div className="col-md-3">
          <TablesColumnsSelectionCard
            tables={this.state.dbStructure}
            clickSelectTable={this.selectTable}
            selectedTable={this.state.selectedTable}
            handleInputColumnChange={this.inputColumnChange}
          />
        </div>
        <div className="col-md-9">
          <ColumnDataSelectionFormCard
            selectedTable={this.state.selectedTable}
            fakerTypes={this.state.fakerTypes}
            handleRemoveColumn={this.inputColumnChange}
            onChangeSetFakerType={this.setFakerType}
            setError={this.setError}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <HeaderSection />
        <Error error={this.state.error} />
        <DatabaseConnectionInformationForm
          submitAction={this.handleDbFormSubmit}
        />
        {this.renderTableInformation()}
      </div>
    );
  }
}

export default App;
