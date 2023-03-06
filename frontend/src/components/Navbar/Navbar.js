import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar bg-green-700 h-80px; display: flex; align-items: center; justify-content: center;">
          <Link to="#" className="menu-bars ml-10 text-3xl bg-none color">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="logo m-auto">
            <img src="./images/queroquero.png" width={250} height={82}/>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active bg-green-700 left-0 transition-delay: 450ms;" : "nav-menu w-[250px] h-[100vh] display: flex; justify-content: center; position: fixed; top-0 left-100% transition-delay: 850ms;"}>
          <ul className="nav-menu-items [w-100%]" onClick={showSidebar}>
            <li className="navbar-toggle bg-green-700 w-[100%] h-[80px] display: flex; justify-content: center; align-items: center;">
              <Link to="#" className="menu-bars ml-10 text-3xl bg-none color">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to="/solicitacoes">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;