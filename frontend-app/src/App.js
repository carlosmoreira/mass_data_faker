import React, { Component } from "react";
import DatabaseConnectionInformationForm from "./components/databaseConnectionInfoForm";
import TablesColumnsSelectionCard from "./components/tablesColumnsSelectionCard";
import ColumnDataSelectionFormCard from "./components/columnDataSelectionFormCard";
import HeaderSection from "./components/sections/HeaderSection";

class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderSection />
        <DatabaseConnectionInformationForm />
        <div className="row">
          <div className="col-md-3">
            <TablesColumnsSelectionCard />
          </div>
          <div className="col-md-9">
            <ColumnDataSelectionFormCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
