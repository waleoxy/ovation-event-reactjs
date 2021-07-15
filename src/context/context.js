import React, { Component } from 'react'
import {linkData} from "./linkData";
import {socialData} from "./socialData";
import {works} from "./worksData"

const OvationEventContext = React.createContext();

class OvationEventProvider  extends Component {
    state = {
        droplistOpen: false,
        links: linkData,
        socialLinks: socialData,
         storedWorks:[],
         filteredWorks:[],
         featuredWorks:[],
         singleWork:{},
         loading: false,
         search: "",
         category_type: "all",
         category: "all"
    };
    componentDidMount(){
        this.setWorks(works);
    }

    setWorks = (works) =>{
        let storedWorks = works.map(item=>{
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url
            const work= {id,...item.fields, image}
            return work
        })
        //feartured works
        let featuredWorks = storedWorks.filter(item=>item.featured===true);
        this.setState({
            storedWorks,
            filteredWorks:storedWorks,
            featuredWorks,
            singleWork: this.getStorageWork(),
            loading: false
        });
    }
    // get work from local storage
    getStorageWork = () =>{
        return localStorage.getItem("singleWork") ? JSON.parse(localStorage.getItem("singleWork")) : {} ;
    }
    // sync storage with local storage
    syncStorage = () =>{
        //localStorage.setItem("JSON.stringyfy()")
    }
    // set a single work used to open up single work page
    setSingleWork = (id) =>{
        let work = this.state.storedWorks.find(item => item.id === id);
        localStorage.setItem("singleWork", JSON.stringify(work));
        this.setState({
            singleWork:{...work},
            loading: false
        });
    }
    // handle drop down menu
    handleDroplist = () =>{
        this.setState({droplistOpen: !this.state.droplistOpen})
    }

    handleChange = event =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, 
        this.sortData
        )        
    }
    sortData = () => {
        const {storedWorks, category, category_type, search} = this.state;
        let tempWorks = [...storedWorks];
        if(category !== "all" && category_type == "all"){
            tempWorks = tempWorks.filter(item => item.category == category);
        }else{
            tempWorks = tempWorks.filter(item => item.category == category);
            tempWorks = tempWorks.filter(item_type => item_type.category_type == category_type);
        }
        this.setState({
            filteredWorks: tempWorks
        })
    }
    render() {
        return (
            <OvationEventContext.Provider value ={{
                ...this.state,
                handleDroplist: this.handleDroplist,
                setSingleWork: this.setSingleWork,
                handleChange: this.handleChange

            }}>
                {this.props.children}
            </OvationEventContext.Provider>
        )
    }
}
const OvationEventConsumer = OvationEventContext.Consumer;

export {OvationEventProvider, OvationEventConsumer };