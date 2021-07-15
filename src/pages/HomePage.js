import React from 'react'
import Hero from "../components/Hero.js";
import {Link} from "react-router-dom";
import Services from "../components/HomePage/Services";
import FeaturedWork from "../components/HomePage/FeaturedWork";
 

export default function HomePage() {
    return (
        <>
          <Hero max ="true" title="ovation events" >
            <Link to="/gallery" 
            className="main-link" style={{margin: "2rem"}}> 
            gallery 
            </Link>
          </Hero>
          <Services/>
          <FeaturedWork/>
        </>
    )
}
