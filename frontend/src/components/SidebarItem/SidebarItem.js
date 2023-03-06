import React from 'react'

const SidebarItem = ({ Icon, Text}) => {
  return (
    <div className="flex items-center bg-green-700 text-xl p-[10px] cursor-pointer rounded- ml-0 mr-[15px] mt-[10px] hover:bg-black hover:text-white hover:mr-0">
      <Icon className="ml-0 mr-[10px] " size="35px"/>
      {Text}
    </div>
  )
}

export default SidebarItem