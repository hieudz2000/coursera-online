import React from 'react'
import { Dropdown } from '../dropdown/Dropdown'
import { Link } from 'react-router-dom'

import './TopNav.css'

import notifications from "../../assets/JsonData/notification.json"
import user_image from '../../assets/images/tuat.png'
import user_menu from '../../assets/JsonData/user_menus.json'
import { ThemeMenu } from '../theme/ThemeMenu'

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
);

const renderUserToggle = (user) => (
    <div className="topnav_right-user">
        <div className="topnav_right-user_image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav_right-user_name">
            {user.display_name}
        </div>
    </div>
)

const logout = () => {
    localStorage.removeItem('token-teacher')
    window.location.reload()
}
const renderUserMenu = (item, index) => {
    return <Link to='/' key={index}>
        <div className="notification-item" onClick={item.content === 'Logout' ? logout : null}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
}
export const TopNav = () => {
    return (
        <div className='topnav'>
            <div className="topnav_search">
                <input type="text" name="" id="" placeholder='Search here...' />
                <i className='bx bx-search' ></i>
            </div>
            <div className="topnav_right">
                <div className="topnav_right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle({ image: user_image, display_name: 'Teacher' })}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav_right-item">
                    <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav_right-item">
                    <ThemeMenu />
                    {/* dropdown here */}
                </div>
            </div>
        </div>
    )
}
