import React from 'react';
import Template from '../common/Template';
import {Link} from 'react-router-dom'
import ContactTest from '../home/ContactTest';
import { Helmet } from 'react-helmet';

function FenceCRM() {
  return (
    <>
    <Helmet>
    <link rel="canonical" href={window.location.href} />
    </Helmet>
      <Template>
        <section id="fenceCRM">
            <div id="product-page">
                <div className="product-banner mt-4">
                <div className="container">
                    <div className="title text-center">
                        <img className="img-center img-src" src="fenceCRM_imgs/images/fence-crm-logo.png" alt=""/>
                        <h3 className="mt-5">
                            <img src="fenceCRM_imgs/images/fence-crm-logo.png" className="img-src" alt=""/> 
                            <span className="d-none">FenceERP</span> The All-In-One Fence Construction Management Software.
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-6 order-md-12 mt-5">
                            <img className="img-fluid img-src" src="fenceCRM_imgs/images/fence-crm-banner.png" alt=""/>
                        </div>
                        <div className="col-md-12 mt-5">
                            <h3>Your business needs software to manage your enterprise.</h3>
                            <p className="info">FenceForce allows you to automate, track, analyze, improve and engage with your workforce to maximize your business efficiency.</p>
                        </div>
                        <div className="col-sm-10 col-md-6 order-md-1 mt-5">
                            <div id="carouselExampleIndicators" className="carousel slide-fade" data-bs-ride="carousel" data-bs-pause="true">
                            <div className="carousel-indicators">
                                <div id="btn-one">
                                    Collaboration
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                                    <span></span>
                                    </button>
                                </div>
                                <div id="btn-two">
                                    CRM
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                                    <span></span>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <ul className="cr-list">
                                        <li><a>Leads, Deals, Contacts, Companies</a></li>
                                        <li><a>Quotes, Invoices</a></li>
                                        <li><a>Online payments</a></li>
                                        <li><a>Sales automation</a></li>
                                        <li><a>Rules and triggers</a></li>
                                        <li><a>Contact center</a></li>
                                        <li><a>Marketing</a></li>
                                        <li><a>Sales Intelligence</a></li>
                                    </ul>
                                </div>
                                <div className="carousel-item">
                                    <ul className="cr-list">
                                        <li><a>Chats & video calls</a></li>
                                        <li><a>Online meetings</a></li>
                                        <li><a>Feed</a></li>
                                        <li><a>Calender</a></li>
                                        <li><a>Online documents</a></li>
                                        <li><a>Drive</a></li>
                                        <li><a>Webmail</a></li>
                                        <li><a>Work Group</a></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <Link to="#" className="btn free_Quote_btn btn-lg mt-3"> <span> Talk To Sales </span> </Link>
                        </div>
                    </div>
                </div>
                </div>
                <div id="features" className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/business-management.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/business-management-hover.png" alt=""/>
                        <h3>Business Management</h3>
                        <p>As a business owner, you need realtime specifics on your business performance. The ability to determine business metrics such as at a glance profitability will help guide you to make critical decisions for your business.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/resource-tracking.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/resource-tracking-hover.png" alt=""/>
                        <h3>Resource Tracking</h3>
                        <p>Tracking elements of your enterprise; Employees, Vehicles, Tools and more provide you unparalleled realtime specifics on your business performance. Determine not only where a crew is located but also what they’re doing.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/advanced-reporting.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/advanced-reporting-hover.png" alt=""/>
                        <h3>Advanced Reporting</h3>
                        <p>Reports once meant loud clacking printers generating reams of paper. We don’t need to kill trees to have a comprehensive view on your Enterprise Resources!</p>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/business-management.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/business-management-hover.png" alt=""/>
                        <h3>Business Management</h3>
                        <p>As a business owner, you need realtime specifics on your business performance. The ability to determine business metrics such as at a glance profitability will help guide you to make critical decisions for your business.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/resource-tracking.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/resource-tracking-hover.png" alt=""/>
                        <h3>Resource Tracking</h3>
                        <p>Tracking elements of your enterprise; Employees, Vehicles, Tools and more provide you unparalleled realtime specifics on your business performance. Determine not only where a crew is located but also what they’re doing.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/advanced-reporting.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/advanced-reporting-hover.png" alt=""/>
                        <h3>Advanced Reporting</h3>
                        <p>Reports once meant loud clacking printers generating reams of paper. We don’t need to kill trees to have a comprehensive view on your Enterprise Resources!</p>
                    </div>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading">Lorem Ipsum Dolor sit Amet</h2>
                            <p className="heading">It is a long established fact that a reader will be distracted by the readable content </p>
                        </div>	
                    </div>
                </div>
                <div className="container text-center mt-5">
                <div className="row">
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="faq-content">
                    <div id="accordion" className="myaccordion faq-card">
                        <div className="faq-ilustrations">
                        <img className="mobile pattern" 
                            src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg" alt="">
                        </img>
                        <img className="mobile ilust" 
                            src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg" alt="">
                        </img>
                        </div>
                        <h1 className="text-center">FAQ</h1>

                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                How many team members can I invite?
                                
                                </button>
                            </h2>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What is the maximum file upload size?
                               
                                </button>
                            </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How do I reset my password?
                                
                                </button>
                            </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Can I cancel my subscription?
                                
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body">
                                <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFive">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Do you provide additional support?
                                
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div className="card-body">
                                <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </main>
                
                <br/><br/><br/>
            </div>
        </section>

        <ContactTest />
        
      </Template>
    </>
  )
}

export default FenceCRM
