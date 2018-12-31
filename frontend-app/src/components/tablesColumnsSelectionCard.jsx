import React, { Component } from "react";

class TablesColumnsSelectionCard extends Component {
  isSelectedTable = table => {
    return (
      this.props.selectedTable && table.name === this.props.selectedTable.name
    );
  };

  showCheckForSelectedTable(table) {
    if (this.isSelectedTable(table)) return <i className="fa fa-check mr-1" />;
    return null;
  }

  isDisabled(column) {
    return column.isNullable === "NO" ? "disabled" : "";
  }

  showPrimaryKey(column) {
    let icons = [];
    if (column.isPrimaryKey)
      icons.push(
        <small key="danger" className="ml-2">
          <i className="text-danger fa fa-key" />
        </small>
      );

    if (column.hasAutoIncrement)
      icons.push(
        <small key="ai" className="ml-2 text-danger">
          AI
        </small>
      );

    return icons;
  }

  getColumnClass(column) {
    if (column.isNullable === "NO") {
      return "text-danger";
    }
  }

  getTables() {
    let tables = this.props.tables;
    if (!tables) return [];
    tables.sort((table1, table2) =>
      table1.name > table2.name ? 1 : table2.name > table1.name ? -1 : 0
    );
    tables.map(table =>
      table.columns.sort((col1, col2) =>
        col1.name > col2.name ? 1 : col2.name > col1.name ? -1 : 0
      )
    );
    return tables;
  }

  render() {
    let {
      clickSelectTable,
      selectedTable,
      handleInputColumnChange
    } = this.props;

    return (
      <div className="card">
        <div className="card-header text-center">Tables</div>
        <div className="card-body">
          <div className="list-group list-group-root" id="columns-accordion">
            {this.getTables().map(table => (
              <React.Fragment key={table.name}>
                <a
                  key={table.name}
                  href={`#${table.name}`}
                  className="list-group-item"
                  data-toggle="collapse"
                  onClick={() => clickSelectTable(table)}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="glyphicon glyphicon-chevron-right" />
                  {this.showCheckForSelectedTable(table)}
                  {table.name} ({table.columns.length})
                </a>
                <div
                  className="list-group collapse"
                  id={`${table.name}`}
                  data-parent="#columns-accordion"
                >
                  {table.columns.map(column => (
                    <div
                      key={column.name}
                      className="list-group-item pt-0 pb-0"
                    >
                      <input
                        type="checkbox"
                        id={column.name}
                        checked={column.isChecked || false}
                        onChange={() => handleInputColumnChange(column)}
                        disabled={this.isDisabled(column)}
                      />
                      <label className="ml-1" htmlFor={column.name}>
                        <span className={this.getColumnClass(column)}>
                          {column.name}
                          {this.showPrimaryKey(column)}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TablesColumnsSelectionCard;
