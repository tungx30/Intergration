import "../boostrap/boostrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../boostrap/bootstrap-responsive.min.css";
import {
  faShuffle,
  faUser,
  faMoneyBill1,
  faEnvelope,
  faUsersRays,
  faArrowRightArrowLeft,
  faFloppyDisk,
  faBullhorn,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/theme.css";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import * as services from "../../services/employee";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [pag, setPag] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const [data, setData] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [benefit, setBenefit] = useState();
  const [jobHistory, setJobHistory] = useState();
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const employees = await services.getAllEmployee();
      const respone = employees.data;
      const personals = await services.getPersonal();
      console.log("TEsst", respone, personals);
      const benefit = await services.getCountBenefit();
      const history = await services.getJobHistory();
      const user = await services.getAllUser();
      const dataUser = user.data;
      const products = await services.getAllProduct();
      const dataProduct = products.data;
      setBenefit(benefit);
      setEmployee(respone);
      setPersonal(personals);
      setJobHistory(history.length);
      setUser(dataUser.length);
      setProduct(dataProduct.length);
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

      console.log(mergedData.length);
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
    <div className="content">
      <div className="btn-controls">
        <div className="btn-box-row d-flex ">
          <a href="#" className="btn-box btn-box--big col-4">
            <FontAwesomeIcon icon={faShuffle} />
            <b>65%</b>
            <p className="text-muted">Growth</p>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#" className="btn-box btn-box--big col-4">
            <FontAwesomeIcon icon={faUser} />
            <b>{data.length}</b>
            <p className="text-muted">New Users</p>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#" className="btn-box btn-box--big col-4">
            <FontAwesomeIcon icon={faMoneyBill1} />
            <b>15,152</b>
            <p className="text-muted">Profit</p>
          </a>
        </div>
        <div className="row d-flex flex-row">
          <div className="col-8">
            <div className="row-fluid">
              <div className="row d-flex flex-row">
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn-box small col-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <b>Messages</b>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn-box small col-3">
                  <FontAwesomeIcon icon={faUsersRays} />
                  <b>Clients</b>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn-box small col-3">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  <b>Expenses</b>
                </a>
                &nbsp;&nbsp;&nbsp;
              </div>
            </div>
            <div className="row-fluid">
              <div className="row d-flex flex-row">
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn-box small col-3">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  <b>Total Sales</b>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn-box small col-3">
                  <FontAwesomeIcon icon={faBullhorn} />
                  <b>Social Feed</b>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn-box small col-3">
                  <FontAwesomeIcon icon={faSortDown} />
                  <b>Bounce Rate</b>
                </a>
                &nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
          <ul className="widget widget-usage unstyled col-4">
            <li>
              <p>
                <strong>Windows 8</strong>
                <span className="pull-right small muted">78%</span>
              </p>
              <div className="progress tight">
                <div className="bar" style={{ width: "78%" }}></div>
              </div>
            </li>
            <li>
              <p>
                <strong>Mac</strong>
                <span className="pull-right small muted">56%</span>
              </p>
              <div className="progress tight">
                <div className="bar bar-success" style={{ width: "56%" }}></div>
              </div>
            </li>
            <li>
              <p>
                <strong>Linux</strong>
                <span className="pull-right small muted">44%</span>
              </p>
              <div className="progress tight">
                <div className="bar bar-warning" style={{ width: "44%" }}></div>
              </div>
            </li>
            <li>
              <p>
                <strong>iPhone</strong>
                <span className="pull-right small muted">67%</span>
              </p>
              <div className="progress tight">
                <div className="bar bar-danger" style={{ width: "67%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="module">
        <div className="module-head">
          <h3>Profit Chart</h3>
        </div>
        <div className="module-body">
          <div className="chart inline-legend grid">
            <LineChart
              series={[
                {
                  curve: "linear",
                  data: [data.length, personal.length, benefit, user],
                },
                {
                  curve: "linear",
                  data: [data.length, employee.length, jobHistory, product],
                },
              ]}
              width={800}
              height={310}
            />
          </div>
        </div>
      </div>
      <div className="module">
        <div className="module-head">
          <h3>DataTables</h3>
        </div>
        <div className="module-body table">
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            className="datatable-1 table table-bordered table-striped	 display"
            width="100%"
          >
            <thead>
              <tr>
                <th>Full Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Gender</th>
                <th>vacationDays</th>
                <th>paidToDate</th>
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
                  <td>{item.Gender ? "Nam" : "Nữ"}</td>
                  <td>{item.vacationDays}</td>
                  <td>{item.paidToDate}</td>
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
export default Dashboard;
