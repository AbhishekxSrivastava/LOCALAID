import React from 'react'
import {BiSolidFirstAid, BiHome, BiMessage, BiStats, BiMap, BiHelpCircle, BiNotification, BiIdCard} from 'react-icons/bi';
import '../styles/sidebar.css';

export const Sidebar = () => {
  return (
    <div className = 'menu'>
        <div className = "logo">
            <BiSolidFirstAid className = "logo-icon" />
            <h2>LocalAID</h2>
        </div>

        <div className = 'menu--list'>
            <a href='#' className = 'item active'>
                <BiHome className = "icon"/>
                Dashboard
            </a>
            <a href='#' className = 'item'>
                <BiIdCard className = "icon"/>
                Your Profile
            </a>
            <a href='#' className = 'item'>
                <BiMap className = "icon"/>
                Your Locality
            </a>
            <a href='#' className = 'item'>
                <BiStats className = "icon"/>
                 Status
            </a>
            <a href='#' className = 'item'>
                <BiMessage className = "icon"/>
                Message
            </a>
            <a href='#' className = 'item'>
                <BiNotification className = "icon"/>
                Notifications
            </a>
            <a href='#' className = 'item'>
                <BiHelpCircle className = "icon"/>
                Help
            </a>
        </div>
    </div>
  )
}
