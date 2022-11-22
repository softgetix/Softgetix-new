import React from "react";
import {Link} from 'react-router-dom'
import salesdaas from '../../images/salesdaas-io.webp'
import fence from '../../images/fence.webp'
import easyhire from '../../images/easyhire-io.webp'

function CaseStudy() {
  return (
    <>
      <section className="all_services" id="case-study">
        <div className="container">
        <hr />
          <div className="row align-items-center mt-5 ">
            <div className="col-md-6 col-xl-6 order-md-2">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>SalesDaas.ai </b>
              </h2>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Category : </b>&nbsp; Sales Data Analytics Tool 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Distribution Model : </b>&nbsp; SaaS 
                </p>
              </div>
              <p className="text-secondary">
              Sales Data as a Service (DaaS) enables companies to outsource their data collection and analysis to a third-party cloud-based tool to gather sales data and gauge sales performance. It is used to identify, optimize, and forecast sales. It uses different metrics and KPIs to plan an efficient sales model that generates higher revenue for the business. Sales DaaS gives companies the ability to gain access to the data and sales insights they need within a matter of a few simple clicks. <Link to="/SalesDaasCaseStudy" style={{"color":"#ff6c6b"}}>.....more</Link></p>  

              {/* <p className="text-secondary">Sales DaaS tools enable companies to take a no-code approach to data collection means companies no longer need to spend massive amounts of time on their data collection operations and no longer need in-house database management infrastructure and dedicated database engineers & DevOps teams. 

              </p> */}
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Partnership Models : </b>&nbsp; Dedicated Team 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>Python</span> <span>Big Data</span> <span>NoSQL</span> <span>SQL</span> <span>AWS</span> <span>Web Services</span> <span> Cloud Computing</span> <span> Data Warehousing</span> <span> Artificial Intelligence</span> <span>Data Management</span> <span>Algorithm</span><span>Data Structure</span>
                </p>
              </div>
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link to="/SalesDaasCaseStudy" className="btn free_Quote_btn case-study-btn btn-lg">
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 text-center">
              <img src={salesdaas} alt="salesdaas-io" className="service_img" width="90%" />
            </div>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col-md-6 col-xl-6">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>FenceForce</b>
              </h2>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Category:</b>&nbsp;  SaaS ERP
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Sector : </b>&nbsp; Fence Construction 
                </p>
              </div>
              <p className="text-secondary">
              An ERP application for the Fence construction industry with features like customer management, work order scheduling and management, bid management, proposal management, RFIs, user management, location management with Google API, foreman scheduling, advanced search options, work items, site sheet, FDAs, purchase order, material management, quote management, generate various kind of reports and more. 
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Partnership Models : </b>&nbsp; Dedicated Team 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>Laravel</span> <span> MySQL</span> <span>AWS</span> <span>JavaScript</span> <span>Twitter Bootstrap</span>
                </p>
              </div>
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link to="/FenceForceCaseStudy" className="btn free_Quote_btn case-study-btn btn-lg">
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img
                src={fence} alt="fence" className="service_img" width="90%" />
            </div>
          </div>
          <div className="row align-items-center mt-4 ">
            <div className="col-md-6 col-xl-6 order-md-2">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>EasyHire.io </b>
              </h2>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Category:</b>&nbsp;  HRM Tool 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Distribution model: </b>&nbsp;  Multitenant Membership   
                </p>
              </div>
              <p className="text-secondary">
              EasyHire is the leading HR software solution to find, screen, interview, background check, hire, and manage employees & contractors. Here you can post and manage job listings across the leading job boards, including Indeed, LinkedIn and Google. Also, embed a careers page and job form directly on your website. Receive and store job applications in one platform. Connect your calendar account to start scheduling interviews. Run a background check and more. 
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Partnership Models : </b>&nbsp; Team Augmentation 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>Laravel</span> <span> MySQL</span> <span>AWS</span> <span>PHP</span> <span>Twitter Bootstrap</span> <span>Vue.js </span><span> Veutify</span>
                </p>
              </div>
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link to="/EasyHireCaseStudy" className="btn free_Quote_btn case-study-btn btn-lg">
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img
                src={easyhire} alt="easyhire-io" className="service_img" width="90%" />
            </div>
          </div>
          {/* <div className="row text-center">
            <div className="col-xl-12 mt-5">
              <Link to="/CaseStudies" className="btn free_Quote_btn btn-lg">
                View All Case Studies
              </Link>
            </div>
          </div> hide it for temporary*/} 
          <hr />
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
