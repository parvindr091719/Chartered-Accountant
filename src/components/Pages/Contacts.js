import React from "react";
import contact1 from "../Images/contact1.jpg"

const Contact = () =>{


    function Alert (){
        alert("Done")
    }


    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">

                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="number" className="form-control" placeholder="Mobile Number" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">E-mail Address</label>
                                        <input type="text" className="form-control" placeholder="E-mail Address" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Subject</label>
                                        <input type="text" className="form-control" placeholder="Write your subject?" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your messages...."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="submit" className="btn btn-primary shadow w-100"
                                         onClick={Alert}>Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <img src={contact1} className="w-100 border-bottom" alt="Services"/>
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>Old Kondli, Near Kalyanipuri Nala, Behind Canara Bank, Delhi-110096</p>
                                    <p>+91-8127976296</p>
                                    <p>suraj888999@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;