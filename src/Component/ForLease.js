import React, { useState, useEffect } from "react";
import sanityClient from "../client"
import { Link } from "react-router-dom";
function Lease() {
  const [postLeaseData, setLeasePost] = useState(null);
  console.log(postLeaseData)
  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="property"]{
                 _id,
                title,
                releaseDate,
                poster{
                  asset->{
                    _id,
                    url
                  },
                  alt
                },
                propertyName,
                propertyType
      }`).then((data) => setLeasePost(data) , {prpertyType:"lease"}).then((data) => console.log(postLeaseData)).catch(console.error)
  }, []);

  return (
    <div>
      <section className="pd-1 pd-2 bg-managment">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-head">
                <h2>Our Leased Property</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pd-1 pd-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="st-head">
                <h3>Featured Property</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="simple-effet-image clearfix d-st"> */}
            {postLeaseData && postLeaseData.map((post, index) => (
              <><div className="col-md-4">
                <div className="effect-image-1">
                  <img src={post.poster.asset.url} alt={post.poster.alt} className="img-fluid img-hit-st" />
                  <div className="simple-text">
                    <h3><i className="fa fa-map-marker" aria-hidden="true" ></i>{post.title}</h3>
                    <p>4316 St Barnabas Rd, Marlow Heights, MD 20748</p>
                  </div>
                  <div className="overlay-sim-text-2 overlay-xs-1">
                    <Link href="#" className="btn-85"><i className="fa fa-search-plus" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
              </>
            ))}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* <!-- contact-area-start --> */}
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
export default Lease;