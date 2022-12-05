import React from 'react'
import Template from '../common/Template';
import ContactTest from '../home/ContactTest';
import {Link} from 'react-router-dom'
import CaseStudy from '../home/CaseStudy';
import { Helmet } from 'react-helmet';

function FrontendDevelopmentService() { 
  return (
    <>
    <Helmet>
    <title>Front End Development Services - Softgetix
</title>
    <link rel="canonical" href={window.location.href} />

    </Helmet>
    <Template>
        <section id="staff_banner" className="custom_software_development_section1">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12 dedicated_team_section5">
                    <div className="staff_title">
                        <h1><b className="orange-text">Front End </b><br/>Development Company</h1>
                    </div>
                    <div className="staff_row_details ">
                        <p>We are a front end development company that offers outstanding visual experiences across platforms. Our development team produces interactive apps in which the user interface and functionality are flawlessly integrated. Softgetix inc. can help you engage your clients as well as provide powerful user experiences.</p>
                    </div>
                    <div className="banner_buttons">
                        <a href="/hiring/team" className="btn free_Quote_btn btn-lg mt-3"><b>Find Your Perfect Developers</b></a>
                    </div>
                </div>
                {/* <div className="col-lg-6 col-md-12 col-xs-12 dedicated_team_section1">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="csd-rigt-detail-box"><b>Web Applications</b>
                            <p>Use our backend services for web development to ensure that your website runs smoothly and efficiently. Our Professional web developers will offer better performance management with enhanced stability, whether it's a complex system, website, or Smart infrastructures.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="csd-rigt-detail-box"><b>Custom Development</b>
                            <p>Seeking a Back-end company to help you put your business idea into practice? Please feel free to contact us if you require a customized back-end infrastructure. Upgrade, improve, or migrate your Back-end quickly and affordably.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="csd-rigt-detail-box"><b>API Development and Integration</b>
                            <p>We may create a bespoke API to improve your current software or integrate it into third-party services. So that you can easily integrate your UI/UX with other apps, devices and corporate systems.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </section>

        <section className="custom_software_development_section2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-weight-bold text-center staff-heading">Front End Development <b className="orange-text">Services</b> We Provide</h2>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values_benefits">
                        <h4 className="benefits-item-title title-sub">Customize Web Apps</h4>
                        <p className="text">We provide front end development services to assist you design a customized solution for your business plan. Our professional development team examines your project's specific needs and offers a functioning and well-thought-out front-end.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values_benefits">
                        <h4 className="benefits-item-title title-sub">User interface Design</h4>
                        <p className="text">Our front end development company can construct UI/UX website designs from scratch and work with design mock-ups. We use the latest technologies to create user-friendly and efficient interfaces.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values_benefits">
                        <h4 className="benefits-item-title title-sub">Legacy application migration</h4>
                        <p className="text">Replace outdated and inefficient user interfaces with advanced solutions that look great on every screen. Our front-end developers will help you migrate to new front-end technologies.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values_benefits">
                        <h4 className="benefits-item-title title-sub">Maintenance and Support</h4>
                        <p className="text">Deploy a professional team of designers to maintain your interfaces. For increasing user engagement, we maintain as well as provide high-quality support for your applications.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="custom_software_development_section5">
            <div className="container pb-3">
                <div className="row">
                <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading"><b className="orange-text">Benefits </b>Front End Development Services</h2>
                </div>
                {/* <div className="col-md-8 m-auto">
                    <div className="staff_steps_details text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div> */}
                <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">Fast Development And User-Driven Outcomes</h4>
                        <p className="text">Using appropriate current frameworks would speed up element development. Also, the path to success is shorter. The front-end space may be ready for use in a short amount of time.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">Apps and features that react quickly</h4>
                        <p className="text">Designers may use the latest frameworks and technologies to design fast-responding features and architectures, allowing the app to respond, react, and function efficiently.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">Effective Features and Layouts</h4>
                        <p className="text">Because of the default formats, frameworks used by front-end developers would have a benefit in developing efficient websites. Eventually, the whole result will show prominently on the web because of its outstanding functions.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">Programming in Real Time</h4>
                        <p className="text">The designer may observe the changes in the browser without concerns about losing the application's functionality or having to reload the web pages.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>

        <section className="custom_software_development_section2">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading">Our Front End Development<b className="orange-text"> Process</b></h2>
                </div>
                {/* <div className="col-md-8 m-auto">
                    <div className="staff_steps_details text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div> */}
                <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub"><span>1</span>Requirement Gathering</h4>
                        <p className="text">The concentration will be on documentation initially, in order to achieve transparency and better understanding on both sides and also get everyone on the same page.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub"><span>2</span>Designs, Wireframes, & Mockups</h4>
                        <p className="text">We assist our clients in designing interactive and fascinating UI designs which explain the user-friendly flow of a web/app/platform.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub"><span>3</span>Prototype Demo</h4>
                        <p className="text">After finalizing and receiving design approval, we freeze the scope and assist our client with a demo or concept to get a sense of the software platform's and feel.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub"><span>4</span>Changes And Confirmation</h4>
                        <p className="text">Clients are free to add and specify additional changes needed in the existing platform according to their specific requirements. We'll move forward with the customer's consent.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub"><span>5</span>Development</h4>
                        <p className="text">With client consent, we initiate development with the technology ideally suited for you and provide outcomes within the timeline promised by our technical team.</p>
                    </div>
                    <div className=" col-md-6 col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub"><span>6</span>Support And Maintenance</h4>
                        <p className="text">We offer free support and assistance in accordance with the conditions of our agreement. We also provide either monthly or annual subscriptions based on your needs.</p>
                    </div>
                </div>
                <div className="banner_buttons text-center mt-3">
                    <a href="/hiring/team" className="btn free_Quote_btn btn-lg mt-3"><b>Find Your Perfect Developers</b></a>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="custom_software_development_section2 dedicated_team_section5_section">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                        <h2 className="font-weight-bold text-center staff-heading"><b className="orange-text"> FAQ </b></h2>
                    </div>
                    {/* <div className="col-md-8 m-auto">
                        <div className="staff_steps_details text-center">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div> */}
                <div className="col-lg-6 col-md-12 col-xs-12 dedicated_team_section5">
                    <h3 className="font-weight-bold">What is the best scripting language for front-end development?</h3>
                    <p>Each project requires its own combination of front-end technology. As a result, no universal front-end languages exist. Vue.js, and jQuery. Regardless of the technology, our team of software engineers will examine your project requirements and pick the appropriate collection of languages and frameworks to create visually appealing solutions.</p>
                    {/* <ul>
                        <li>What is Lorem Ipsum</li>
                        <li>Where does it come from</li>
                        <li>Why do we use it</li>
                        <li>Where can I get some</li>
                        <li>What Is Lorem Ipsum Text and What Does It Mean</li>
                    </ul> */}
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12 dedicated_team_section5">
                    <h3 className="font-weight-bold">What is the function of the front end?</h3>
                    <p>Front-end development is essential for creating simple and business-focused user experiences for online apps or websites. It is in charge of communicating corporate branding and making a good first impression.</p>
                    {/* <ul>
                        <li>What is Lorem Ipsum</li>
                        <li>Where does it come from</li>
                        <li>Why do we use it</li>
                        <li>Where can I get some</li>
                        <li>What Is Lorem Ipsum Text and What Does It Mean</li>
                    </ul> */}
                </div>
                </div>
            </div>
        </section>

        <CaseStudy />

        <ContactTest /> 
    </Template>
    </>
  )
}

export default FrontendDevelopmentService
