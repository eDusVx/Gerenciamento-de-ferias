import React, { useState } from 'react'
// import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <div className="h-[100px] flex bg-green-700 shadow-md">
        <FaBars className="fixed w-[30px] h-[30px] mt-[32px] ml-[32px] cursor-pointer" onClick={showSiderbar} />
        <img src="./images/queroquero.png" width={250} height={82} className="m-auto"/>
        {sidebar && <Sidebar active={setSidebar} />}
    </div>
  )
}

export default Header