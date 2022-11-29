import React from 'react';
import Template from '../common/Template';
import ContactTest from '../home/ContactTest';

import aboutBannerImg from '../../images/about-imgs1.87a10132d9e80684b34c.4ca23d5a90d6a661bc88.webp'

import flight from '../../icons/flight.png'
import rating from '../../icons/rating.png'
import pencil from '../../icons/pencil-and-ruler.png'
import years from '../../icons/years.png'

import google from '../../company_logos/google_venture_logo.webp'
import index from '../../company_logos/Index_Ventures_Logo.webp'
import microsoft from '../../company_logos/ms-ventures.webp'
import novo from '../../company_logos/Novo-Ventures-logo.webp'
import qualcomm from '../../company_logos/Qualcomm-Logo.webp'
import salesforce from '../../company_logos/salesforce-vc.webp'
import trinity from '../../company_logos/TrinityLogo.webp'
import ycombinator from '../../company_logos/y-combinator_logo.webp'
import Pfizer from '../../company_logos/Pfizer-Venture.webp'
import cisco from '../../company_logos/Cisco-Investments.webp'
import johnson from '../../company_logos/johnson-innovation.webp'
import intel from '../../company_logos/Intel-Capital.webp'
import './about.css'
import { Helmet } from 'react-helmet';


function About() {
  return (
    <div>
      <Helmet>
        <title>About - Software Design and Development Company - Softgetix
</title>
<link rel="canonical" href={window.location.href} />
      </Helmet>
      <Template>
        <section id="about_us">
          <div className="container">
            <div className="row">
            <div className="text-center pb-2">
                <div className="col-md-12">
                  <h1 className="font-weight-bold text-center staff-heading">Excellent<b className="orange-text"> Products</b> are built by Excellent <b className="orange-text">Teams</b></h1>
                </div>
                {/* <div className="col-md-8 m-auto">
                  <div className="staff_steps_details text-center">
                    <p>We can assist you in accomplishing your business goals in accordance with given schedule, budget, and expectations thanks to our technical expertise and advanced IT system developed by senior experts.</p>
                  </div>
                </div> */}
              </div>
              <div className="col-md-12 text-right banner">
                <img  src={aboutBannerImg} width="100%" alt="about-imgs"/>
              </div>
        
            </div>
          </div>
        </section>   

        <div className="VisionMissionScreen">
          <div className="vision_mission_container_fullwd__stats-con">
              <div className="OurVisionMissionSection">
                <div className="section_our_vision">
                    <div className="vision_wrapper">
                      <div className="our_vision_heading">
                          <div className="our_vision_heading_main">Our Vision</div>
                      </div>
                      <div className="our_vision_para">We aspire to set the benchmark for excellence and trust , by delivering quality IT services and high business value to our clients. Nickelfox aims to be an Organization of choice for talent and clients alike.</div>
                    </div>
                </div>
                <div className="section_our_mission">
                    <div className="mission_wrapper">
                      <div className="our_mission_heading">
                          <div className="our_mission_heading_main">Our Mission</div>
                      </div>
                      <div className="our_mission_wrapper">
                          <div className="our_mission_para">To partner with clients to fuel their growth story. We are committed to ensuring customer success and the Delight in our service offerings.</div>
                      </div>
                    </div>
                </div>
                <div className="section_our_aspiration">
                    <div className="aspiration_wrapper">
                      <div className="our_aspiration_heading">
                          <div className="our_aspiration_heading_main">Our Aspiration</div>
                      </div>
                      <div className="our_aspiration_para">We have high aspirations to become the most trusted name in the IT realm, enabling clients and partners to maximize their business success through our technical excellence, strong action orientation and professional integrity.</div>
                    </div>
                </div>
              </div>
              <div className="OurValueSection">
                <div className="section_our_values">
                    <div className="values_wrapper">
                      <div className="our_values_heading">
                          <div className="our_values_heading_main">Our Values</div>
                          <div className="our_values_heading_highlight">Our Values</div>
                      </div>
                      <div className="our_values_box_wrapper">
                          <div className="box_side_a_wrapper">
                            <div className="box_a_col1">
                                <div className="value_box_heading">Customer Focused</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We succeed when we make our clients successful.</div>
                                <div className="border_bt"></div>
                            </div>
                            <div className="border_sd"></div>
                            <div className="box_a_col2">
                                <div className="value_box_heading">Integrity</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We take full responsibility for our actions and always deliver on our promise.</div>
                                <div className="border_bt int"></div>
                            </div>
                          </div>
                          <div className="box_side_b_wrapper">
                            <div className="box_b_col1">
                                <div className="value_box_heading res">Global Excellence and Innovation</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We make excellence and quality a part of day-to-day work processes and seek continuous improvement in all that we do.</div>
                            </div>
                            <div className="border_sd"></div>
                            <div className="box_b_col2">
                                <div className="value_box_heading">Teamwork</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We believe in mutual trust, sharing knowledge and always support our team members.</div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-weight-bold text-center staff-heading">We are your <b className="orange-text">development stack</b></h1>
            </div>  
            <div className="col-md-8 m-auto">
              <div className="staff_row_details text-center">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
        <section className="sc-1tf4wzd-0 lhYokG">
          <div className="container">
              <div className="stack-listing-block">
                <div className="single-stack-block">
                    <div className="title">Accelerate <br/>Digital Innovation</div>
                    <div className="stack-listing">
                      <div className="single-stack">Digital Transformation</div>
                      <div className="single-stack">Custom Software</div>
                      <div className="single-stack">Business Applications</div>
                      <div className="single-stack">Software Products</div>
                      <div className="single-stack">API/System Integration</div>
                      <div className="single-stack">Mobile Apps</div>
                      <div className="single-stack">SaaS</div>
                      <div className="single-stack">Consumer Apps</div>
                    </div>
                    <div className="separator-row">
                      <div className="divider"></div>
                      <div className="divider"></div>
                      <div className="divider"></div>
                    </div>
                </div>
                <div className="single-stack-block">
                    <div className="title">Extend <br/>Tech Capacity</div>
                    <div className="stack-listing">
                      <div className="single-stack">Proven Processes </div>
                      <div className="single-stack">Remote Team Culture</div>
                      <div className="single-stack">QA &amp; Testing</div>
                      <div className="single-stack">Mentors and Tech Leads</div>
                      <div className="single-stack">Code Quality</div>
                      <div className="single-stack">Effortless Hiring at Scale</div>
                      <div className="single-stack">Guaranteed Results</div>
                      <div className="single-stack">Security</div>
                      <div className="single-stack">Tools and Cloud Servicing</div>
                    </div>
                    <div className="separator-row">
                      <div className="divider"></div>
                      <div className="divider"></div>
                      <div className="divider"></div>
                    </div>
                </div>
                <div className="single-stack-block">
                    <div className="title">Your <br/>Business Goals</div>
                    <div className="stack-listing">
                      <div className="single-stack">Your Tech Team</div>
                      <div className="single-stack">Digital Transformation Plans</div>
                      <div className="single-stack">Product Development</div>
                      <div className="single-stack">System Integration</div>
                      <div className="single-stack">Modernization</div>
                    </div>
                    <div className="separator-row">
                      <div className="divider"></div>
                      <div className="divider"></div>
                      <div className="divider"></div>
                    </div>
                </div>
                <div className="single-stack-block">
                    <div className="title">Your <br/>Organization</div>
                    <div className="stack-listing">
                      <div className="single-stack">Sales &amp; Marketing</div>
                      <div className="single-stack">Operations</div>
                      <div className="single-stack">Human Resource</div>
                      <div className="single-stack">Finance</div>
                      <div className="single-stack">Production</div>
                      <div className="single-stack">Research and Development</div>
                    </div>
                    <div className="separator-row">
                      <div className="divider"></div>
                      <div className="divider"></div>
                      <div className="divider"></div>
                    </div>
                </div>
              </div>
          </div>
        </section> */}

        <div className="container" id='about_us_counting'>
          <div className="row">
              <div className="col-md-10 m-auto">
                <h2 className="font-weight-bold text-center staff-heading pt-5">Empowering Ideas with <b className="orange-text">Technology</b></h2>
              </div>
              <div className="col-md-8 m-auto">
                <div className="staff_row_details text-center mt-2">
                    <p>We provide our clients with a full range of software services. These include dedicated teams, product development, R&D and technology consulting. With a proven track record, mature engineering and design teams, a fast growing roster of delighted clients, and veteran management, SoftGetix is a solutions partner of choice.</p>
                </div>
              </div>
          </div>
          <div className="container opportunities-counting_container">
              <div className="row text-center">
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">24+</h2>
                      <p className="count-text "><img src={flight} width="25px" alt="flight"/>&nbsp; COUNTRIES SERVED </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">530+</h2>
                      <p className="count-text "><img src={rating} width="25px" alt="rating"/> HAPPY CLIENTS </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">1280+</h2>
                      <p className="count-text "><img src={pencil} width="25px" alt="pencil"/>&nbsp; PROJECTS COMPLETE </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">12+</h2>
                      <p className="count-text "><img src={years} width="25px" alt="years"/>&nbsp; YEARS </p>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="about_companies">
                <div className="banner_text">
                  <div className="mt-4 banner_sm_title">
                      <p>OUR DEVELOPED APPLICATIONS HAVE BEEN FUNDED BY:</p>
                  </div>
                  <div className="row banner_company">
                        <div className="col">
                           <img src={google} alt="google_venture_logo" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={index} alt="Index_Ventures" width="120px" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={microsoft} width="120px" alt="ms-ventures" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={novo} width="120px" alt="Novo-Ventures" className="img-shadow"/>
                        </div>
                        <div className="col"> 
                           <img src={qualcomm} width="120px" alt="Qualcomm" className="img-shadow"/>
                        </div>
                        <div className="col"> 
                           <img src={salesforce} width="120px" alt="salesforce" className="img-shadow"/>
                        </div>
                        <div className="col"> 
                           <img src={trinity} width="120px" alt="Trinity" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={ycombinator} width="120px" alt="y-combinator" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={Pfizer} width="120px" alt="Pfizer" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={cisco} width="120px" alt="Cisco-Investments" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={johnson} width="120px" alt="johnson-innovation" className="img-shadow"/>
                        </div>
                        <div className="col">
                           <img src={intel} width="120px" alt="Intel-Capital" className="img-shadow"/>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </div>

        <ContactTest />
      </Template>
    </div>
  )
}

export default About
