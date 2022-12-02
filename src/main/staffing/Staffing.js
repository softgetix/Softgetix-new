import React from 'react'
import {Link} from 'react-router-dom'
import Template from '../common/Template'
import ContactTest from '../home/ContactTest'
import PricingPlan from '../PricingPlan'

import staffBannerImg from '../../images/staff_banner_img.png'

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

import staffStepsImg from '../../images/staff_steps_img.webp'

import php from '../../icons/php.png' 
import laravel from '../../icons/laravel.png'
import codeigniter from '../../icons/codeigniter.png'
import vueJs from '../../icons/vueJs.png'
import wordpress from '../../icons/wordpress.png'
import react from '../../icons/react.png'
import reactNative from '../../icons/reactNative.png'
import manualQa from '../../icons/manualQA.png'
import html from '../../icons/html5.png'
import nodeJs from '../../icons/nodejs.png'
import bootstrap from '../../icons/bootstrap.png'
import tailwindCss from '../../icons/tailwindCss.png'
import mysql from '../../icons/mysql.png'
import mongoDB from '../../icons/mongoDB.png'
import postgreSql from '../../icons/postgreSQL.png'
import graphicDesigner from '../../icons/graphicDesigner.png'
import './staffing.css';
import  Helmet  from 'react-helmet';
import Faq from "../common/Faq";

function Staffing() {

    const resourceSection = React.useRef();
    const ContactSection = React.useRef("");

  
    function smoothScroll(target) {
        const { top } = target.getBoundingClientRect()
        console.log(top);
        window.scrollTo({
        top: top + window.pageYOffset,
        behavior: "smooth"
        });
    }
    const Faqs = [
        {
          que : 'How many team members can I invite?',
          ans : 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
        },
        {
          que : 'What is the maximum file upload size?',
          ans : 'No more than 2GB. All files in your account must fit your allotted storage space.'
        },
        {
          que : 'How do I reset my password?',
          ans : 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
        },
        {
          que : 'Can I cancel my subscription?',
          ans : 'Yes! Send us a message and we’ll process your request no questions asked.'
        },
        {
          que : 'Do you provide additional support?',
          ans : 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
        }
      ];

  return (
    <>
    <Helmet>
    <title>IT Staff Augmentation Services Firm | Top IT Staff Augmentation</title>
    <meta name="description" content="SoftGetix is a leading IT Staff Augmentation company. Use our IT augmentation services to scale your existing team and fill necessary skill gaps."></meta>
    <meta name="keyword" content="IT staff augmentation,IT staff augmentation services,IT staff augmentation company"></meta>
    <link rel="canonical" href={window.location.href} />
    </Helmet>
    <Template>
        <section id="staff_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="staff_title">
                            <h1>IT Staff <b className="orange-text">Augmentation </b>Services<br/></h1>
                        </div> 
                        <div className="staff_row_details">
                            <p>Are You Looking to Add Expert IT Resources to Help Deliver Your Projects On Time and Within Budget?</p>
                            <p>Leverage our Flexible (Easily Up-Scale and Down-Scale your team size on demand) staff augmentation services to access certified IT professionals, including skilled software developers, Web Designer, Front-end(UI/UX) Developer, Business Analysts, Scrum Masters, and QA specialists.</p>
                        </div>
                        <div className="banner_buttons">
                        <button onClick={() => smoothScroll(resourceSection.current)} className="btn free_Quote_btn btn-lg mt-3"><b>See Available Resources</b></button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div>
                            <img src={staffBannerImg} alt="staff_banner_img" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="staff-cmp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 font-weight-bold text-center">
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
        </section>

        <section id="staff_steps">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="font-weight-bold text-center staff-heading">Our IT Staff <b className="orange-text">Augmentation </b>Process</h2>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="staff_row_details text-center">
                        <p>A bench is always available for our clients to pick from and meet urgent deadlines. Here’s the process you’ll experience when signing a staff augmentation contract with SoftGetix:</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                        <img src={staffStepsImg} alt="staff_steps_img" width="100%"/>
                        </div>
                    </div>
                    <div className="banner_buttons m-auto">
                        <button id='staff-process-btn' onClick={() => smoothScroll(ContactSection.current)} className="btn free_Quote_btn btn-lg mt-3"><b>Discuss Your Staffing Need!</b></button>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="staff_steps" ref={resourceSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="font-weight-bold text-center staff-heading">The <b className="orange-text">Technology Stack</b> We Work With </h2>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="sstaff_row_details text-center">
                        <p>Every project requires a careful approach and a carefully selected technology stack to ensure that its goals are met. Check out what technologies our engineers and developers work with.</p>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={php} alt="php" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">PHP <br />Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/PHP" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1 technology-box-row1-sm">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={laravel} alt="laravel" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">Laravel Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/Laravel" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1 technology-box-row1-sm">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={codeigniter} alt="codeigniter" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">Codeigniter Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/Codeigniter" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={vueJs} alt="vueJs"  width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">Vue.js Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/VueJs" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={wordpress} alt="wordpress" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">WordPress Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/WordPress" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={react} alt="react" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">React Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/React" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={reactNative} alt="reactNative" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">React Native Developer</h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/ReactNative" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={manualQa} alt="manualQA" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center">Manual <br /> QA </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/ManualQA" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={html} alt="html5" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> HTML5 </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/HTML5" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={nodeJs} alt="nodejs" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> Node.js Developer </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/NodeJs" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={bootstrap} alt="bootstrap" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> Bootstrap </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/Bootstrap" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={tailwindCss} alt="tailwindCss" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> Tailwind <br /> CSS </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/Tailwind" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={mysql} alt="mysql" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> MySQL Developer </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/MySQL" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={mongoDB} alt="mongoDB" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> MongoDB Developer </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/MongoDB" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={postgreSql} alt="postgreSQL" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> PostgreSQL Developer </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/PostgreSQL" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src={graphicDesigner} alt="graphicDesigner" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h3 className="text-center"> Graphic Designer </h3>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="/hiring/GraphicDesigner" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    
    {/* <section id="staff_steps">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="font-weight-bold text-center staff-heading"><b className="orange-text">What </b>is Lorem Ipsum?</h1>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="staff_row_details text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src="icons/product-management.png" alt="" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h2 className="text-center">Product Manager</h2>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="#" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1 technology-box-row1-sm">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src="icons/product-development.png" alt="" width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h2 className="text-center">Product Developer</h2>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="#" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1 technology-box-row1-sm">
                            <div className="technology-box">
                                <div className="technology-box-body">
                                    <div className="icon_div"> 
                                    <div className="icon">
                                        <img src="icons/ux-design.png" alt='' width="100%"/>
                                    </div>   
                                    </div>
                                    <div className="technology-box-heading">
                                    <h2 className="text-center">UX<br/> Designer</h2>
                                    </div>
                                    <div className="banner_buttons text-center">
                                    <Link to="#" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <section className="custom_software_development_section2" id='staff_benefits'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-weight-bold text-center staff-heading">Benefits of <b className="orange-text">IT Staff Augmentation</b></h2>
                    </div>
                    {/* <div className="col-md-8 m-auto">
                        <div className="staff_steps_details text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div> */}
                    <div className="col-md-12">
                        <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    {/* <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div> */}
                                    <div className="features_title">
                                    <h3>Easily Scale-up and scale- down</h3>
                                    <p className="mt-3">With staff augmentation, you can add resources to your account for a specific duration to speed up your workflow and then scale down as per the demand.</p>
                                    </div>
                            </div>      
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    {/* <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div> */}
                                    <div className="features_title">
                                    <h3>Cost Effective</h3>
                                    <p className="mt-3">Staff augmentation helps companies save money by hiring temporary employees instead of full-time staff. They do not have to invest in recruitment, employee benefits, tax and more. Training new employees take much less time compared to training existing ones.</p>
                                    </div>
                            </div>      
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    {/* <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div> */}
                                    <div className="features_title">
                                    <h3>No Recruitment Hassles</h3>
                                    <p className="mt-3">Our IT Augmentation Services Save Your Company The Hassle Of Searching For And Recruiting Vetted Development Talent. We Take Over The Screening Process And Send You Approved CVs.</p>
                                    </div>
                            </div>      
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    {/* <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div> */}
                                    <div className="features_title">
                                    <h3>Lower operational costs</h3>
                                    <p className="mt-3">Reduce your company's spending by eliminating the costs associated with office space, equipment, taxes, and overhead. Pay for what drives your company's most valuable results.</p>
                                    </div>
                            </div>      
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    {/* <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div> */}
                                    <div className="features_title">
                                    <h3>Legal Headache Gone</h3>
                                    <p className="mt-3">Within our IT augmentation services, we remain the original employers of your hires. We take care of all legal responsibilities and documentation.</p>
                                    </div>
                            </div>      
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    {/* <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div> */}
                                    <div className="features_title">
                                    <h3>Access to Vetted and Certified Talent</h3>
                                    <p className="mt-3">SoftGetix offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.</p>
                                    </div>
                            </div>      
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div>
                                    <div className="features_title">
                                    <h3>What is Lorem Ipsum</h3>
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                            </div>      
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="csd_project_values">
                                    <div className="features_img">
                                    <img src="icons/android.png" width="15%" />
                                    </div>
                                    <div className="features_title">
                                    <h3>What is Lorem Ipsum</h3>
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                            </div>      
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section id="staff_features">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="font-weight-bold text-center staff-heading">What is Lorem <b className="orange-text">Ipsum</b></h1>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="staff_steps_details text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="features_img">
                                <img src="icons/punctuality.png" alt="" width="30%"/>
                            </div>
                            <div className="features_title">
                                <h3>Scalability</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="features_img">
                                <img src="icons/efficiency.png" alt="" width="30%"/>
                            </div>
                            <div className="features_title">
                                <h3>Performance & Efficiency</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="features_img">
                                <img src="icons/diploma.png" alt="" width="30%"/>
                            </div>
                            <div className="features_title">
                                <h3>Curated Talent</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="features_img">
                                <img src="icons/successful.png" alt="" width="30%"/>
                            </div>
                            <div className="features_title">
                                <h3>Customer Success</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="features_img">
                                <img src="icons/bee-hive.png" alt="" width="30%"/>
                            </div>
                            <div className="features_title">
                                <h3>The Softgetix Hive</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                            <div className="features_img">
                                <img src="icons/growth.png" alt="" width="30%"/>
                            </div>
                            <div className="features_title">
                                <h3>Competitive Rates</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <PricingPlan />
        <Faq faqs={Faqs} />
        <section className="contact_us" id="conthub" ref={ContactSection}>
            <ContactTest />
        </section>
      
    </Template>
    </>
  )
}

export default Staffing
