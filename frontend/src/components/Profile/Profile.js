import React from 'react'
import user from './images/perfil.png'

function Profile() {
  return (
    <div>
        <div className=''>
            <img
                src={user}
                alt="user"
                className="h-20 w-20
                object-cover border-4 border-gray-400 rounded-full cursor-pointer"
            />
        </div>
    </div>
  )
}

export default Profile
