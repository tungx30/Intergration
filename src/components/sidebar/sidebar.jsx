import "../boostrap/boostrap.min.css";
import "../boostrap/bootstrap-responsive.min.css";
import "../css/theme.css";
const sidebar = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="span3">
              <div className="sidebar">
                <ul className="widget widget-menu unstyled">
                  <li className="active">
                    <a href="/">
                      <i className="menu-icon icon unstyled">Dashboard</i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="/employee">
                      <i className="menu-icon icon-bullhorn">Employee</i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="/products">
                      <i className="menu-icon icon-tasks">Products</i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="/user">
                      <i className="menu-icon icon-inbox">User</i>
                    </a>
                  </li>
                </ul>
                <ul className="widget widget-menu unstyled">
                  <li>
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#togglePages"
                    >
                      <i className="menu-icon icon-cog"></i>
                      <i className="icon-chevron-down pull-right"></i>
                      <i className="icon-chevron-up pull-right"></i>More Pages
                    </a>
                    <ul id="togglePages" className="collapse unstyled">
                      <li>
                        <a href="#">
                          <i className="icon-inbox"></i>Login{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-inbox"></i>Profile{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-inbox"></i>All Users{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="menu-icon icon-signout"></i>Logout{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
