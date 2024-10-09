import axios from "axios";

export const getPersonal = async () => {
  try {
    let result = await axios.get(
      "http://localhost:19335/api/personals/getAll/"
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPersonal = async (value) => {
  try {
    let user = await axios.post(
      "http://localhost:19335/api/personals/create",
      value
    );
    return user.status;
  } catch (error) {
    console.log(error);
  }
};

export const updatePersonal = async (id, value) => {
  let user = await axios.put(
    "http://localhost:19335/api/personals/edit/" + id,
    value
  );
  return user.status;
};

export const deletePersonal = async (id, value) => {
  let user = await axios.delete(
    "http://localhost:19335/api/personals/delete/" + id,
    value

  );
  console.log(user.status); 
  return user.status;
};

export const deleteEmployee = async (id, value) => {
  let user = await axios.delete(
    "http://localhost:4000/api/employee/deleteEmployee/" + id,
    value
  );
  console.log(user.status);
  return user.status;
};
export const doEmployee = async (value) => {
  console.log(value);
  let user = await axios.post("http://localhost:4000/api/employee/", value);
  return user.status;
};

export const getAllEmployee = async () => {
  try {
    let result = await axios.get("http://localhost:4000/api/employee/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCountBenefit = async () => {
  try {
    let result = await axios.get(
      "http://localhost:19335/api/benefitPlans/countBenefitPlans"
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const getJobHistory = async () => {
  try {
    let result = await axios.get(
      "http://localhost:19335/api/jobHistory/getAll"
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllUser = async () => {
  try {
    let result = await axios.get("http://localhost:4000/api/users/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllProduct = async () => {
  try {
    let result = await axios.get("http://localhost:4000/api/products/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (id, value) => {
  let user = await axios.put(
    "http://localhost:4000/api/employee/updateEmployee/" + id,
    value
  );
  return user.status;
};

export const findByIdEmployee = async (id) => {
  try {
    let result = await axios.get("http://localhost:4000/api/employee/" + id);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const findByIdPersonal = async (id) => {
  try {
    let result = await axios.get("http://localhost:19335/api/personals/" + id);
    //console.log("1238"+result);
    //console.log("123456 "+JSON.stringify(result)); // in ra JSON chuỗi của result
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
