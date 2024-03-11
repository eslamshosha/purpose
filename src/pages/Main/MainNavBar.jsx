import { TextField } from '@mui/material'
import React from 'react'
import coin from "../../assets/Coin.png"
import mero from "../../assets/mero.png"
import { Link } from 'react-router-dom';

export default function MainNavBar() {

    function showSideBar(){
        if (document.getElementById('side-bar').classList=='side-bar') {
            document.getElementById('overlay').style.display = "block"
            document.getElementById('side-bar').classList.add('open');
        }
        else{
            document.getElementById('side-bar').classList.remove('open');

        }
    }
    return (
        <div className='main-navbar'>
            <header>
                <div className="top-header">
                    <div className="nav-right">
                            <div className="main-input-cont">
                                <form action="">
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                <input  placeholder="البحث عن كورس" type="search" />
                                </form>
                            </div>
                    </div>
                    <div className="nav-left">
                        <div className="show-icons" id='show-icons' onClick={showSideBar}>
                            <button className="menu-bars fixall" id="menu-id">
                            <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                        <div className="nav-left-sm">
                            <div className="points-cont">
                                <i className="fa-brands fa-bitcoin"></i>
                                <span className='gray'>النقاط</span>
                                <span className='black'>520</span>
                            </div>
                            <div className="balance-cont">
                                <img src={coin} alt="coin" />
                                <span className='gray'>الرصيد</span>
                                <span className='black'>$3,444</span>
                            </div>
                            <div className="user-notification dropdown">
                                <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuLink">
                                    <span className="notification-btn">
                                        <i className="fa-solid fa-bell"></i>
                                        <span className="counter">2</span>
                                    </span>
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                    <li>
                                        <Link href="#!" className="dropdown-item">
                                            <figure className="notif-icon">
                                                <img src="images/notif-icon.png" alt="" />
                                            </figure>
                                            <div className="notification-cont">
                                                <h4 className="notification-name">
                                                    استمتع الان بخصم 50% على كورس البرمجه الجديد
                                                </h4>
                                                <span className="notification-time">
                                                    <i className="las la-clock"></i>
                                                    <span>منذ 48 دقيقة</span>
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="dropdown-item">
                                            <figure className="notif-icon">
                                                <img src="images/notif-icon.png" alt="" />
                                            </figure>
                                            <div className="notification-cont">
                                                <h4 className="notification-name">
                                                استمتع الان بخصم 50% على كورس البرمجه الجديد
                                                </h4>
                                                <span className="notification-time">
                                                    <i className="las la-clock"></i>
                                                    <span>منذ 12 دقيقة</span>
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'profile'} className="dropdown-item notification-show">
                                            عرض جميع الإشعارات
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-profile dropdown">
                                <div className="user-cont dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={mero} className="profile-img" alt="User-Profile"></img>
                                    <span>أميرة سعيد</span>
                                </div>
                                <ul className="profile-menu dropdown-menu" aria-labelledby="dropdownMenuLink" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                    <li>
                                        <Link to={'/main/profile'} className="dropdown-item"> الملف الشخصى </Link>
                                    </li>
                                    <li>
                                        <Link to={'/main/friends'} className="dropdown-item"> الأصدقاء </Link>
                                    </li>
                                    <li>
                                        <Link to={'/main/settings'} className="dropdown-item">الإعدادات</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="dropdown-item"> تسجيل الخروج </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
