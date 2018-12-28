import React, { Component } from "react";

class TablesColumnsSelectionCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header text-center">Tables</div>
        <div className="card-body">
          <div className="list-group list-group-root">
            <a
              href="#item-2"
              className="list-group-item"
              data-toggle="collapse"
            >
              <i className="glyphicon glyphicon-chevron-right" />
              Table 1 (8)
            </a>
            <div className="list-group collapse" id="item-2">
              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col1" />{" "}
                <label htmlFor="col1">Column 1 (PK)</label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col2" />{" "}
                <label htmlFor="col2">
                  Column 2 <span className="text-info">(Nullable)</span>
                </label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col3" />{" "}
                <label htmlFor="col3">
                  Column 3 <span className="text-danger">(Required)</span>
                </label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col4" />{" "}
                <label htmlFor="col4">Column 4</label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col5" />{" "}
                <label htmlFor="col5">Column 5</label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col6" />{" "}
                <label htmlFor="col6">Column 6</label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col7" />{" "}
                <label htmlFor="col7">Column 7</label>
              </div>

              <div className="list-group-item pt-0 pb-0">
                <input type="checkbox" id="col8" />{" "}
                <label htmlFor="col8">Column 8</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TablesColumnsSelectionCard;
