import React from "react";
import { Link } from "react-router-dom";


const Footer = () =>{
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About Us</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><a target="_blank" id="action-list-11" class="dtKbfb  oYxtQd" rel="noreferrer" 
                                    href="https://api.whatsapp.com/send?phone=918127976296&amp;text=" 
                                    ><span>WhatsApp</span></a></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                            We focus on helping clients design and build Tomorrow’s organization. 
                            We provide real-world solutions to complex business issues through audit and assurance functions, 
                            taxation-international and domestic, startup in India, company formation in India, and foreign investment in India etc.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mp-1">Old Kondli, Near Kalyanipuri Nala, Behind Canara Bank, Delhi-110096</p></div>
                        <div><p className="text-white mp-1">+91-8127976296</p></div>
                        <div><p className="text-white mp-1"></p>suraj888999@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
