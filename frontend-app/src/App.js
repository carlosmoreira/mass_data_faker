import React, { Component } from "react";
import DatabaseConnectionInformationForm from "./components/databaseConnectionInfoForm";
import TablesColumnsSelectionCard from "./components/tablesColumnsSelectionCard";
import ColumnDataSelectionFormCard from "./components/columnDataSelectionFormCard";
import HeaderSection from "./components/sections/HeaderSection";

class App extends Component {
  state = {
    dbStructure: [
      {
        name: "books",
        columns: [
          {
            name: "id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: true,
            hasAutoIncrement: true
          },
          {
            name: "name",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "pageNum",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "file",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "image",
            dataType: "varchar",
            isNullable: "YES",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "created_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "updated_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          }
        ]
      },
      {
        name: "chapters",
        columns: [
          {
            name: "book_id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "name",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "page",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          }
        ]
      },
      {
        name: "migrations",
        columns: [
          {
            name: "id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: true,
            hasAutoIncrement: true
          },
          {
            name: "migration",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "batch",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          }
        ]
      },
      {
        name: "notes",
        columns: [
          {
            name: "book_id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "note",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "page",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: true,
            hasAutoIncrement: true
          }
        ]
      },
      {
        name: "password_resets",
        columns: [
          {
            name: "email",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "token",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "created_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          }
        ]
      },
      {
        name: "users",
        columns: [
          {
            name: "id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null,
            isPrimaryKey: true,
            hasAutoIncrement: true
          },
          {
            name: "name",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "email",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "password",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "remember_token",
            dataType: "varchar",
            isNullable: "YES",
            characterMaximumLength: 100,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "created_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          },
          {
            name: "updated_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null,
            isPrimaryKey: false,
            hasAutoIncrement: false
          }
        ]
      }
    ],
    fakerTypes: {
      base: ["randomDigit", "randomDigitNotNull"],
      person: [
        "title",
        "titleMale",
        "titleFemale",
        "suffix",
        "name",
        "firstName",
        "firstNameMale",
        "firstNameFemale",
        "lastName"
      ]
    },
    selectedTable: null
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

  render() {
    return (
      <div className="container">
        <HeaderSection />
        <DatabaseConnectionInformationForm />
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
