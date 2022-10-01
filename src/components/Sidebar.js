import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import Logo from '../contants/Images/SocialityLogo'
import { CompanyLogos } from "../components/CompanyLogos";
import './Sidebar.css'
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
                                        <AccordionHeader targetId={index}>{item.icon}
                                            <button>{item.title}
                                            </button>
                                        </AccordionHeader>
                                        <AccordionBody accordionId={index}>
                                            <strong>This is the first item&#39;s accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It&#39;s also worth noting that just about any HTML can
                                            go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
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