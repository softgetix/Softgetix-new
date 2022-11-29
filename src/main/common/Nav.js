import {React,useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../logo/softgetix_logo_new.png";




function Nav() {
   const [servicClass , setServiceClass] = useState(false);

   const route =  useLocation();
   const currentRoute = route.pathname;
   
   useEffect(() => {
      
      // Update the document title using the browser API
      if(currentRoute == '/dedicated-team' || currentRoute == '/it-staff-augmentation' || currentRoute == '/backend-development-services' || currentRoute == '/frontend-development-services' || currentRoute == '/web-development-services'){
         setServiceClass(true);
      } 
    });
   return (
    <>
      <section className="navigation">
        <div className="row">
          <nav
            id="navbar_top"
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          >
            <div className="container-softgetix">
              <div className="row">
                <div className="col-md-3 logo">
                  <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <NavLink
                        activeclassname="active"
                        className="nav-link"
                        to="/about"
                      >
                        ABOUT US
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        activeclassname="active"
                        className="nav-link"
                        to="/it-staff-augmentation-services"
                      >
                        STAFFING
                      </NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                           <Link className="nav-link dropdown-toggle">PRODUCTS <i className="fa fa-angle-down"></i>
                           </Link>
                           <ul className="dropdown-menu ">
                              <NavLink activeclassname="active" className="dropdown-item" to="/fence-crm">FenceCRM</NavLink>
                              <div className="dropdown-divider"></div>
                              <Link className="dropdown-item" to="/fence-crm">Browse all Products</Link>
                           </ul>
                        </li> */}
                    {/* <li className="nav-item dropdown">
                           <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           PRODUCTS <i className="fa fa-angle-down"></i>
                           </Link>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <NavLink activeclassname="active" className="dropdown-item" to="/fence-crm">FenceCRM</NavLink>
                              <div className="dropdown-divider"></div>
                              <Link className="dropdown-item" to="/fence-crm">Browse all Products</Link>
                           </div>
                        </li> */}
                    <li className="nav-item dropdown">
                      <Link
                        className={`nav-link dropdown-toggle ${servicClass ? 'active':''}`}
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        SERVICES <i className="fa fa-angle-down"></i>
                      </Link>

                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {/* <NavLink activeclassname="active" className="dropdown-item" to="/custom-software-development">Custom Software Development</NavLink> */}
                        <NavLink
                          activeclassname="active"
                          className="dropdown-item"
                          to="/dedicated-team"
                        >
                          Dedicated Development Team
                        </NavLink>
                        <NavLink
                          activeclassname="active"
                          className="dropdown-item"
                          to="/it-staff-augmentation"
                        >
                          IT Staff Augmentation
                        </NavLink>
                        {/* <NavLink activeclassname="active"  className="dropdown-item" to="/ITConsultantAdvisoryService">IT Consulting and Digital Advisory</NavLink> */}
                        <NavLink
                          activeclassname="active"
                          className="dropdown-item"
                          to="/backend-development-services"
                        >
                          Back End Development Services
                        </NavLink>
                        <NavLink
                          activeclassname="active"
                          className="dropdown-item"
                          to="/frontend-development-services"
                        >
                          Front End Development Services
                        </NavLink>
                        {/* <NavLink activeclassname="active"  className="dropdown-item" to="/SaasApplicationDevelopmentServices">SaaS Application Development Services</NavLink> */}
                        {/* <NavLink activeclassname="active"  className="dropdown-item" to="/BusinessIntelligenceServices">Business Intelligence Services </NavLink> */}
                        {/* <NavLink activeclassname="active"  className="dropdown-item" to="/DatabaseDevelopmentServices">Database Development Services</NavLink> */}
                        <NavLink
                          activeclassname="active"
                          className="dropdown-item"
                          to="/web-development-services"
                        >
                          Web Development Services
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        activeclassname="active"
                        className="nav-link"
                        to="/career"
                      >
                        CAREERS
                      </NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                           <NavLink activeclassname="active" className="nav-link" to="/blog">BLOG</NavLink >
                        </li> */}
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <Link
                      to="/contact"
                      className="btn contact_us_btn my-2 my-sm-0"
                      type="submit"
                    >
                      Contact Us
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Nav;
