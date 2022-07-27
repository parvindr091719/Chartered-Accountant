import React from "react";
import VMC from "./inc/VMC";

const About = () =>{
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">
                        Our Company
                    </h5>
                    <div className="underline"></div>
                    <p>
                        Chartered Accountant & Business Intelligence Consultant in Old Kondli, 
                        Near Kalyanipuri Nala, Behind Canara Bank, Delhi-110096
                    </p>
                    <p>
                        We focus on helping clients design and build Tomorrow’s organization. 
                        We provide real-world solutions to complex business issues through audit and assurance functions, 
                        taxation-international and domestic, startup in India, company formation in India, and foreign investment in India etc.
                    </p>
                </div>
            </section>

            {/* Our Vision, mission and values  */}
            <VMC/>
        </div>
    );
}

export default About;