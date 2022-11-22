import React from "react";
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from './main/home/Index';
import Career from './main/career/Index';
import JobDetails from './main/career/JobDetails';
import AboutUs from './main/about/About';
import Contact from './main/contact/Contact';
import ContactTest from './main/home/ContactTest';
import Services from "./main/services/Services";
import GetFreeQuote from "./main/common_components/GetFreeQuote";
import Staffing from "./main/staffing/Staffing";   
import ConfidentialityPolicy from "./main/ConfidentialityPolicy";
import RefundPolicy from './main/RefundPolicy';
import CaseStudies from './main/CaseStudies';
import CustomSoftwareDevelopment from "./main/services/CustomSoftwareDevelopment";
import ITConsultantAdvisoryServices from "./main/services/ITConsultantAdvisoryServices";
import ITStaffAugmentation from "./main/services/ITStaffAugmentation";
import BackendDevelopmentService from "./main/services/BackendDevelopmentServices";
import FrontendDevelopmentService from "./main/services/FrontendDevelopmentServices";
import SaasApplicationDevelopmentService from "./main/services/SaasApplicationDevelopmentServices";
import BusinessIntelligenceService from "./main/services/BusinessIntelligenceServices";
import DatabaseDevelopmentService from "./main/services/DatabaseDevelopmentServices";
import WebDevelopmentService from "./main/services/WebDevelopmentServices";
import FenceCRM from "./main/product/FenceCRM";
import DedicatedTeam from "./main/services/DedicatedTeam";
import ScrollToTop from "./ScrollToTop";
import Hiring from "./main/Hiring";
import SalesDaasCaseStudy from "./main/CaseStudy/SalesDaasCaseStudy";
import FenceForceCaseStudy from "./main/CaseStudy/FenceForceCaseStudy";
import EasyHireCaseStudy from "./main/CaseStudy/EasyHireCaseStudy"; 
import PricingPlan from "./main/PricingPlan";
import './style.css';
import './custom.css'; 

import './BackToTopButton.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/career' exact element={<Career />} />
          <Route path='/jobdetails/:id' exact element={<JobDetails />} />
          <Route path='/about' exact element={<AboutUs />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/ContactTest' exact element={<ContactTest />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/custom_software_development' exact element={<CustomSoftwareDevelopment />} />
          <Route path='/dedicated_team' exact element={<DedicatedTeam />} />
          <Route path='/ITConsultantAdvisoryService' exact element={<ITConsultantAdvisoryServices />} />
          <Route path='/ITStaffAugmentation' exact element={<ITStaffAugmentation />} />
          <Route path='/BackendDevelopmentServices' exact element={<BackendDevelopmentService />} />
          <Route path='/FrontendDevelopmentServices' exact element={<FrontendDevelopmentService />} />
          <Route path='/SaasApplicationDevelopmentServices' exact element={<SaasApplicationDevelopmentService />} />
          <Route path='/BusinessIntelligenceServices' exact element={<BusinessIntelligenceService />} />
          <Route path='/DatabaseDevelopmentServices' exact element={<DatabaseDevelopmentService />} />
          <Route path='/WebDevelopmentServices' exact element={<WebDevelopmentService />} />
          <Route path='/getFreeQuote' exact element={<GetFreeQuote />} />
          <Route path='/staffing' exact element={<Staffing />} />
          <Route path='/hiring/:technology' exact element={<Hiring />} />
          <Route path='/confidentiality_policy' exact element={<ConfidentialityPolicy />} />
          <Route path='/RefundPolicy' exact element={<RefundPolicy />} />
          <Route path='/CaseStudies' exact element={<CaseStudies />} />
          <Route path='/SalesDaasCaseStudy' exact element={<SalesDaasCaseStudy />} />
          <Route path='/FenceForceCaseStudy' exact element={<FenceForceCaseStudy />} />
          <Route path='/EasyHireCaseStudy' exact element={<EasyHireCaseStudy />} />


          <Route path='/fence-crm' exact element={<FenceCRM />} />
          <Route path='/PricingPlan' exact element={<PricingPlan />} />

          

        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
