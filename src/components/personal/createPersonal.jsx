// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../boostrap/boostrap.min.css";
import "../boostrap/bootstrap-responsive.min.css";
import "../css/theme.css";
import { Formik, Form, Field } from "formik";
import * as services from "../../services/employee";
const CreatePersonal = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const employee = {
        employeeId: values.Employee_ID,
        firstName: values.First_Name,
        lastName: values.Last_Name,
        vacationDays: values.vacationDays,
        paidToDate: values.paidToDate,
        paidLastYear: values.paidLastYear,
        payRate: values.payRate,
        payRateId: values.payRateId,
      };
      let Personal = {
        Employee_ID: values.Employee_ID,
        First_Name: values.First_Name,
        Last_Name: values.Last_Name,
        Middle_Initial: values.Middle_Initial,
        Address1: values.Address1,
        Address2: values.Address2,
        City: values.City,
        State: values.State,
        Zip: values.Zip,
        Email: values.Email,
        Phone_Number: values.Phone_Number,
        Social_Security_Number: values.Social_Security_Number,
        Drivers_License: values.Drivers_License,
        Marital_Status: values.Marital_Status,
        Gender: values.Gender,
        Shareholder_Status: values.Shareholder_Status,
        Benefit_Plans: values.Benefit_Plans,
        Ethnicity: values.Ethnicity,
      };
      const employeeStatus = await services.doEmployee(employee);
      const personalStatus = await services.createPersonal(Personal);
      if (employeeStatus === 200 && personalStatus === 200) {
        navigate("/table");
      } else if (employeeStatus === 400) {
        await services.deleteEmployee(employee.employeeId,values);
        navigate("/table");
      } else if (personalStatus === 400) {
        await services.deletePersonal(Personal.Employee_ID,values);
        navigate("/table");
      } 
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        Employee_ID: "",
        First_Name: "",
        Last_Name: "",
        Middle_Initial: "",
        Address1: "",
        Address2: "",
        City: "",
        State: "",
        Zip: 0,
        Email: "",
        Phone_Number: "",
        Social_Security_Number: "",
        Drivers_License: "",
        Marital_Status: "",
        Gender: true,
        Shareholder_Status: false,
        Benefit_Plans: "1",
        Ethnicity: "",
        vacationDays: 0,
        paidToDate: 0,
        paidLastYear: 0,
        payRate: 0,
        payRateId: 0,
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <Form>
        <div className="module">
          <div className="module-head">
            <h3 style={{ marginRight: "700px" }}>Create Personal</h3>
          </div>
          <div className="form-horizontal row-fluid">
            <div className="module-body">
              <div className="control-group">
                <label className="control-label" htmlFor="EmployeeID">
                  Employee ID
                </label>
                <div className="controls">
                  <Field
                    name="Employee_ID"
                    type="number"
                    className="form-control"
                    id="Employee_ID"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="First_Name">
                  First Name
                </label>
                <div className="controls">
                  <Field
                    type="text"
                    className="form-control"
                    id="First_Name"
                    name="First_Name"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Last_Name">
                  Last Name
                </label>
                <div className="controls">
                  <Field
                    name="Last_Name"
                    type="text"
                    className="form-control"
                    id="Last_Name"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Middle_Initial">
                  Middle Initial
                </label>
                <div className="controls">
                  <Field
                    name="Middle_Initial"
                    type="text"
                    className="form-control"
                    id="Middle_Initial"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Address1">
                  Address1
                </label>
                <div className="controls">
                  <Field
                    name="Address1"
                    type="text"
                    className="form-control"
                    id="Address1"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Address2">
                  Address2
                </label>
                <div className="controls">
                  <Field
                    name="Address2"
                    type="text"
                    className="form-control"
                    id="Address2"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="City">
                  City
                </label>
                <div className="controls">
                  <Field
                    name="City"
                    type="text"
                    className="form-control"
                    id="City"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="State">
                  State
                </label>
                <div className="controls">
                  <Field
                    name="State"
                    type="text"
                    className="form-control"
                    id="State"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Zip">
                  Zip
                </label>
                <div className="controls">
                  <Field
                    name="Zip"
                    type="number"
                    className="form-control"
                    id="Zip"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Email">
                  Email
                </label>
                <div className="controls">
                  <Field
                    name="Email"
                    type="text"
                    className="form-control"
                    id="Email"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Phone_Number">
                  Phone Number
                </label>
                <div className="controls">
                  <Field
                    name="Phone_Number"
                    type="text"
                    className="form-control"
                    id="Phone_Number"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label
                  className="control-label"
                  htmlFor="Social_Security_Number"
                >
                  Social Security Number
                </label>
                <div className="controls">
                  <Field
                    name="Social_Security_Number"
                    type="text"
                    className="form-control"
                    id="Social_Security_Number"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Drivers_License">
                  Drivers License
                </label>
                <div className="controls">
                  <Field
                    name="Drivers_License"
                    type="text"
                    className="form-control"
                    id="Drivers_License"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Marital_Status">
                  Marital Status
                </label>
                <div className="controls">
                  <Field
                    name="Marital_Status"
                    type="text"
                    className="form-control"
                    id="Marital_Status"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Gender">
                  Gender
                </label>
                <div className="controls">
                  <Field
                    name="Gender"
                    as="select"
                    className="form-control"
                    id="Gender"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                      fontSize: "12px",
                    }}
                  >
                    <option value="true">Male</option>
                    <option value="false">Female</option>
                  </Field>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Shareholder_Status">
                  Shareholder Status
                </label>
                <div className="controls">
                  <Field
                    name="Shareholder_Status"
                    type="checkbox"
                    className="form-control"
                    id="Shareholder_Status"
                    style={{ marginRight: "600px" }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Benefit_Plans">
                  Benefit Plans
                </label>
                <div className="controls">
                  <Field
                    name="Benefit_Plans"
                    as="select"
                    className="form-control"
                    id="Benefit_Plans"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                      fontSize: "12px",
                    }}
                  >
                    <option value="1">ke hoach 26</option>
                    <option value="2">ke hoach 1</option>
                    <option value="4">Ke hoach 3</option>
                  </Field>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="Ethnicity">
                  Ethnicity
                </label>
                <div className="controls">
                  <Field
                    name="Ethnicity"
                    type="text"
                    className="form-control"
                    id="Ethnicity"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="vacationDays">
                  Vacation Days
                </label>
                <div className="controls">
                  <Field
                    name="vacationDays"
                    type="number"
                    className="form-control"
                    id="vacationDays"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="paidToDate">
                  Paid To Date
                </label>
                <div className="controls">
                  <Field
                    name="paidToDate"
                    type="number"
                    className="form-control"
                    id="paidToDate"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="paidLastYear">
                  Paid Last Year
                </label>
                <div className="controls">
                  <Field
                    name="paidLastYear"
                    type="number"
                    className="form-control"
                    id="paidLastYear"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="payRate">
                  Pay Rate
                </label>
                <div className="controls">
                  <Field
                    name="payRate"
                    type="number"
                    className="form-control"
                    id="payRate"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlFor="payRateId">
                  Pay Rate Id
                </label>
                <div className="controls">
                  <Field
                    name="payRateId"
                    type="number"
                    className="form-control"
                    id="payRateId"
                    style={{
                      width: "320px",
                      marginRight: "300px",
                      height: "30px",
                    }}
                  />
                </div>
              </div>

              <div className="control-group" style={{ marginRight: "450px" }}>
                <div className="controls">
                  <Field
                    type="submit"
                    value="Save"
                    className="btn btn-default"
                  />
                </div>
                <div className="controls">
                  <Field
                    type="button"
                    value="Back to List"
                    className="btn btn-default"
                    onClick={() => navigate("/table")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default CreatePersonal;
