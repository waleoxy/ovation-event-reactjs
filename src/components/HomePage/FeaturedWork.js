import React from 'react'
import {OvationEventConsumer} from "../../context";
import Work from '../Work';
import{Link} from "react-router-dom";
import Title from "../Title";

export default function FeaturedWork() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title = "Featured works" center="true"/>
                <div className="row my-5">
                    <OvationEventConsumer>
                      {value =>{
                          const {featuredWorks } = value;
                          
                          return featuredWorks.map(work =>(
                              <Work key={work.id} work={work}/>
                              ))
                      }}  
                    </OvationEventConsumer>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to ="/gallery" className="main-link">
                            our works
                        </Link>
                    </div>
                                        
                </div>
                <div>
                </div>
            </div>
        </section>
        )
       
}
 