import React, { useState,useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Profile from '../Profile/Profile'
import Sidebar from '../Sidebar/Sidebar'

// const Header = () => {
//   const [sidebar, setSidebar] = useState(false)

//   const showSiderbar = () => setSidebar(!sidebar)

//   return (
//     <div className="h-[85px] flex bg-green-700 shadow-md">
//         <FaBars className="w-[30px] h-[30px] mt-[30px] ml-[32px] cursor-pointer" onClick={showSiderbar} />
//         <img src="./images/queroquero2.png" width={200} height={82} className="m-auto"/>
//         {sidebar && <Sidebar active={setSidebar} />}
//       <Profile/>
//     </div>
//   )
// }

// export default Header
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

  return (
    <div className="h-[85px] flex bg-green-700 shadow-md">
      {showSidebarButton && (
        <FaBars
          className="w-[30px] h-[30px] mt-[30px] ml-[32px] cursor-pointer"
          onClick={showSidebar}
        />
      )}
      <img src="./images/queroquero2.png" width={200} height={82} className="m-auto" />
      {(sidebar || !showSidebarButton) && <Sidebar active={hideSidebar} />}
      <Profile />
    </div>
  );
};

export default Header;
