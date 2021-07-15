import React from 'react'
import Title from "../../components/Title";

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className= "col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="py-3" action="https://formspree.io/tossoxy@gmail.com" method="POST">
                        <div className="form-group" className="my-2">
                        <input type="text" 
                        name="fulltname" 
                        placeholder="Oluwatosin Otubu"
                        className="form-control"/>  
                        </div>  
                       <div className="form-group" className="my-2">
                        <input type="email" 
                        name="email" 
                        placeholder="oluwatosin@otubu.com"
                        className="form-control"/>   
                        </div>
                        <div className="form-group" className="my-2">
                        <input type="text" 
                        name="subject" 
                        placeholder="important"
                        className="form-control"/> 
                        </div>
                        <div className="form" className="my-2">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="10"
                                placeholder="hello"/>
                        </div>
                        <div form-group mt-3>
                            <input
                            type="submit"
                            value="send"
                            className="form-control bg-primary text-white"
                            />
                        </div>
   
                    </form>
                </div>
            </div>
        </section>
    )
}
