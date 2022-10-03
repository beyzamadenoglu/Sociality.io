import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { SidebarItems } from './SidebarItems';
import Logo from '../assets/Images/SocialityLogo'
import { CompanyLogos } from "../components/CompanyLogos";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Sidebar() {

    const [activeCompany, setActiveCompany] = useState(0);
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

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
                        <Accordion open={open} toggle={toggle}>

                            {SidebarItems.map((item, index) => {
                                return (
                                    <AccordionItem>
                                        <AccordionHeader targetId={index}>
                                            <span>
                                                {item.icon}
                                                {item.title}
                                            </span>
                                        </AccordionHeader>
                                        <AccordionBody accordionId={index}>
                                            <div className="accordion-triangle"></div>
                                            <ul>
                                                {item.child.map((elem) => {
                                                    return (
                                                        <>
                                                            <NavLink to={`/${elem}`}  
                                                                    style={(isActive) => ({ color: isActive ? "green!important" : "red!important" })} >
                                                                <li><span>{elem}</span></li>
                                                            </NavLink>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Sidebar;