import React from "react";
import Slider from "../Inc/Slider";
import {Link} from "react-router-dom"
import VMC from "./inc/VMC";
import Services from "../Inc/Services";

function Home(){
    return (
        <div>
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Chartered Accountant & Business Intelligence Consultant in Old Kondli, 
                                Near Kalyanipuri Nala, Behind Canara Bank, Delhi-110096
                            </p>
                            <p>
                                We focus on helping clients design and build Tomorrow’s organization. 
                                We provide real-world solutions to complex business issues through audit and assurance functions, 
                                taxation-international and domestic, startup in India, company formation in India, and foreign investment in India etc.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow"> Read More </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision, mission and values  */}
            <VMC/>

            {/* Our Services */}
            <Services/>
        </div>
    );
}

export default Home;