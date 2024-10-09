import React from "react";
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
export const TableEmployee = () => {
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
      setData(respone);
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
              <th>payRateId</th>
              <th>vacationDays</th>
              <th>paidToDate</th>
              <th>paidLastYear</th>
              <th>payRate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item) => (
              <tr key={item.Employee_ID}>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.payRateId}</td>
                <td>{item.vacationDays}</td>
                <td>{item.paidToDate}</td>
                <td>{item.paidLastYear}</td>
                <td>{item.payRate}</td>
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
