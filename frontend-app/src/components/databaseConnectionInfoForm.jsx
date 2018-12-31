import React, { Component } from "react";
import { Formik, FormikProps, Form, Field } from "formik";

class DatabaseConnectionInformationForm extends Component {
  //state = {};

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    //process form submission here
    //done submitting, set submitting to false
    console.log("values", values);
    setSubmitting(false);
    return;
  };

  render() {
    return (
      <Formik
        initialValues={{
          db_type: "",
          host: "",
          username: "",
          password: "",
          database: ""
        }}
        validate={values => {
          let errors = [];
          // if(!values.email_address)
          //   errors.push()
          //check if my values have errors
          return errors;
        }}
        onSubmit={this.handleSubmit}
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
                          <option value="mysql">MySql</option>
                          <option value="sqlsvr">MSSQL</option>
                        </Field>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="host">Host</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="host"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="username">Username</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="username"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="password"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="database">Database</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="database"
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                      </div>
                      <div className="col-md-2 pt-4">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
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
