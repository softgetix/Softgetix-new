import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo/softgetix_logo_new.png';
import flag from '../../icons/india.png';
import award1 from '../../images/Software-Development.webp'
import award2 from '../../images/TruefirmReviews.webp'
import award3 from '../../images/CrowedReviews.webp'
import award4 from '../../images/Web-Development.webp'
import BackToTopButton from '../../BackToTopButton';

function Footer() {
  return (
    <>
    <section className="footer">
        <div className="pb-2">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xs-12 about-company">
                    <Link to="/"><img src={logo} alt="logo" width="200px"/></Link>
                </div>  
                <div className="col-lg-4 col-xs-12 location">
                <div className="country-title">
                  <h4 className="mt-lg-0 mt-sm-3 font-weight-bold"><img className="align-text-bottom mr-3" src={flag} width="35px" alt="flag"/>India</h4>
                </div>
                <ul className="contact-ul m-0 address">
                  <li>
                    <div className="row">
                      <div>
                        SoftGetix Inc. <br/>
                        519, Shagun Tower, AB Road,<br/>
                        Above Apna Sweets, <br/>
                        Vijay Nagar Square,<br/>
                        Indore, MP. 452010
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="mt-1">
                        <a href="tel:+91-731-4002699">+91-731-4002699</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="mt-1">
                        <a href="mailto:hello@softgetix.com">hello@softgetix.com</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>  
              <div className="col-lg-4 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3 font-weight-bold">Company</h4>
                    <ul className="m-0 p-0 address">
                      <li>- <Link to="/about">About Us</Link></li>
                      <li>- <Link to="/staffing">Staffing</Link></li>
                      {/* <li>- <Link to="/fence-crm">Products</Link></li> */}
                      {/* <li>- <Link to="/services">Blog</Link></li> */}
                      <li>- <Link to="/career">Careers</Link></li>
                      <li>- <Link to="/contact">Contact Us</Link></li>
                      {/* <li>- <Link to="#">Technology Blog</Link></li> */}
                      <li>- <Link to="/confidentiality-policy">Confidentiality Policy</Link></li>
                      <li>- <Link to="/refund-policy">Refund Policy</Link></li>
                    </ul>
              </div>
              <div className="col-lg-4 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3 font-weight-bold">Services</h4>
                    <ul className="m-0 p-0 address">
                      {/* <li>- <Link to="/custom_software_development">Custom Software Development</Link></li> */}
                      <li>- <Link to="/dedicated-team">Dedicated Development Team</Link></li>
                      <li>- <Link to="/it-staff-augmentation">IT Staff Augmentation</Link></li>
                      {/* <li>- <Link to="/ITConsultantAdvisoryService">IT Consulting and Digital Advisory</Link></li> */}
                      <li>- <Link to="/backend-development-services">Back End Development</Link></li>
                      <li>- <Link to="/FrontendDevelopmentServices">Front End Development</Link></li>
                      {/* <li>- <Link to="/SaasApplicationDevelopmentServices">SaaS Application Development</Link></li> */}
                      {/* <li>- <Link to="/BusinessIntelligenceServices">Business Intelligence</Link></li> */}
                      {/* <li>- <Link to="/DatabaseDevelopmentServices">Database Development</Link></li> */}
                      <li>- <Link to="/WebDevelopmentServices">Web Development</Link></li>
                    </ul>
              </div>
                {/* <div className="col-lg-12 col-xs-12 copyright">
                    <h4 className="mt-lg-0 mt-sm-4 font-weight-bold">Find us on:</h4>
                    <Link to="#"><i className="fa fa-facebook ml-4"></i></Link>
                    <Link to="#"><i className="fa fa-linkedin ml-2"></i></Link>
                    <Link to="#"><i className="fa fa-twitter ml-2"></i></Link>
                    <Link to="#"><i className="fa fa-instagram ml-2"></i></Link>
                    <p className="mt-3 ml-4">© 2022 All Rights Reserved SoftGetix Inc.</p>
                    <img src="images/Software-Development.png" alt="" width="130"/>
                    <img src="images/Web-Development.png" alt="" width="130"/>
                </div> */}
            </div><hr />
            <div className='row'>
              <div className="col-lg-12 col-xs-12 award">
                {/* <h4 className="mt-lg-0 mt-sm-4 font-weight-bold">Find us on:</h4>
                <Link to="#"><i className="fa fa-facebook ml-4"></i></Link>
                <Link to="#"><i className="fa fa-linkedin ml-2"></i></Link>
                <Link to="#"><i className="fa fa-twitter ml-2"></i></Link>
                <Link to="#"><i className="fa fa-instagram ml-2"></i></Link>
                <p className="mt-3 ml-4">© 2022 All Rights Reserved SoftGetix Inc.</p> */}
                <img src={award1} alt="SoftwareDevelopment" className='shield'/>
                <img src={award2} alt="TruefirmReviews" className='review'/>
                <img src={award3} alt="CrowedReviews" className='review'/>
                <img src={award4} alt="WebDevelopment" className='shield'/>
              </div>
            </div><hr />
            <div className='row'>
              {/* <div className='col-lg-12 col-xs-12 copyright'> */}
                <div className='col-lg-6 col-xs-12 copyright'>
                  <p className="">© 2022 All Rights Reserved SoftGetix Inc.</p> 
                </div> 
                <div className='col-lg-6 col-xs-12 copyright social-icons'>
                  <span className="">Find us on:</span>
                  <a target="_blank" href="https://www.facebook.com/softgetix"><i className="fa fa-facebook ml-4"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/company/softgetix-inc/"><i className="fa fa-linkedin ml-2"></i></a>
                  <a target="_blank" href="https://twitter.com/Binodofficial"><i className="fa fa-twitter ml-2"></i></a>
                  <a target="_blank" href="https://www.instagram.com/softgetix"><i className="fa fa-instagram ml-2"></i></a>
                </div>   
              {/* </div> */}
            </div>
          </div>
      </div>
    </section>
    <BackToTopButton />
    </>
  )
}

export default Footer
