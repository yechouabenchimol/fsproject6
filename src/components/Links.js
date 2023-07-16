import { Link, Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { useContext } from "react";
import "./Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


function Links(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the user from local storage
    localStorage.removeItem('user');
    // Perform any other logout actions, such as clearing other data or redirecting

    // Redirect to the login page without rendering the Toolbar component
    navigate('/Login', { replace: true });
  };

  return (
    <>
      <div>
        <nav className="navbar"style={{ fontSize: '30px', width:'650px' }}>
          <Link style={{  color: 'pink' }} className="navLink">
              {user.name}
          </Link>
          <br />
          <Link  className={"NavLink"} to={`/${user.id}/Todos`}>
            Todos{" "}
          </Link>
          <br />
          <Link className={"NavLink"} to={`/${user.id}/Posts`}>
            Posts{" "}
          </Link>
          <br />
          <Link className={"NavLink"} to={`/${user.id}/Info`}>
            Info{" "}
          </Link>
          <br />
        </nav>
      </div>
      <button className="logout-button" onClick={handleLogout}>
  <FontAwesomeIcon icon={faSignOutAlt} /></button>
      <Outlet />
    </>
  );
}

export default Links;
