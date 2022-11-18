import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contactService from "../service/contactService";
import { ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
function Contact() {
  // const [postData, setPostData] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => { })

  const onSubmit = (data, e) => {
    console.log('submitdat', data)
    new contactService().createContact(data).then(res => {
      console.log("new result", res);
      if (res === "Success") {
        // new toaster().successMessage("comments added successfully.");
        // new blogService().getBlogBySlug(slug).then(data => {
        //   setPostData(data)
        // });
        e.target.reset();
      } else {
        console.log("Error");
      }
    });
  }

  return (
    <div>
      <section className="pd-1 pd-2 bg-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-head">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pd-1 pd-2 pd-r">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="contact-form-start">
                <h2>Have Questions</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <input {...register("_id")} type="hidden" name="_id"  /> */}
                  <div className="form-group">
                    <input type="text" className="form-control form-control-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full name"
                      {...register("fullName", {
                        required: "This field is required",
                      })} />

                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No."
                      {...register("contact", {
                        required: "This field is required",
                      })} />
                  </div>
                  {/* <div className="form-group">
                    <input type="email" className="form-control form-control-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                  </div> */}
                  <div className="form-group">
                    <textarea className="form-control form-control-in" id="exampleFormControlTextarea1" rows="4" placeholder="Message"
                      {...register("message", {
                        required: "This field is required",
                      })}></textarea>
                  </div>
                  <div className="form-group mt-4">
                    <input type="submit" className="arrow-button-3" value="Submit" /><span className="arrow-3"></span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-us-in">
                <h3>Get In Touch</h3>
                {/* <div className="cnt-in-5"> */}
                {/* <div className="icn-in">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </div> */}
                {/* <div className="icn-in-1">
                    <h4>Email:</h4>
                    <p>https://vantagecr.com/</p>
                  </div> */}
                {/* </div> */}

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
          <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.915318631045!2d-77.03608318528994!3d38.903051754217145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7be2eeea3fd%3A0x55d774f5b6a285a7!2s1010%20Vermont%20Ave%20NW%20Suite%20716%2C%20Washington%2C%20DC%2020005!5e0!3m2!1sen!2sus!4v1663680550999!5m2!1sen!2sus" width="100%" height="330" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  )
}
export default Contact;