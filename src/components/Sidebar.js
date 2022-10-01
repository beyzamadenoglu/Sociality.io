import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import Logo from '../contants/Images/SocialityLogo'
import { CompanyLogos } from "../components/CompanyLogos";
import './Sidebar.css'

function Sidebar() {

    const [activeCompany, setActiveCompany] = useState(0);

    function selectCompany(index) {
        setActiveCompany(index);
    }

    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <Logo />
                </div>
                <div className="sidebar-content-container">
                    <div className="company-container">
                        <ul id="company-list">
                            {CompanyLogos.map((item, index) => {
                                return (
                                    <>
                                        {index === activeCompany ? (
                                            <li id={"company-" + index} className="active-company" onClick={() => selectCompany(index)}>
                                                <div className="selected-border"></div>
                                                <img className="company-logo" src={item.image} alt={item.alt} />
                                            </li>

                                        ) : (
                                            <li id={"company-" + index} className="inactive-company" onClick={() => selectCompany(index)}>
                                                <div className="selected-border"></div>
                                                <img className="company-logo" src={item.image} alt={item.alt} />
                                            </li>)}
                                    </>
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