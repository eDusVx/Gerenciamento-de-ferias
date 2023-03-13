import React, { useState } from 'react'
import { useRef } from 'react';
import { Link } from "react-router-dom"

const Profile = ()  => {
  const [open,setOpen] = useState(false);
  const Menus = ["Perfil", "Sair"];
  const name = "Eduardo Xavier"; 
  const menuRef = useRef();
  const imgRef = useRef();
  
  window.addEventListener("click", (e) => {
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpen(false);
    }
  });
  return (
    <div className="h-screen flex justify-center py-12">
      <div className="absolute top-[25px] right-12 bottom-0">
        <div className="flex items-center">
          <img 
            ref={imgRef}
            onClick={()=>setOpen(!open)}
            src="./images/perfil.png" width={45} height={30}
            alt="user"
            className="object-cover cursor-pointer"
          />
          <h1 className="ml-4 text-lg bottom-10">{name}</h1>
        </div>
        {open && (
        <div ref={menuRef} className="bg-green-700 p-[10px] w-[234px] mt-[10px] shadow-lg absolute -top-300">
          <ul>
              <Link to="/perfil_colaborador">
              <li onClick={()=>setOpen(false)} className="p-[10px] text-lg cursor-pointer rounded hover:bg-black hover:text-white hover:rounded" key={Menus}>
                <div>{'Perfil'}</div>
              </li>
              </Link>
              <Link to="/">
              <li onClick={()=>setOpen(false)} className="p-[10px] text-lg cursor-pointer rounded hover:bg-black hover:text-white hover:rounded" key={Menus}>
                {'Sair'}
              </li>
              </Link>
          </ul>     
        </div>
        )}
      </div>
    </div>
  )
}

export default Profile;

