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
            characterMaximumLength: null
          },
          {
            name: "name",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "pageNum",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null
          },
          {
            name: "file",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "image",
            dataType: "varchar",
            isNullable: "YES",
            characterMaximumLength: 255
          },
          {
            name: "created_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null
          },
          {
            name: "updated_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null
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
            characterMaximumLength: null
          },
          {
            name: "name",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "page",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null
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
            characterMaximumLength: null
          },
          {
            name: "migration",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "batch",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null
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
            characterMaximumLength: null
          },
          {
            name: "note",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "page",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null
          },
          {
            name: "id",
            dataType: "int",
            isNullable: "NO",
            characterMaximumLength: null
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
            characterMaximumLength: 255
          },
          {
            name: "token",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "created_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null
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
            characterMaximumLength: null
          },
          {
            name: "name",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "email",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "password",
            dataType: "varchar",
            isNullable: "NO",
            characterMaximumLength: 255
          },
          {
            name: "remember_token",
            dataType: "varchar",
            isNullable: "YES",
            characterMaximumLength: 100
          },
          {
            name: "created_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null
          },
          {
            name: "updated_at",
            dataType: "timestamp",
            isNullable: "YES",
            characterMaximumLength: null
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
            />
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
