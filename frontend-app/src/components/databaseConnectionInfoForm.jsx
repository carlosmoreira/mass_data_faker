import React, { Component } from "react";
import { Formik, FormikProps, Form, Field } from "formik";

class DatabaseConnectionInformationForm extends Component {
  showSpinner = spinning => {
    if (spinning) return <i className="fa fa-spinner fa-spin" />;
    return null;
  };
  render() {
    return (
      <Formik
        initialValues={{
          db_type: "mysql",
          db_host: "localhost",
          db_databaseName: "golotus_old",
          db_username: "homestead",
          db_password: "secret",
          db_port: "33060"
        }}
        validate={values => {
          let errors = [];
          // if(!values.email_address)
          //   errors.push()
          //check if my values have errors
          return errors;
        }}
        onSubmit={this.props.submitAction}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className="form-group row">
              <div className="col">
                <div className="card">
                  <div className="card-header text-center">
                    Database Connection Information
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <label htmlFor="db_type">Database Type</label>
                        <Field
                          className="form-control"
                          name="db_type"
                          component="select"
                          placeholder="Database Type"
                        >
                          <option value="">Select...</option>
                          <option value="mysql">MySql</option>
                          <option value="sqlsvr">MSSQL</option>
                        </Field>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="host">Host</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="db_host"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="username">Username</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="db_username"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="db_password"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="database">Database</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="db_databaseName"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="database">Port</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="db_port"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2 pt-4">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit {this.showSpinner(isSubmitting)}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default DatabaseConnectionInformationForm;
