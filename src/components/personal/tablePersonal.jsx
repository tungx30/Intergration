import { Link } from "react-router-dom";
import "../boostrap/boostrap.min.css";
import "../boostrap/bootstrap-responsive.min.css";
import "../css/theme.css";
import * as services from "../../services/employee";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const TablePersonal = () => {
  const [pag, setPag] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const employees = await services.getAllEmployee();
      const respone = employees.data;
      const personals = await services.getPersonal();
      console.log("TEsst", respone, personals);
      const mergedData = [];

      for (let i = 0; i < respone.length; i++) {
        const employee = respone[i];
        const employeeId = employee.employeeId;
        console.log("1", employeeId, employee);
        for (let j = 0; j < personals.length; j++) {
          const personal = personals[j];
          console.log("2", employeeId, personal.Employee_ID);
          if (employeeId == personal.Employee_ID) {
            console.log("2", employeeId, personal);
            const mergedRecord = {
              ...employee,
              First_Name: personal.First_Name,
              Last_Name: personal.Last_Name,
              Address1: personal.Address1,
              City: personal.City,
              State: personal.State,
              Zip: personal.Zip,
              Email: personal.Email,
              Phone_Number: personal.Phone_Number,
              Gender: personal.Gender,
              Shareholder: personal.Shareholder_Status,
              Employee_ID: personal.Employee_ID,
            };
            mergedData.push(mergedRecord);
            break;
          }
        }
      }

      console.log(mergedData);
      setData(mergedData);
    } catch (error) {
      console.error(error);
    }
  };
  const numberOfPages = Math.ceil(data.length / recordPerPage);
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);
  const displayedData = data.slice(
    (currentPage - 1) * recordPerPage,
    currentPage * recordPerPage
  );
  return (
    <div className="module">
      <div className="module-head">
        <h3>
          Personals - <Link to="/create">Create New</Link>
        </h3>
      </div>
      <div className="module-body table">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>City</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Shareholder</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item) => (
              <tr key={item.Employee_ID}>
                <td>
                  {item.First_Name} {item.Last_Name}
                </td>
                <td>{item.City}</td>
                <td>{item.Email}</td>
                <td>{item.Phone_Number}</td>
                <td>{item.Gender ? "Nam" : "Nữ"}</td>
                <td>{item.Shareholder ? "True" : "False"}</td>
                <td>
                  <Link to={`/edit/${item.Employee_ID}`}>Edit</Link> |
                  <Link to={`/delete/${item.Employee_ID}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div style={{ marginRight: "100px" }} className="col">
          <nav className="justify-content-center d-flex">
            <ul className="pagination" style={{ marginLeft: "760px" }}>
              <li className="page-item me-2">
                <button
                  className="page-link"
                  onClick={prePage}
                  style={{ backgroundColor: "#f5f5f5", color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{ backgroundColor: "#f5f5f5", color: "grey" }}
                  />
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={nextPage}
                  style={{ backgroundColor: "#f5f5f5", color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ backgroundColor: "#f5f5f5", color: "grey" }}
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default TablePersonal;
