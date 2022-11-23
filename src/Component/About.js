import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import contentServices from "../service/contentService";
import subContentServices from "../service/subContentService";
function About() {
  const [postData, setPost] = useState(null);
  const [subData, setSubpost] = useState(null);
  function getAboutContentData() {
    new contentServices().getAboutContentData().then(data => {
      setPost(data)
    });
  }
  function getSubContentData() {
    new subContentServices().getSubContentData().then(data => {
      setSubpost(data)
    });
  }
  useEffect(() => {
    getAboutContentData();
    getSubContentData();
    return () => {
    }
  }, []);

  return (
    <div>
      <section className="pd-1 pd-2 bg-about" >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-head">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pd-1 pd-2">
        <div className="container">
          {postData && postData.map((post, index) => (
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="about-content">
                  <h3>Welcome To <span className="span3" >Vantage</span></h3>
                  <p>{post.message}</p>
                  <div className="below-btn-1">
                    <Link className="arrow-button-3">Find Out More<span className="arrow-3"></span></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-content-1">
                  <img src={post.poster.asset.url} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pd-2">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="ex-section-head">
                <h3>Our Experties</h3>
              </div>
            </div>
          </div>
          <div className="row pd-8">
            {subData && subData.map((post, index) => (
              <div className="col-md-4">
                <div className="ex-section-content">
                  <div className="img-wrapper-in">
                    <img src={post.poster.asset.url} className="img-fluid inner-img-1" alt="" /></div>
                  <h4><i className="fa fa-angle-right" aria-hidden="true"></i>{post.heading}</h4>
                  <p>Due to our extensive market knowledge and credibility in the marketplace, we have established relationships with both institutional equity investors and private investors to structure acquisitions that meet the needs of today’s investors and developers. We believe the greatest hurdle to succeed in real estate investing is targeting the right opportunities. With this in mind.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pd-1 pd-2 bg-btm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bold-in">
                <h3>JOIN OUR TEAM</h3>
                <p>Vantage Commercial Realty is a boutique brokerage house located in Washington, D.C., was founded in 2005.</p>
                <div className="below-btn-1">
                  <Link className="arrow-button-3">Contact Us<span className="arrow-3"></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;