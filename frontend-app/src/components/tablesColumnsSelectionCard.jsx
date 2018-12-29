import React, { Component } from "react";

class TablesColumnsSelectionCard extends Component {
  isSelectedTable = table => {
    return (
      this.props.selectedTable && table.name === this.props.selectedTable.name
    );
  };

  showCheckForSelectedTable(table) {
    if (this.isSelectedTable(table)) return <i className="fa fa-check" />;
    return null;
  }

  render() {
    let {
      tables,
      clickSelectTable,
      selectedTable,
      handleInputColumnChange
    } = this.props;

    return (
      <div className="card">
        <div className="card-header text-center">Tables</div>
        <div className="card-body">
          <div className="list-group list-group-root" id="columns-accordion">
            {tables.map(table => (
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
                      />
                      <label htmlFor={column.name}> {column.name}</label>
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
