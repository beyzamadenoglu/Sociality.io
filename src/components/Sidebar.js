import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import Logo from '../contants/Images/SocialityLogo'
import { CompanyLogos } from "../components/CompanyLogos";
import './Sidebar.css'

function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <Logo />
                </div>
                <div className="sidebar-content-container">
                    <div className="company-container">
                        <ul>
                            {CompanyLogos.map((item, index) => {
                                return (
                                    <Link>
                                        <li key={index}>
                                            <div className="active-border selected-logo">
                                            </div>
                                            <img className="company-logo" src={item.image} alt={item.alt} />
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="feature-container">
                        <ul>
                            {SidebarItems.map((item, index) => {
                                return (
                                    <Link>
                                        <li key={index} className={item.name}>
                                            {item.icon}
                                            <button>{item.title}
                                            </button>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Sidebar;