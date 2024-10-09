import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDress } from '@fortawesome/free-solid-svg-icons';
const Header = () => {

  return (
    <div>
      <div className="header">
        <div className="container">
          <p className="logo">Admin</p>
          {/* <div className="header-right"> */}
            <p className="logo">
              aaaaaaaaaaaaaaaaaaaaaaaa
              <FontAwesomeIcon icon={faPersonDress} />


            </p>
          {/* </div> */}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Header;
