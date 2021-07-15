import React from 'react'
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpg"

export default function DefaultPage() {
    return (
         <>
            <Hero img={defaultBcg} max= "true" title="Page not found">
                <Link to="/"className="main-link">return home</Link>

            </Hero>
        </>
    )
}
