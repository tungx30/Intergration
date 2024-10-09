import Dashboard from "../dashboard/Dashboard";
import {
  faEnvelope,
  faEye,
  faChartSimple,
  faMagnifyingGlass,
  faGauge,
  faBullhorn,
  faListCheck,
  faInbox,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatePersonal from "../personal/createPersonal";
import EditPersonal from "../personal/editPersonal";
import TablePersonal from "../personal/tablePersonal";
export const Layout = ({ children }) => {
  return (
    <>
      <div className="navbar navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <a
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".navbar-inverse-collapse"
            >
              <i className="icon-reorder shaded"></i>
            </a>
            <a className="brand" href="/">
              Admin
            </a>
            <div className="nav-collapse collapse navbar-inverse-collapse">
              <ul className="nav nav-icons">
                <li className="active">
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faEye} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </a>
                </li>
              </ul>
              <form className="navbar-search pull-left input-append" action="#">
                <input type="text" className="span3" />
                <button className="btn" type="button">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
              <ul className="nav pull-right">
                <li className="nav-user dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img src="~/images/user.png" className="nav-avatar" />
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Your Profile</a>
                    </li>
                    <li>
                      <a href="#">Edit Profile</a>
                    </li>
                    <li>
                      <a href="#">Account Settings</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="span3">
              <div className="sidebar">
                <ul
                  className="widget widget-menu unstyled"
                  style={{ paddingLeft: "0px" }}
                >
                  <li className="active">
                    <a href="/">
                      <FontAwesomeIcon icon={faGauge} /> &nbsp;&nbsp;&nbsp;
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/table">
                      <FontAwesomeIcon icon={faBullhorn} /> &nbsp;&nbsp;&nbsp;
                      Personal List
                    </a>
                  </li>
                  <li>
                    <a href="~/BenefitPlans">
                      <FontAwesomeIcon icon={faListCheck} /> &nbsp;&nbsp;&nbsp;
                      Benefit Plans
                    </a>
                  </li>
                  <li>
                    <a href="~/JobHistory">
                      <FontAwesomeIcon icon={faInbox} /> &nbsp;&nbsp;&nbsp; Job
                      History
                    </a>
                  </li>
                </ul>
                <ul
                  className="widget widget-menu unstyled"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#togglePages"
                    >
                      <FontAwesomeIcon icon={faGear} /> &nbsp;&nbsp;&nbsp;
                      <i className="icon-chevron-down pull-right"></i>
                      <i className="icon-chevron-up pull-right"></i>More Pages
                    </a>
                    <ul id="togglePages" className="collapse unstyled">
                      <li>
                        <a href="#">
                          <i className="icon-inbox"></i>Login
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-inbox"></i>Profile
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-inbox"></i>All Users
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                      &nbsp;&nbsp;&nbsp; Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="span9">{children}</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <b className="copyright">&copy; 2014 Admin - DaoNguyen </b>All rights
          reserved.
        </div>
      </div>
    </>
  );
};
