import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import propertyServices from "../service/propertySerive";
function Home() {
    const [postData, setPost] = useState(null);
    console.log(postData);
    function getPropertyData() {
        new propertyServices().getPropertyData().then(data => {
            setPost(data)
        });
    }
    useEffect(() => {
        getPropertyData();
        return () => {
        }
    }, []);

    const ref = useRef(null);
    const handleAbout = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="banner">
                <video autoPlay muted loop className="tagline-video">
                    <source className="h-100" src="assets/images/vedio/vedio-3.mp4" type="video/mp4" />
                </video> <div className="overlay"></div>

                <div className="banner-innner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner-left">
                                    <h1>Prominent Wholesaler off-market properties in metro</h1>
                                    <div className="below-btn-1">
                                        <Link className="arrow-button-3" to="/contact">CONTACT US<span className="arrow-3"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll" id="button1">
                                <button onClick={handleAbout} className="btn-scroll" >Scroll</button>
                                <div className="scroll-vert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={ref}><section className="pd-1 pd-2 second">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-1 content-in2">
                                <h3><span></span>About <span className="span2" >Vantage</span></h3>
                                <p> Vantage Commercial Realty is a boutique brokerage house located in Washington, D.C. was founded in 2005, investors and developers since then. </p>
                                <div className="below-btn-1">
                                    <Link className="arrow-button-3" to="/about">Find Out More<span className="arrow-3"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
            {/* ----------------------------------- */}
            <section className="pd-1 pd-4 bg-in2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ctg-content">
                                <div>
                                    <img src="assets/images/ctg2.png" className="img-fluid img-hit" alt="img1" /></div>
                                <div className="ctg-cnt-1">
                                    <h3>Our Properties</h3>
                                    <p>Our extensive experience and expertise in real estate allows us to offer a full spectrum of services</p>
                                    <Link href="#" className="btn-7">Find Out<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ctg-content">
                                <div>
                                    <img src="assets/images/ctg-in.png" className="img-fluid img-hit" alt="img1" /></div>
                                <div className="ctg-cnt-1">
                                    <h3>Our Sale</h3>
                                    <p>Our extensive experience and expertise in real estate allows us to offer a full spectrum of services</p>
                                    <Link href="#" className="btn-7">Find Out<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="ctg-content">
                                <div>
                                    <img src="assets/images/ctg5.png" className="img-fluid img-hit" alt="img1" /></div>
                                <div className="ctg-cnt-1">
                                    <h3>FOR Lease</h3>
                                    <p>Our extensive experience and expertise in real estate allows us to offer a full spectrum of services</p>
                                    <Link to="/lease" className="btn-7">Find Out<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="ctg-content">
                                <div className="ctg-cnt-1 mrb">
                                    <h3 className="ht-new1">Recents</h3>
                                    <div className="below-btn-1">
                                        <Link className="arrow-button-3" to="/recents">Find Out More<span className="arrow-3"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* <!-- catogaries-end --> */}

            {/* </div> */}
            <section className="pd-1 pd-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="fes-in2">
                                <h3>Featured Properties</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {postData && postData.map((post, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="fest-1"><div className="img-wrapper-in">
                                    <img src={post.poster.asset.url} alt={post.poster.alt} className="img-fluid inner-img-1" /></div>
                                    <div className={(post.propertyType.toUpperCase() === "SALE" ? "fest-2 new-bg " : "fest-2")}>
                                        <h4>For {post.propertyType.toUpperCase()}</h4>
                                    </div>
                                    <div className="fest-3">
                                        <h3>{post.propertyName}</h3>
                                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{post.propertyAddress}</p>
                                        <Link href="#">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8">
                            <div className="bnt-in">
                                <Link className="arrow-button-4" to="/sale">Find Out More<span className="arrow-4"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-in-5">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-5 offset-1 txc">
                            <div className="heading white-heading">
                                What People Say
                            </div>
                            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="testimonial4_slide">

                                            <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                            <h4>John Doe</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial4_slide">
                                            <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<i className="fa fa-quote-right" aria-hidden="true"></i> </p>
                                            <h4>John Doe</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial4_slide">
                                            <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                            <h4>John Doe</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 txc-1">
                            <img src="https://grammarpros.com/wp-content/uploads/2018/07/shutterstock_789378616.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pd-1 pd-2 pd-r">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-5">
                            <div className="contact-form-start">
                                <h2>Have Questions</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control form-control-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No." />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control form-control-in" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                                    </div>
                                    <div className="below-btn-1">
                                        <Link className="arrow-button-3">Submit<span className="arrow-3"></span></Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="contact-us-in">
                                <h3>Get In Touch</h3>
                                <div className="cnt-in-5">
                                    <div className="icn-in">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="icn-in-1">
                                        <h4>Email:</h4>
                                        <p>https://vantagecr.com/</p>
                                    </div>
                                </div>

                                <div className="cnt-in-5">
                                    <div className="icn-in">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className="icn-in-1">
                                        <h4>Phone:</h4>
                                        <p>(202) 347-3760</p>
                                    </div>
                                </div>

                                <div className="cnt-in-5">
                                    <div className="icn-in">
                                        <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                    </div>
                                    <div className="icn-in-1">
                                        <h4>Address:</h4>
                                        <p>1010 Vermont Ave., NW, Suite 716 Washington DC 20005</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="map-in">
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.915318631045!2d-77.03608318528994!3d38.903051754217145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7be2eeea3fd%3A0x55d774f5b6a285a7!2s1010%20Vermont%20Ave%20NW%20Suite%20716%2C%20Washington%2C%20DC%2020005!5e0!3m2!1sen!2sus!4v1663680550999!5m2!1sen!2sus"
                        width={"100%"} height="330" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </>
    )

}

export default Home;