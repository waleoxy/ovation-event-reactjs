import React, { Component } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Gallery from "./pages/GalleryPage";
import Shop from "./pages/ShopPage";
import SingleWork from "./pages/SingleWorkPage";
import Default from "./pages/DefaultPage";

import {Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dropdown from "./components/droplist";


export default class App extends Component {
  render() {
    return (
      <> 
        {/*navbar, footer*/}
        <Navbar/>
        <Dropdown/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path = '/about' component={About}/>
          <Route path = '/contact' component={Contact}/>
          <Route path='/gallery' exact component={Gallery}/>
          <Route path='/gallery/:id' component={SingleWork}/>
          <Route path='/shop' component={Shop}/>
          <Route component ={Default}/>
        </Switch>
        <Footer/>
      </>
    )
  }
}
 