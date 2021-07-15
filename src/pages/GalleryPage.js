import React from 'react'
import Works from "../components/WorksPage/Works";
import Hero from  "../components/Hero";
import myWorksBcg from "../images/myWorksBcg.jpg";

export default function GalleryPage() {
    return (
        <>
        <Hero img = {myWorksBcg}/>
        <Works/> 
        </>
        
    ) 
}
