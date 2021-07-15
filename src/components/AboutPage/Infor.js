import React from 'react'
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg"

export default function Infor() {
    return (
        <section py-5>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} 
                        className="img-fluid img-thumbnail" 
                        alt="about"
                        style={{background: "var(--darkGrey"}}
                        />;
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us"/> 
                        <p> The beginning of the 20th century brought Texas a promise of great times.
                            Railroads crisscrossed the state. Towns were growing at a fast rate. 
                            People were making a good living in the ranching and farming industries.
                            What was most exciting was the oil discovery at Spindletop in 1901. 
                            There was a job for everyone who wanted one. But the good times didn’t last forever. 
                       </p>
                        <p> By 1929, the United States — Texas included — had fallen on hard times. 
                            The Great Depression was hovering over everyone. People lost jobs; 
                            stores went out of business; families lost their homes. 
                            In the story below, you will read about Nancy and her brother Jimmy. 
                            They are worried because their father has lost his job.
                            Will their family become victims of the Great Depression too
                        </p> 
                        <button className="main-link" type="button" 
                        style={{marginTop:"2rem"}}
                        >more info
                        </button>
                        </div>
                    </div>
                </div>
        </section>
    )
}
