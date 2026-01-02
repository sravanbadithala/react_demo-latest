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
      dotStatus= <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>;
      statusMessage="online";
  }

  const onClickLoginbtnHamdler = () => {
    login === "Login" ? setLogin("Log Out") : setLogin("Login");
  };
  return (
    <div className="flex justify-between bg-yellow-50 shadow mb-2">
      <div className="w-25">
        <img  src={LOGO_URL}></img>
      </div>
      <div >
        <ul className="flex p-5 m-5 gap-4" >
          <li>{dotStatus} {statusMessage}</li>
        <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About us</Link> </li>
          <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/grocery">Grocery </Link></li>
          <li>Cart</li>
          <li>
            <button className="px-7 py-2 bg-blue-500 text-white rounded" onClick={onClickLoginbtnHamdler}>
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
