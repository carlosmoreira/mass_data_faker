import React, { Component } from "react";

class TablesColumnsSelectionCard extends Component {
  state = {};
  render() {
    let { tables } = this.props;

    console.log("col", tables);

    return (
      <div className="card">
        <div className="card-header text-center">Tables</div>
        <div className="card-body">
          <div className="list-group list-group-root">
            {tables.map(table => (
              <React.Fragment>
                <a
                  key={table.name}
                  href={`#${table.name}`}
                  className="list-group-item"
                  data-toggle="collapse"
                >
                  <i className="glyphicon glyphicon-chevron-right" />
                  {table.name} ({table.columns.length})
                </a>
                <div className="list-group collapse" id={`${table.name}`}>
                  {table.columns.map(column => (
                    <div
                      key={column.name}
                      className="list-group-item pt-0 pb-0"
                    >
                      <input type="checkbox" id={column.name} />
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
