import React from "react";
import { Link } from "react-router-dom";
function OurTeam() {
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
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="about-content">
                <h3>Who WE Are<span /></h3>
                <p>Our extensive experience and expertise in real estate allows us to offer a full spectrum of services for projects involving Multifamilies/Office buildings. From condominiums to townhomes and single-family projects, we guide our clients on every task through every project. Whether it’s market-rate sales or affordable housing, implementing lease-to-own programs to consultation and market analysis, Vantage Commercial Realty guarantees an effective solution to every challenge.</p>
                <div className="below-btn-1">
                  <Link className="arrow-button-3">Find Out More<span className="arrow-3"></span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-content-1">
                <img src="https://pinnacleceo.com/wp-content/uploads/2021/03/iStock-514366598.jpg" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
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
            <div className="col-md-4">
              <div className="card-area">
                <img src="https://vantagecr.com/wp-content/uploads/2017/09/User_Orginal.png" className="img-fluid" alt=""/>
                <h3>Ken Noroozi</h3>
                <p>Principal Broker</p>
                <div className="icon-mg-1">
                  <Link href="#"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-area">
                <img src="https://vantagecr.com/wp-content/uploads/2017/09/User_Orginal.png" className="img-fluid"  alt=""/>
                <h3>Mya Prince</h3>
                <p>Senior Property Manager</p>
                <div className="icon-mg-1">
                  <Link href="#"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-area">
                <img src="https://vantagecr.com/wp-content/uploads/2017/09/User_Orginal.png" className="img-fluid" alt=""/>
                <h3>Daryl Davis</h3>
                <p>Associate</p>
                <div className="icon-mg-1">
                  <Link href="#"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pd-9">
            <div className="col-md-4">
              <div className="card-area">
                <img src="https://vantagecr.com/wp-content/uploads/2017/09/User_Orginal.png" className="img-fluid" alt=""/>
                <h3>Kailey Cheung</h3>
                <p>Associate</p>
                <div className="icon-mg-1">
                  <Link href="#"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-area">
                <img src="https://vantagecr.com/wp-content/uploads/2017/09/User_Orginal.png" className="img-fluid" alt=""/>
                <h3>Shirley Yousefie</h3>
                <p>Associate</p>
                <div className="icon-mg-1">
                  <Link href="#"><i className="fa fa-skype" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
         </div>
  )

}
export default OurTeam;