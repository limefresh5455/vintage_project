import React from "react";
import { Link } from "react-router-dom";
function About() {
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
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="about-content">
                <h3>Welcome To <span className="span3" >Vantage</span></h3>
                <p>Vantage Commercial Realty is a boutique brokerage house located in Washington, D.C., was founded in 2005,investors and developers since then.</p>
                <p>Our laser focus is to procure off-market properties for the developers and investors for their specific type of properties and geographic locations. We proudly offer our long expertise as we reach out to the owners of the properties from our private database and negotiate to acquire their properties for our clienteles.
                  Vantage Commercial Realty is a boutique brokerage house located in Washington, D.C. with the following expertise:</p>
                <div className="below-btn-1">
                  <Link className="arrow-button-3">Find Out More<span className="arrow-3"></span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-content-1">
                <img src="https://pinnacleceo.com/wp-content/uploads/2021/03/iStock-514366598.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
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
            <div className="col-md-4">
              <div className="ex-section-content">
                <div className="img-wrapper-in">
                  <img src="https://morrisinvest.com/wp-content/uploads/2019/08/hire-property-management-company.jpg" className="img-fluid inner-img-1" alt="" /></div>                <h4><i className="fa fa-angle-right" aria-hidden="true"></i>Off-Market Properties</h4>
                <p>Due to our extensive market knowledge and credibility in the marketplace, we have established relationships with both institutional equity investors and private investors to structure acquisitions that meet the needs of today’s investors and developers. We believe the greatest hurdle to succeed in real estate investing is targeting the right opportunities. With this in mind.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ex-section-content">
                <div className="img-wrapper-in">
                  <img src="https://images.ctfassets.net/quf8gannthel/5Btocd6Dul6Z6Dx6nh2mMT/3d040269d2ffc78a0ed2575628425016/Approved.webp?w=800&q=50" className="img-fluid inner-img-1" alt="" /></div>
                <h4><i className="fa fa-angle-right" aria-hidden="true"></i>Tenant Representation</h4>
                <p>We are the leading provider of retail, office, and industrial leasing and tenant representation services in the Washington, D.C. and metro area. The company offers comprehensive commercial real estate services and support. We serve professionals with regards to their office needs, store owners for retail space needs, as well as national chains, warehouses, and industrial professions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ex-section-content">
                <div className="img-wrapper-1">
                  <div className="img-wrapper-in">
                    <img src="https://thatfloridalife.com/wp-content/uploads/2021/05/Untitled-design7.png" className="img-fluid inner-img-1" alt="" /></div>
                </div>
                <h4><i className="fa fa-angle-right" aria-hidden="true"></i>Ultimately Representation</h4>
                <p>Our main goal is to facilitate smooth and successful transactions for our clients, and we accomplish this by making sure our clients are educated on the market, informed of their options, and confident with the decisions they make. We understand that every client is different, so we work diligently to provide all clients with an experience and outcome that matches his or her needs.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pd-8">
            <div className="col-md-4">
              <div className="ex-section-content">
                <div className="img-wrapper-in">
                  <img src="https://www.allrealestatezone.com/wp-content/uploads/2022/03/Property-Management-Company.jpg" className="img-fluid inner-img-1" alt="" /></div>                <h4><i className="fa fa-angle-right" aria-hidden="true"></i>Global Inquiries</h4>
                <p>We have built relationships with foreign investors who are constantly seeking multifamily and office buildings in the Washington, D.C. and metro area.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ex-section-content">
                <div className="img-wrapper-1">
                  <div className="img-wrapper-in">
                    <img src="https://livekluje.s3-de-central.profitbricks.com/public/images/1772/how-to-start-a-property-management-company.png" className="img-fluid inner-img-1" alt="" /></div>
                </div>
                <h4><i className="fa fa-angle-right" aria-hidden="true"></i>Leasing/Selling</h4>
                <p>Our team evaluates the client’s properties for the maximum earning before listing the properties for lease or for sale in the neighborhood where the properties are located. We are skilled negotiators who are able to secure tenants with the highest credit ratings, at the best rental rates, and in a timely manner.</p>
              </div>
            </div>
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