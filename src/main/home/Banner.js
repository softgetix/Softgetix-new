import React from "react";
import {Link} from 'react-router-dom'

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

function Banner() {
  return (
    <>
      <section className="banner">
         <div className="container">
            <div className="row">
               <div className="banner_image">
                  <div className="banner_text">
                     <div className="">
                        <h1 className="banner_title">We Help Visionary Start-ups, Scale-ups, and Global Brands Digitally Transform, Build New Products, And Scale Dev Teams.</h1>
                     </div>
                     <div className="banner_info mt-3">
                        <p>We take care of everything from concept development to business analysis, design and prototyping, development, quality assurance, deployment and post-project maintenance and support.</p>
                     </div>
                     <div className="banner_buttons mt-5">
                        <Link to="/get-free-quote" className="btn btn-banner_btn1 btn-lg " ><b>Build a Product</b></Link>
                        <Link to="/it-staff-augmentation-services" className="btn btn-banner_btn2 btn-lg "><b>Staff My Team</b></Link>
                        
                     </div>
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
      </section>
    </>
  );
}

export default Banner;
