import React, { useState } from 'react'
import { useRef } from 'react';

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
      <div className="relative">
        <div className="flex items-center">
          <img 
            ref={imgRef}
            onClick={()=>setOpen(!open)}
            src="./images/perfil.png" width={50} height={30}
            alt="user"
            className="object-cover cursor-pointer"
          />
          <h1 className="ml-4 text-sm font-bold">{name}</h1>
        </div>
        {open && (
        <div ref={menuRef} className="bg-green-700 p-4 w-52 shadow-lg absolute -left-14 top-24">
          <ul>
            {Menus.map((menu) => (
              <li
                onClick={()=>setOpen(false)}
                className="p-2 text-lg cursor-pointer rounded hover:bg-black text-white"
                key={menu}
              >
                {menu}
              </li>
            ))}
          </ul>     
        </div>
        )}
      </div>
    </div>
  )
}

export default Profile;

