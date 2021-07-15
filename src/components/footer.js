import React from 'react'
import styled from "styled-components";
import {OvationEventConsumer} from "../context";

export default function footer() {
    return (
        <OvationEventConsumer>
            {value =>{
                const{socialLinks} = value;
                return(
                    <FooterWrapper>
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="text-capitalize">
                                       copright &copy; ovation events {new Date().getFullYear()} all rights reserved
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex justify-content-around">
                                    {socialLinks.map(socialLink=>{
                                        return(
                                            <a href={socialLink.url} key={socialLink.id}>
                                                {socialLink.icon}
                                            </a>
                                        )
                                    })}
                                </div>

                            </div>

                        </div>
                          
                    </FooterWrapper>
                )
            }
            }
        </OvationEventConsumer>   
    )
}

const FooterWrapper = styled.nav `
background: var(--darkGrey);
color: var(--mainWhite);
.icon{
    font-size:1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
}
.icon:hover{
    color: var(--primaryColor);
    cursor: pointer;
}

`
