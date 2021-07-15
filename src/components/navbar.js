import React from 'react'
import styled from "styled-components";
import {OvationEventConsumer} from "../context";
import {FaCaretRight} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import logo from "../images/ovationlogo.bmp";
import {Link} from "react-router-dom";

export default function navbar() {
    return (
        <OvationEventConsumer>
            {value => {
                const{links, handleDroplist} = value;
                return(
                <NavWrapper>
                    <div className="nav-center">
                        <img src={logo} alt="ovation eventlogo"/>
                        <FaBars  className="bar-icon" onClick={handleDroplist}/>
                        
                            <ul className="nav-links">
                                {links.map(link =>{
                                    return(
                                        <li key={link.id} className="nav-link-icon">
                                            <Link to={link.path} className="nav-link">
                                                {link.text}
                                            </Link>
                                            <FaCaretRight className="nav-icon"/>
                                        </li>
                                    )
                                })}
                            </ul>
                    
                    </div>
                </NavWrapper>)
                
                }}
        </OvationEventConsumer>
    )
}

const NavWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
z-index: 1;
top: 0;
width: 100%;
height: 80px;
padding: 1rem 1.5rem;
background: var(--oceanGreen);
border-bottom: 3px solid var(--primaryColor);

.nav-center{
    display: -webkit-inline-flexbox;
    align-items: baseline;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;
    
}
.nav-links{
    display: inline;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    list-style-type: none;
}
.nav-link{
    display: inline;
    list-style-type: none;
    background: transparent;
    color: var(--mainBlack);
}
.nav-link-icon{
    display: inline;
}
.nav-link:hover{
    background: (--primaryColor);
    color: var(--mainWhite);
    text-decoration: none;
}
.nav-icon{
    cursor: pointer;
}
.bar-icon{
    margin-left: auto;
    visibility: visible;
    font-size: 1.5rem;
    cursor: pointer;
}
@media (min-width:925px){ 
    .bar-icon{
        visibility: hidden;
        
    }
    
}
@media (max-width:925px){ 
    .nav-links{
        visibility: hidden;
        
    }
}


`