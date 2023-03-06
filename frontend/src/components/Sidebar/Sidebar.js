import React from 'react'
// import { Container, Content } from './styles'
import { 
  AiOutlineHistory,
  AiOutlineCalendar
} from 'react-icons/ai'

import { FaTimes } from 'react-icons/fa'

import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <div className="bg-green-700 fixed h-[100%] top-0 left-0 w-[300px]" sidebar={active}>
      <FaTimes className="fixed w-[30px] h-[30px] mt-[32px] ml-[32px] cursor-pointer" onClick={closeSidebar} />  
      <div className="mt-[100px]">
        <SidebarItem Icon={AiOutlineHistory} size = "40px" Text="Histórico de solicitações"/>
        <SidebarItem Icon={AiOutlineCalendar} Text="Solicitações"/>
      </div>
    </div>
  )
}

export default Sidebar