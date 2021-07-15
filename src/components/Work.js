import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaSearch, FaCartPlus} from "react-icons/fa";
import {OvationEventConsumer} from "../context";

export default function Work({work}) {
    return<OvationEventConsumer>
        {
            value =>{
                const{setSingleWork} = value;

                return(
                    <WorkWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-3 my-3">
                        <div className="card">
                            <div className="img-container">
                                <img src ={work.image}
                                 className="card-img-top p-2"
                                 alt ="work img" 
                                 style = {{height:"320px"}}/>
                                 <div className="work-icon">
                                     <Link to={"/gallery/${work.id}"} onClick={() => setSingleWork(work.id)}>
                                         <FaSearch className="icon"/>
                                     </Link>
                                     <FaCartPlus className="icon"/> 
                                 </div>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className="mb=0">{work.title}</p>
                            </div>
                        </div>
                    </WorkWrapper>
                )
            }
        }
    </OvationEventConsumer>
}

const WorkWrapper = styled.div `
.card{
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
}
.card:hover{
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.card-img-top{
    transition: var(--mainTransition);
}
.card-img-top:hover{
    transform: scale(1.15);
    opacity: 0.2;
}
.img-container{
    position: relative;
}
.work-icon{
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
}
.icon{
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
}
.card:hover .work-icon{
   opacity: 1;
}
.card-body{
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    
}
;
`