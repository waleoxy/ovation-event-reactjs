import React from 'react';
import {Link} from "react-router-dom";
import Title from "../components/Title";
import Hero from "../components/Hero";
import {OvationEventConsumer} from "../context";
import singleWorkBcg from "../images/singleWorkBcg.JPG";

export default function SingleWorkPage() {
    return (
        <>
            <Hero img={singleWorkBcg} title="our work"/>
            <OvationEventConsumer>
                {value => {
                    const {singleWork, loading} = value;
                    if(loading){
                        console.log("hello from loading");
                       return <h1>work loading...</h1>
                    }
                    const {company, description, id, price, title, image} = singleWork;

                    return(
                    <section py-5>
                         <div className="container">
                             <div className="row">
                                 <div className="col-10 auto col-sm-8 col-md-6 my-3">
                                     <img src = {`../${image}`} 
                                     alt ="our work"
                                     className = "img-fluid"/>
                                </div>
                                <div className="col-10 auto col-sm-8 col-md-6 my-3">
                                    <h5 className="text-title mb-4">category type: {title}</h5>
                                    <h5 className="text-capitalize text-muted mb-4"> company: {company}</h5>
                                    <h5 className="text-main text-capitalize mb-4">price: NGN {price}</h5>
                                    <p className="text-capitalize text-title mt-3">
                                        some info about work:
                                    </p>
                                    <p>{description}</p>
                                    <Link to="/gallery" className="main-link" style={{margin:"0.75"}}>
                                        back to gallery
                                    </Link>
                                </div>
                             </div>
                        </div>
                     </section>

                    )
                }}
                </OvationEventConsumer>
        </>
    )
}
