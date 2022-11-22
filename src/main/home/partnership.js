import React from "react";
import {Link} from 'react-router-dom'
import fixedPrice from '../../icons/fixed-price.png'
import development from '../../icons/development.png'
import dedicatedTeam from '../../icons/dedicated-team.png'

function Partnership() {
  return (
    <>
      <section id="partnership-model">
         <div className="container mt-5 mb-5">
            <div className="row">
                  <div className="text-center pb-2">
                     <div className="col-md-12">
                        <h1 className="font-weight-bold text-center staff-heading">Partnership <b className="orange-text">Models</b></h1>
                     </div>
                     <div className="col-md-8 m-auto">
                        <div className="staff_steps_details text-center">
                           <p>The engagement model focuses on the budget of app development, needs, wants, and interests of the client along with ensuring the level of control, flexibility, and responsibility. At SoftGetix, we use three key outsourcing models: </p>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-12">
                     <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                           <div className="csd_project_values">
                              <div className="features_img">
                                 <img src={fixedPrice} alt="fixed-price" width=""/>
                              </div>
                              <div className="features_title mt-4">
                                 <h3>Fixed Price Project model</h3>
                                 <p className="mt-3 model-paragraph">The fixed price (also known as project-based) model is perfect for small and medium-scope projects, where requirements, specifications, and schedules can be clearly defined before the start of the project development.</p>
                                 <div className="index-model-buttons">
                                    <Link to="/GetFreeQuote" className="btn free_Quote_btn btn-sm" ><b>Build a Product</b></Link>
                                 </div>
                              </div>
                           </div>      
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12">
                           <div className="csd_project_values">
                              <div className="features_img">
                                 <img src={development} alt="development" width=""/>
                              </div>
                              <div className="features_title mt-4">
                                 <h3 className="mt-3">IT Staff Augmentation</h3>
                                 <p className="mt-3 model-paragraph">Our IT staffing services provide the technical acumen and cost-effective way to scale your internal development teams quickly on an on-demand basis (team up and down with ease) and complete projects on time.</p>
                                 <div className="index-model-buttons">
                                    <Link to="/staffing" className="btn free_Quote_btn btn-sm" ><b>Staff My Team</b></Link>
                                 </div>
                              </div>
                           </div>      
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12">
                           <div className="csd_project_values">
                              <div className="features_img">
                                 <img src={dedicatedTeam} alt="dedicated-team" width=""/>
                              </div>
                              <div className="features_title mt-4">
                                 <h3 className="mt-3">Dedicated Team model</h3>
                                 <p className="mt-3 model-paragraph">SoftGetix can build a dedicated development team from scratch. Share your requirements with us - tech stack, seniority level, and size - and we’ll assemble a team of pre-vetted professionals per your needs.</p>
                                 <div className="index-model-buttons">
                                    <Link to="/contact" className="btn free_Quote_btn btn-sm" ><b>Contact Us</b></Link>
                                 </div>
                              </div>
                           </div>      
                        </div>
                     </div>
                  </div>
            </div>  
         </div>    
      </section>
    </>
  );
}

export default Partnership;
