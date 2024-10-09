import "../boostrap/boostrap.min.css";
import "../boostrap/bootstrap-responsive.min.css";
import "../css/theme.css";
import { Formik, Form, Field } from "formik";
import * as services from "../../services/employee";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DeletePersonal() {
  const { id } = useParams();
  const [Dataa, setDataa] = useState();
  const navigate = useNavigate();
  const mergedData = [];

  useEffect(() => {
    getFindById();
  }, [id]);

  const getFindById = async () => {
    try {
      const response = await services.findByIdPersonal(id); // Lấy thông tin cá nhân
      const employeeResponse = await services.findByIdEmployee(
        response.Employee_ID
      );
      console.log("Personal", response);
      console.log("Employee", employeeResponse.data);
      const employee = employeeResponse.data;
      const mergedRecord = {
        ...employee,
        Employee_ID: response.Employee_ID,
        Middle_Initial: response.Middle_Initial,
        First_Name: response.First_Name,
        Last_Name: response.Last_Name,
        Address1: response.Address1,
        Address2: response.Address2,
        City: response.City,
        State: response.State,
        Zip: response.Zip,
        Email: response.Email,
        Phone_Number: response.Phone_Number,
        Gender: response.Gender,
        Shareholder: response.Shareholder_Status,
        Marital_Status: response.Marital_Status,
        Social_Security_Number: response.Social_Security_Number,
        Drivers_License: response.Drivers_License,
        payRateId: employee.payRateId,
        Benefit_Plans: response.Benefit_Plans,
        Ethnicity: response.Ethnicity,
        vacationDays: employee.vacationDays,
        paidToDate: employee.paidToDate,
        paidLastYear: employee.paidLastYear,
        payRate: employee.payRate,
      };
      console.log("test", mergedRecord);
      mergedData.push(mergedRecord);
      setDataa(mergedRecord);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const employeeDataa = {
        employeeId: values.Employee_ID,
        firstName: values.First_Name,
        lastName: values.Last_Name,
        vacationDays: values.vacationDays,
        paidToDate: values.paidToDate,
        paidLastYear: values.paidLastYear,
        payRate: values.payRate,
        payRateId: values.payRateId,
      };

      const personalDataa = {
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

      const employeeStatus = await services.deleteEmployee(Dataa._id, values);
      const personalStatus = await services.deletePersonal(
        personalDataa.Employee_ID,
        values
      );
      if (employeeStatus === 204 && personalStatus === 200) {
        navigate("/table");
      } else if (employeeStatus === 400) {
        navigate("/table");
      }
    } catch (error) {
      console.log("Error updating Dataa:", error);
    }
  };
  if (!Dataa) {
    return null;
  }
  const init = {
    Employee_ID: Dataa.Employee_ID,
    First_Name: Dataa.First_Name,
    Last_Name: Dataa.Last_Name,
    Middle_Initial: Dataa.Middle_Initial,
    Address1: Dataa.Address1,
    Address2: Dataa.Address2,
    City: Dataa.City,
    State: Dataa.State,
    Zip: Dataa.Zip,
    Email: Dataa.Email,
    Phone_Number: Dataa.Phone_Number,
    Social_Security_Number: Dataa.Social_Security_Number,
    Drivers_License: Dataa.Drivers_License,
    Marital_Status: Dataa.Marital_Status,
    Gender: Dataa.Gender,
    Shareholder_Status: Dataa.Shareholder_Status,
    Benefit_Plans: Dataa.Benefit_Plans,
    Ethnicity: Dataa.Ethnicity,
    vacationDays: Dataa.vacationDays,
    paidToDate: Dataa.paidToDate,
    paidLastYear: Dataa.paidLastYear,
    payRate: Dataa.payRate,
    payRateId: Dataa.payRateId,
  };
  return (
    <div>
      <h2>Delete</h2>
      <h3>Are you sure you want to delete this?</h3>
      <div>
        <h4>Personal</h4>
        <hr />
        <dl className="dl-horizontal">
          <dt>Employee ID</dt>
          <dd>{Dataa.Employee_ID}</dd>

          <dt>First Name</dt>
          <dd>{Dataa.First_Name}</dd>

          <dt>Last Name</dt>
          <dd>{Dataa.Last_Name}</dd>

          <dt>Middle Initial</dt>
          <dd>{Dataa.Middle_Initial}</dd>

          <dt>Address1</dt>
          <dd>{Dataa.Address1}</dd>

          <dt>Address2</dt>
          <dd>{Dataa.Address2}</dd>

          <dt>City</dt>
          <dd>{Dataa.City}</dd>

          <dt>State</dt>
          <dd>{Dataa.State}</dd>

          <dt>Zip</dt>
          <dd>{Dataa.Zip}</dd>

          <dt>Email</dt>
          <dd>{Dataa.Email}</dd>

          <dt>Phone Number</dt>
          <dd>{Dataa.Phone_Number}</dd>

          <dt>Social Security Number</dt>
          <dd>{Dataa.Social_Security_Number}</dd>

          <dt>Drivers License</dt>
          <dd>{Dataa.Drivers_License}</dd>

          <dt>Marital Status</dt>
          <dd>{Dataa.Marital_Status}</dd>

          <dt>Gender</dt>
          <dd>{Dataa.Gender}</dd>

          <dt>Shareholder Status</dt>
          <dd>{Dataa.Shareholder_Status}</dd>

          <dt>Ethnicity</dt>
          <dd>{Dataa.Ethnicity}</dd>

          <dt>Vacation Days</dt>
          <dd>{Dataa.vacationDays}</dd>

          <dt>Paid To Date</dt>
          <dd>{Dataa.paidToDate}</dd>

          <dt>Paid Last Year</dt>
          <dd>{Dataa.paidLastYear}</dd>

          <dt>Pay Rate</dt>
          <dd>{Dataa.payRate}</dd>

          <dt>Pay Rate Id</dt>
          <dd>{Dataa.payRateId}</dd>
        </dl>
        <Formik
          initialValues={init}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <div className="form-actions no-color">
              <button type="submit" value="delete" className="btn btn-default">
                Delete
              </button>
              |
              <button
                type="button"
                className="btn btn-default"
                onClick={() => navigate("/table")}
              >
                Back to List
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default DeletePersonal;
