import React, { useState } from 'react'
// import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Profile from '../Profile/Profile'
import Sidebar_gestor from '../Sidebar/Sidebar_gestor'

const Header_gestor = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <div className="h-[85px] flex bg-green-700 shadow-md">
        <FaBars className="w-[30px] h-[30px] mt-[30px] ml-[32px] cursor-pointer" onClick={showSiderbar} />
        <img src="./images/queroquero2.png" width={200} height={82} className="m-auto"/>
        {sidebar && <Sidebar_gestor active={setSidebar} />}
      <Profile/>
    </div>
  )
}

export default Header_gestor