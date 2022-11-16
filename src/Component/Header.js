import React, { useRef, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import { Auth } from "aws-amplify";
function Header() {
    const aref = useRef(null);
    const [scroll, setScroll] = useState(false);

    const handleHome = () => {
        aref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    // console.log(splitLocation);

    return (
        <div ref={aref}>
            <section className="hds-2">
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-9">
                            <div className="hds-1 hd-5">
                                <p><i className="fa fa-phone" aria-hidden="true"></i>(202) 347-3760</p>
                                <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                                </Link>
                                <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                <Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <header id="dynamic">
                <div className="container-fluid">
                    <nav className="navbar container navbar-expand-lg navbar-light nav-color" >
                        <Link className="navbar-brand" href="#"><img id="dynamiclogo" src="assets/images/logo-set-new.png" className="img-fluid img-new-1" alt="img1" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className={splitLocation[1] === "" ? "active-link nav-link" : "nav-link"} to="/">Home</Link>  </li>
                                <li className="nav-item"><Link className={splitLocation[1] === "about" ? "active-link nav-link" : "nav-link"} to="/about">About</Link>  </li>
                                <li className="nav-item"> <Link className={splitLocation[1] === "sale" ? "active-link nav-link" : "nav-link"} to="/sale">For Sale</Link></li>
                                <li className="nav-item"><Link className={splitLocation[1] === "managment" ? "active-link nav-link" : "nav-link"} to="/managment">Managment</Link></li>
                                <li className="nav-item"><Link className={splitLocation[1] === "lease" ? "active-link nav-link" : "nav-link"} to="/lease">For Lease</Link>  </li>
                                <li className="nav-item"><Link className={splitLocation[1] === "recents" ? "active-link nav-link" : "nav-link"} to="/recents">Recents</Link>  </li>
                                <li className="nav-item"> <Link className={splitLocation[1] === "ourTeam" ? "active-link nav-link" : "nav-link"} to="/ourTeam">Our Team</Link> </li>
                                <li className="nav-item"> <Link className={splitLocation[1] === "contact" ? "active-link nav-link" : "nav-link"} to="/contact">Contact Us</Link> </li>
                                <li className="nav-item"><button onClick={() => Auth.federatedSignIn({ provider:"Google" })}>Google</button></li>
                                <li className="nav-item">  <button onClick={()=>Auth.federatedSignIn()}>Sign in </button></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <button id="button" className={scroll ? "show" : ""} onClick={handleHome}><i className="fa fa-angle-double-up" aria-hidden="true"></i>
            </button>

        </div>

    )

}

export default Header;