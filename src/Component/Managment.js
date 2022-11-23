import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import contentServices from "../service/contentService";
import subContentServices from "../service/subContentService";
function Managment() {
  const [postData, setPost] = useState(null);
  const [subPostData, setsubPost] = useState(null);
  console.log(subPostData);
  function getManagementData() {
    new contentServices().getManagementData().then(data => {
      setPost(data)
    });
  }
  function getSubManagementData() {
    new subContentServices().getSubManagementData().then(data => {
      setsubPost(data)
    });
  }
  useEffect(() => {
    getManagementData();
    getSubManagementData();
    return () => {
    }
  }, []);
  return (
    <div>
      <section className="pd-1 pd-2 bg-managment" >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-head">
                <h2>Managment</h2>
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
      {/* <!-- about-content-end --> */}


      {/* <!-- section-content-start --> */}
      <section className="pd-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mg-head-1">
                <h3>What We Provide</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {subPostData && subPostData.map((post, index) => (
              <div className="col-md-4">
                <div className="mg-head-content">
                  <img src={post.poster.asset.url} className="img-fluid" alt="" />
                  <h4>{post.heading}</h4>
                  <p>Vantage Management strategically markets individual properties, using search engines and off-site marketing tactics. Our available rental properties can be found on all major search engines and online classNameifieds.</p>
                </div>
              </div>
            ))}
            {/* <div className="col-md-4">
              <div className="mg-head-content">
                <img src="assets/images/mgo-2.png" className="img-fluid" alt="" />
                <h4>Accountability</h4>
                <p>For Vantage Management, the practice of management means actively taking responsibility for the services provided to tenants. Our management team proudly serves as the backbone of our properties.We act in the best interest of our clients by developing policies intended to benefit all parties, including the community and businesses.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mg-head-content">
                <img src="assets/images/mgo-3.png" className="img-fluid" alt=""/>
                <h4>Our Mission</h4>
                <p>The Vantage Management team strives to provide efficient and cost-effective service to our clients. We are committed to supporting our clients throughout all aspects of the management process.</p>
              </div>
            </div> */}
          </div>

          {/* <div className="row justify-content-center pd-9">
            <div className="col-md-4">
              <div className="mg-head-content">
                <img src="assets/images/mgo-4.png" className="img-fluid" alt="" />
                <h4>Innovation</h4>
                <p>Vantage Management seeks to continually innovate by enhancing technological resources for property management and marketing techniques.
                  At Vantage Management, we implement our innovative tools and our passionate communication with tenants, building staff, owners, and other members of our clientele to create efficient and unique solutions.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mg-head-content">
                <img src="assets/images/mgo-5.png" className="img-fluid" alt=""/>
                <h4>Services</h4>
                <p>Our Leasing Department effectively processes transactions for our tenants by working with their individual income and credit levels.
                  Vacant units are displayed on our website periodically. Each listing includes information about the type of property, size of property, its location, property className, and price.
                  Our Customer Service representatives receive </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )

}




export default Managment;