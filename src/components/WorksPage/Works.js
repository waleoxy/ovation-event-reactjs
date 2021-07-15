import React from 'react'
import {OvationEventConsumer} from "../../context";
import Title from "../Title";
import Work from "../Work";
import WorkFilter from "./WorkFilter";

export default function Works() {
    return <OvationEventConsumer>
        
        { value =>{
            const {filteredWorks} = value;
            return <section className="py-5">
                <div className = "container">
                    <Title center title= "our works"/>
                    <WorkFilter/>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h6 className="text-title ">
                                total products: {filteredWorks.length}
                            </h6>
                        </div>

                    </div>
                    <div className=" row py-5">

                        {filteredWorks.length === 0 ? (
                            <div className="col text-title text-center">
                                sorry no item matched your search
                            </div>
                        ) : 
                           (filteredWorks.map(work => {
                                return (
                                     <Work key="work.id" work={work}/>
                                     
                                     )})
                                     )
                        }
                    </div>
                </div>
            </section>
        }}
    </OvationEventConsumer>
}
