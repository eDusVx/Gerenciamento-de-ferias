import React from 'react'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'
import { AiOutlineHistory,AiOutlineCalendar,AiOutlineLogout } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'



const SidebarItem = ({ Icon, Text, to }) => {
  const classes = `flex items-center bg-green-700 text-xl p-[10px] cursor-pointer rounded ml-0 hover:bg-black hover:text-white hover:mr-0`;
  return (
    <Link to={to} className={classes}>
      <Icon className="ml-0 mr-[10px]" size="35px"/>
      {Text}
    </Link>
  )
}


const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <div className="bg-green-700 fixed h-[100%] top-0 left-0 w-[250px] z-[1]" sidebar={active}>
      <FaTimes className="block md:hidden fixed w-[30px] h-[30px] mt-[32px] ml-[32px] cursor-pointer" onClick={closeSidebar} />  
      <div className="mt-[85px]">
        <SidebarItem Icon={AiOutlineHistory} Text="Histórico de solicitações" to="/index_colaborador"/>
        <SidebarItem Icon={AiOutlineCalendar} Text="Solicitações" to="/solicitacoes"/>
        <div className="md:hidden">
          <SidebarItem Icon={CgProfile} Text={'Perfil'} to="/perfil_colaborador"/>
          <SidebarItem Icon={AiOutlineLogout} Text={'Sair'} to="/"/>
        </div>   
      </div>
    </div>
  )
}

export default Sidebar
