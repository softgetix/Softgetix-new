import React from "react";
import Template from "../common/Template";
import ContactTest from "../home/ContactTest";

import fence from '../../images/fence.webp'
import calendar from '../../icons/calendar.webp'
import people from '../../icons/people.webp'
import productbought from '../../icons/productbought.webp'

function FenceForceCaseStudy() {
  return (
    <>
    <Template>
      <section id="staff_banner" className="case-study-single-page">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12">
                      <div className="staff_title">
                          <h4 className="text-danger font-weight-bold">Case Studies</h4>
                          <h1>FenceForce <b className="orange-text"></b><br/> </h1>
                      </div> 
                      <div className="staff_row_details">
                          <p>An ERP application for the Fence construction industry with features like customer management, work order scheduling and management, bid management, proposal management, RFIs, user management, location management with Google API, foreman scheduling, advanced search options, work items, site sheet, FDAs, purchase order, material management, quote management, generate various kind of reports and more. </p>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                      <div>
                          <img src={fence} width="100%" alt="fence" />
                      </div>
                  </div>
              </div>
          </div>
          </section>
          <section className="project-body overview">
          <div className="page-wr">
              <div className="overview-table-wr">
                  <div className="overview-table-1row">
                      <h2 className="heading-2">Overview</h2>
                  </div>
                  <div className="table-row">
                      <div id="w-node-_119e925f-ea03-fc81-e594-fc57494e5104-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">Client</p>
                      </div>
                      <div id="w-node-c44fe9d7-5d9e-1807-abce-f6a80beca846-4261fc96" className="table-row-inner last">
                      <p className="paragraph">An American Fence construction management software as a service company. </p>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-_524cbf54-4d33-95be-cd01-1e496035afa1-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">scope of work</p>
                      </div>
                      <div id="w-node-_524cbf54-4d33-95be-cd01-1e496035afa4-4261fc96" className="table-row-inner last">
                      <ul role="list" className="list-bullets">
                          <li>
                              <p className="paragraph">Dedicated Team </p>
                          </li>
                          <li>
                              <p className="paragraph">Project Management    </p>
                          </li>
                          <li>
                              <p className="paragraph">Web App Development </p>
                          </li>
                          <li>
                              <p className="paragraph">	Custom Database Development </p> 
                          </li>
                          <li>
                              <p className="paragraph">	Product design  </p>

                          </li>
                          <li>
                              <p className="paragraph">	Software Testing & Quality Assurance (QA) </p>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-_4ad4f043-b976-dcdb-4f2b-461841773c86-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">TIMEframe</p>
                      </div>
                      <div id="w-node-_4ad4f043-b976-dcdb-4f2b-461841773c89-4261fc96" className="table-row-inner last">
                      <div className="timeframe-number">
                          <img src={calendar} width="53" height="47" alt="calendar" className="numbers-icon mod" />
                          <div className="text-med">34</div>
                          <p>months</p>
                      </div>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">Involvement</p>
                      </div>
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf3-4261fc96" className="table-row-inner last">
                        <div className="timeframe-number">
                            <img src={people} width="53" height="47" alt="people" className="numbers-icon mod" />
                            <div className="text-med">6</div>
                            <p>people</p>
                        </div>
                        <ul role="list" className="list-bullets">
                            <li><p className="paragraph">Developer - 3  </p></li>
                            <li> <p className="paragraph">UX/UI designer - 1 </p></li>
                            <li><p className="paragraph">	Project Manager - 1  </p></li>	
                            <li><p className="paragraph">	QA - 1  </p></li>
                        </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">challenge</p>
                      </div>
                      <div id="w-node-_5638bb5b-e21b-b64f-00e1-3dec5cae44f5-4261fc96" className="table-row-inner last xpadding">
                      <ul role="list" className="list-bullets">
                          <li>
                              <p className="paragraph">Architect a scalable and optimized multi tenant ERP solution. </p>
                          </li>
                          <li>
                              <p className="paragraph"> Handling frequent and heavy data flows. </p>
                          </li>
                          <li>
                              <p className="paragraph">Integration with multiple 3rd party services. </p>
                          </li>
                          <li>
                              <p className="paragraph"> UX accessibility design for the best user experience.  </p>
                          </li>
                          <li>
                              <p className="paragraph"> To ensure proper data storage and data security solutions.  </p>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">Approach</p>
                      </div>
                      <div id="w-node-_50011341-4e33-8111-babc-7e992a25db01-4261fc96" className="table-row-inner last xpadding">
                      <ul role="list" className="list-bullets">
                          <li>
                              <p className="paragraph">Introduced tailored SCRUM processes. </p>
                          </li>
                          <li>
                              <p className="paragraph"> We focused on the business vision and created a comprehensive brief for the project. </p>
                          </li>
                          <li>
                              <p className="paragraph"> Implemented modular architecture based on microservices. </p>
                          </li>
                          <li>
                              <p className="paragraph"> We created the ultimate list of user stories and features</p>
                          </li>
                          <li>
                              <p className="paragraph"> Applied Unit testing method</p>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner table-row-inner-last">
                      <p className="paragraph uppercase">Results</p>
                      </div>
                      <div id="w-node-_0945b844-163e-7cb0-5daf-de99d951a679-4261fc96" className="table-row-inner last xpadding table-row-inner-last">
                        <div className="timeframe-number">
                            <img src={productbought} width="53" height="47" alt="productbought" className="numbers-icon mod" />
                            <p>The Customer managed to launch their SaaS ERP application in time and regularly updated the product with new capabilities. Ensuring a seamless modern experience of FenceForce, the multi-tenant SaaS application efficiently coped with the growing customer base.</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </section>
      <ContactTest />
      </Template>
  </>
  )
}

export default FenceForceCaseStudy
