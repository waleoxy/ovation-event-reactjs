import React from 'react'
import {Link} from "react-router-dom";
import {OvationEventConsumer} from "../context"
import styled from "styled-components";

export default function droplist() {
    return (
        <OvationEventConsumer>
            {value =>{
                const{links, droplistOpen, handleDroplist} = value;
                return(
                    <DroplistWrapper droplistOpen={droplistOpen}>
                        <ul>
                           {links.map(link=>{
                               return(
                                   <li key={link.id}> 
                                       <Link to={link.path} className="droplist-link" onClick={handleDroplist}>
                                           {link.text} 
                                        </Link>
                                    </li>
                               
                           )} )} 
                        </ul>
                    </DroplistWrapper>
                )
            }}
        </OvationEventConsumer>
     )
}

const DroplistWrapper = styled.nav`
position: ${props=>(props.droplistOpen? "relative" : "fixed" )};
width: 100%;
height: auto;
border-bottom: 3px solid var(--primaryColor);
background: var(--mainGrey);
transition: var(--mainTransition);
transform: ${props=>(props.droplistOpen? "translateY(0%)" : "translateY(-100%)" )};

ul{
    list-style-type: none;
    padding: 0 !important;
}
.droplist-link{
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);   
}
.droplist-link:hover{
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
    
    }

`
 