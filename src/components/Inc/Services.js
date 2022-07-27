import React from "react";
import Service1 from "../Images/service1.png";
import Service2 from "../Images/service2.jpg";
import Service3 from "../Images/service3.jpg";

const Services = () =>{
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Our Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow text-center">
                            <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                            <div className="card-body text-center">
                                <h6><b className="underline">Direct Tax & Indirect Tax</b></h6>
                                <ul className="line-order">
                                    <li>Advance Tax Working</li>
                                    <li>GST Refund</li>
                                    <li>GST Registration, Return & Consulting</li>
                                    <li>Income Tax Return filing</li>
                                    <li>PAN Application</li>
                                    <li>Rectification/Refunds/Apeal Effects Etc.</li>
                                    <li>TAN Application & TDS/ TCS Return</li>
                                    <li>Tax Audit Report (Form 3CA and 3CD)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow text-center">
                            <img src={Service2} className="w-100 border-bottom" alt="Services"/>
                            <div className="text-center">
                                <h6><b className="underline">Audit and other Assignments</b></h6>
                                <ul className="line-order">
                                    <li>Forensic Audit</li>
                                    <li>GST Audit</li>
                                    <li>Internal Audit</li>
                                    <li>Special Audit</li>
                                    <li>Statutory Audit</li>
                                    <li>Stock Audit</li>
                                    <li>Tax Audit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow text-center">
                            <img src={Service3} className="w-100 border-bottom" alt="Services"/>
                            <div className="text-center">
                                <h6><b className="underline">Private Company Compliances</b></h6>
                                <ul className="line-order">
                                    <li>Appointments and Removal of Director</li>
                                    <li>DIN Application</li>
                                    <li>Filing Application for Name Approval</li>
                                    <li>Filing of Annual Returns ROC (AOC 4 & MGT 7)</li>
                                    <li>Incorporation of a Private Limited Company/LLP/OPC</li>
                                    <li>Increase in authorized capital</li>
                                    <li>Revised MOA & AOA/LLP Agreement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;