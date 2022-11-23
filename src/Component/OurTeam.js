import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import contentServices from "../service/contentService";
import ourTeamServices from "../service/ourTeamService";
function OurTeam() {
  const [postData, setPost] = useState(null);
  const [teamData, setTeamPost] = useState(null);
  console.log(postData);
  function getOurteamData() {
      new contentServices().getOurteamData().then(data => {
        setPost(data)
      });
  }
  function getTeamContentData() {
    new ourTeamServices().getTeamContentData().then(data => {
      setTeamPost(data)
    });
}
  useEffect(() => {
    getOurteamData();
    getTeamContentData();

  }, []);

  return (
    <div>
      {/* <!-- about-content-start --> */}
      <section className="pd-1 pd-2 bg-team">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-head">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-content-end --> */}
      {/* <!-- about-content-start --> */}
      <section className="pd-1 pd-2">
      {postData && postData.map((post, index) => (
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="about-content">
                <h3>Who WE Are<span /></h3>
                <p>{post.message}</p>
                <div className="below-btn-1">
                  <Link className="arrow-button-3">Find Out More<span className="arrow-3"></span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-content-1">
                <img src={post.poster.asset.url}className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
               ))}
      </section>
      {/* <!-- about-content-end --> */}
      {/* <!-- card-area-start --> */}
      <section className="pd-9 pd-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mg-head">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
          {teamData && teamData.map((post, index) => (
            <div className="col-md-4">
              <div className="card-area">
                <img src={post.poster.asset.url} className="img-fluid" alt=""/>
                <h3>{post.fullName}</h3>
                <p>Principal Broker</p>
                <div className="icon-mg-1">
                  <Link href="#"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
             ))}

          </div>


        </div>
      </section>
         </div>
  )

}
export default OurTeam;