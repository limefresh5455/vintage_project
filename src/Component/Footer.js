import React from "react";
import { Link } from "react-router-dom";
import { Amplify } from 'aws-amplify'
import config from '../aws-exports';
import { Auth } from "aws-amplify";

Amplify.configure(config)
function Footer() {
    return (
        <div>
            {/* <!-- footer-start --> */}
            <section className="pd-1 pd-ft ft-n-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ft-n">
                                <img src="assets/images/logo-set-new.png" className="img-fluid img-set-new-1" alt="" />
                                <p>Our extensive experience and expertise in real estate allows us to offer a full spectrum of services</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="our-links">
                                <h3>Our Links</h3>
                                <ul>
                                    <li><Link to="/"><i className="fa fa-angle-right" aria-hidden="true"></i>Home</Link></li>
                                    <li><Link to="/about"><i className="fa fa-angle-right" aria-hidden="true"></i>About</Link></li>
                                    <li><Link to="/contact"><i className="fa fa-angle-right" aria-hidden="true"></i>Contact Us</Link></li>
                                    <li><Link to="/ourTeam"><i className="fa fa-angle-right" aria-hidden="true"></i>Our Team</Link></li>
                                    <li><Link to="/managment"><i className="fa fa-angle-right" aria-hidden="true"></i>Managment</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="our-links-1">
                                <h3>Social Links</h3>
                                <ul>
                                    <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                    {/* <button onClick={() => Auth.signOut()}>Sign out </button> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ft-cp-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="ft-cp">
                                <p>Copyright: © 2022. All rights reserved.</p>
                                <div className="ft-cp-1">
                                    <Link href="#">Privacy</Link>
                                    <Link href="#" className="bd-5">Term & Condition</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )

}

export default Footer;