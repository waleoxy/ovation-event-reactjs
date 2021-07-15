import React from 'react';
import styled from "styled-components";
import {OvationEventConsumer} from "../../context";

export default function WorkFilter() {
    return (
       <OvationEventConsumer>
           {
               value =>{
                   const{search, category, category_type, handleChange, storedWorks} = value;

                   let categories = new Set();
                   categories.add("all");
                   for(let work in storedWorks){
                       categories.add(storedWorks[work]["category"]);
                   }
                   categories = [...categories];
                  
                   let category_types = new Set(); 
                   category_types.add("all");
                   for(let work in storedWorks){
                       category_types.add(storedWorks[work]["category_type"]);
                   }
                   category_types = [...category_types];
                   
                   return(
                       <div className="row my-5">
                           <div className= "col-10 mx-auto">
                               <FilterWrapper>
                                   <div>
                                       <label htmlFor="search">search works</label>
                                        <input type="text" name="search" id="search" 
                                        onChange={handleChange} value={search} 
                                        className="filter-item"/>
                                   </div>
                                   <div>
                                       <label htmlFor="category">category</label>
                                       <select name="category" id="category" 
                                            className="filter-item" onChange={handleChange}
                                            value={category}>
                                                {
                                                    categories.map((category, index) => {
                                                        return(
                                                            <option key= {index} value={category}>
                                                                {category} 
                                                            </option>
                                                        );
                                                    })
                                                }
                                       </select>
                                    </div>
                                    <div>
                                       <label htmlFor="category _type">category type</label>
                                       <select name="category_type" id="category_type" 
                                            className="filter-item" onChange={handleChange}
                                            value={category_type}>
                                                {
                                                    category_types.map((category_type, index) => {
                                                        return(
                                                            <option key={index} value={category_type}> {category_type} </option>
                                                        )
                                                    })
                                                }
                                                
                                            </select>
                                    </div>        
                                
                               </FilterWrapper>
                           </div>
                       </div>
                   )
               }
           }
       </OvationEventConsumer>
    )
}

const FilterWrapper = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 2rem;
grid-row-gap: 1rem;

label{
    font-weight: bold;
    text-transform: capitalize;
}
.filter-item{
    display: block;
    width: 100%; 
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--mainBlack);

}

`