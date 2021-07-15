import React, { Component } from 'react';
import styled from "styled-components";
import{FaDolly, FaRedo, FaDollarSign} from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                id:1,
                icon:<FaDolly/>,
                title: "event planning",
                text: "We make your event a memorable one from the little details to the major preferences we make a difference",
            },
            {
                id:2,
                icon:<FaRedo/>,
                title: "event decoration",
                text: "We make your event a memorable one from the little details to the major preferences we make a difference",
            },
            {
                id:3,
                icon:<FaDollarSign/>,
                title: "cakes and catering",
                text: "We make your event a memorable one from the little details to the major preferences we make a difference",
            },
            {
                id:4,
                icon:<FaDolly/>,
                title: "shop and rentals",
                text: "We make your event a memorable one from the little details to the major preferences we make a difference",
            }
        ]
    }
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item=>{
                            return(
                                <div className="col-10 mx-auto 
                                    col-sm-6 col-md-3 text-center my-3" key={item.id}> 
                                   <div className="service-icon">
                                       {item.icon}
                                    </div> 
                                    <div className="mt-3 text-capitalize">
                                       {item.title}
                                    </div> 
                                    <div className="mt-3">
                                       {item.text}
                                    </div> 
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}
const ServicesWrapper = styled.section`
background: rgba(95,183,234,0.5);
.service-icon{
    font-size: 1.5rem;
    color: var(--primaryColor);
}
p{
    color: var(--darkGrey);
}
`