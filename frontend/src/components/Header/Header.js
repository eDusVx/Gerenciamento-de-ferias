import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Profile from '../Profile/Profile_colaborador'
import Sidebar from '../Sidebar/Sidebar_colaborador'

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showSidebarButton, setShowSidebarButton] = useState(false);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setShowSidebarButton(mediaQuery.matches);

    const handleResize = () => setShowSidebarButton(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  const location = useLocation();
  let currentText = '';

  if (location.pathname === '/index_colaborador') {
    currentText = 'Histórico de solicitações';
  } else if (location.pathname === '/solicitacoes') {
    currentText = 'Solicitações';
  } else if (location.pathname === '/perfil_colaborador') {
    currentText = 'Perfil';
  } else if (location.pathname === '/') {
    currentText = 'Sair';
  }
  return (
    <div className="h-[85px] flex bg-green-700 shadow-md">
      {showSidebarButton && (
        <FaBars
          className="w-[30px] h-[30px] mt-[30px] ml-[32px] cursor-pointer"
          onClick={showSidebar}
        />
      )}
      <img src="./images/queroquero2.png" alt="QQlogo" width={200} height={82} className="m-auto" />
      {(sidebar || !showSidebarButton) && <Sidebar active={hideSidebar} />}
      <div className="hidden md:block">
        <Profile />
      </div>
      <div className="segunda_header hidden md:block border-gray-500 border-[0.1px] bg-gray-300 absolute top-[85px] w-header right-[0px] h-[85px] z-[-1]">
        <div className="absolute top-[18px] left-0 h-[50px] w-2 bg-green-800"></div>
        <p className="text-xl font-medium text-black mt-[30px] ml-[20px]">{currentText}</p>
        <div className="absolute top-[18px] right-0 h-[50px] w-2 bg-green-800"></div>
      </div>
    </div>
  );
};

export default Header;
