import { useState } from "react";
import { LOGO_URL } from "../Utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [login, setLogin] = useState("Login");
  console.log("render uusing anchor");
  const status=useOnlineStatus();
  console.log(status);
  let dotStatus;
  let statusMessage;
  if(status==false){
    dotStatus= <span className="red-dot"></span>;
statusMessage="offline";
  }else{
      dotStatus= <span className="green-dot"></span>;
      statusMessage="online";
  }

  const onClickLoginbtnHamdler = () => {
    login === "Login" ? setLogin("Log Out") : setLogin("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>{dotStatus} {statusMessage}</li>
        <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About us</Link> </li>
          <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/grocery">Grocery </Link></li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={onClickLoginbtnHamdler}>
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
