import React from 'react'

const UserLayout = ({children}) => {
  return (
    <div className='user__info'>
        <div className="user__info__wrapper">
            <div className="sidebar">
            <p>
                kenanZengin@gmail.com
            </p>
            <div className="sidebar_menu">
                sidebar 
            </div>
            </div>
            <div className="user_info_2">
                {children}
            </div>
        </div>
  </div>
  )
}

export default UserLayout