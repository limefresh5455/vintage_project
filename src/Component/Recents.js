import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client"
function Recents() {
  const [postData, setPost] = useState(null);
  console.log(postData)
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
        }`).then((data) => setPost(data)).catch(console.error)
  }, []);

  return (
    <div>
      <section className="pd-1 pd-2 bg-recents" >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-head">
                <h2>Our Recents Property</h2>
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
          {postData && postData.map((post, index) => (
            // <div className="simple-effet-image clearfix d-st">
             
              <div className="col-md-4">
                <div className="effect-image-1">
                <img src={post.poster.asset.url} alt={post.poster.alt} className="img-fluid inner-img-1"  />
                  <div className="simple-text">
                    <h3><i className="fa fa-map-marker" aria-hidden="true"></i>{post.propertyType.toUpperCase()}</h3>
                    <p>{post.title}</p>
                  </div>
                  <div className="overlay-sim-text-2 overlay-xs-1">
                    <Link href="#" className="btn-85"><i className="fa fa-search-plus" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
            // </div>
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
export default Recents;