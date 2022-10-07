import React from "react";
import { Link } from "react-router-dom";
function Managment() {
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
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="about-content">
                <h3>Welcome To <span className="span3" >Vantage</span></h3>
                <p>Vantage Commercial Realty is a boutique brokerage house located in Washington, D.C., was founded in 2005,investors and developers since then.</p>
                <h5>Fees Structure</h5>
                <p>We offer property owners a competitive monthly management fee, ranging from 3% to 10%. This fee depends on factors such as the number of units managed by our team, the monthly rental cost, and the location of the property.</p>
                <p>Vantage Management does not charge our clients for routine maintenance, property vacancy, and start-up and termination fees.
                  **If a tenant if eviction within 6 months of our services, we will be happy to lease your rental property without any charges**</p>

                <div className="below-btn-1">
                  <Link className="arrow-button-3">Find Out More<span className="arrow-3"></span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-content-1">
                <img src="https://informa-mea-res.cloudinary.com/image/upload/training/course-images/certificate-in-business-process-management-improvement-training-course.jpg" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
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
            <div className="col-md-4">
              <div className="mg-head-content">
                <img src="assets/images/mgo-1.png" className="img-fluid" alt="" />
                <h4>Leasing Services</h4>
                <p>Vantage Management strategically markets individual properties, using search engines and off-site marketing tactics. Our available rental properties can be found on all major search engines and online classNameifieds.</p>
              </div>
            </div>
            <div className="col-md-4">
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
            </div>
          </div>

          <div className="row justify-content-center pd-9">
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
          </div>
        </div>
      </section>
    </div>
  )

}




export default Managment;