import React, { Component } from "react";

class Error extends Component {
  render() {
    let { error } = this.props;
    if (!error) return null;
    return (
      <div className="row">
        <div className="col">
          <p className="alert alert-danger">
            <i className="fa fa-exclamation-circle mr-1" />
            {error}
          </p>
        </div>
      </div>
    );
  }
}

export default Error;
