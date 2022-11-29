import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Home from './main/home/Index';
import { Helmet } from "react-helmet";
import Loader from "./main/Loader";
import ScrollToTop from "./ScrollToTop";
const Home = React.lazy(() => import("./main/home/Index"));
const Career = React.lazy(() => import("./main/career/Index"));
const JobDetails = React.lazy(() => import("./main/career/JobDetails"));
const AboutUs = React.lazy(() => import("./main/about/About"));
// const Contact = React.lazy(() => import('./main/contact/Contact'));
const Services = React.lazy(() => import("./main/services/Services"));
const GetFreeQuote = React.lazy(() =>
  import("./main/common_components/GetFreeQuote")
);
const Staffing = React.lazy(() => import("./main/staffing/Staffing"));
const ConfidentialityPolicy = React.lazy(() =>
  import("./main/ConfidentialityPolicy")
);

const RefundPolicy = React.lazy(() => import("./main/RefundPolicy"));
const CaseStudies = React.lazy(() => import("./main/CaseStudies"));
const CustomSoftwareDevelopment = React.lazy(() =>
  import("./main/services/CustomSoftwareDevelopment")
);
const ITConsultantAdvisoryServices = React.lazy(() =>
  import("./main/services/ITConsultantAdvisoryServices")
);
const ITStaffAugmentation = React.lazy(() =>
  import("./main/services/ITStaffAugmentation")
);
const BackendDevelopmentService = React.lazy(() =>
  import("./main/services/BackendDevelopmentServices")
);
const FrontendDevelopmentService = React.lazy(() =>
  import("./main/services/FrontendDevelopmentServices")
);
const SaasApplicationDevelopmentService = React.lazy(() =>
  import("./main/services/SaasApplicationDevelopmentServices")
);
const BusinessIntelligenceService = React.lazy(() =>
  import("./main/services/BusinessIntelligenceServices")
);
const DatabaseDevelopmentService = React.lazy(() =>
  import("./main/services/DatabaseDevelopmentServices")
);
const WebDevelopmentService = React.lazy(() =>
  import("./main/services/WebDevelopmentServices")
);
const FenceCRM = React.lazy(() => import("./main/product/FenceCRM"));
const DedicatedTeam = React.lazy(() => import("./main/services/DedicatedTeam"));
const Hiring = React.lazy(() => import("./main/Hiring"));
const SalesDaasCaseStudy = React.lazy(() =>
  import("./main/CaseStudy/SalesDaasCaseStudy")
);
const FenceForceCaseStudy = React.lazy(() =>
  import("./main/CaseStudy/FenceForceCaseStudy")
);
const EasyHireCaseStudy = React.lazy(() =>
  import("./main/CaseStudy/EasyHireCaseStudy")
);
const PricingPlan = React.lazy(() => import("./main/PricingPlan"));
const ContactTest = React.lazy(() => import("./main/contact/NewContact"));

// import Career from './main/career/Index';
// import JobDetails from './main/career/JobDetails';
// import AboutUs from './main/about/About';
// import Contact from './main/contact/Contact';
// import ContactTest from './main/home/ContactTest';
// import Services from "./main/services/Services";
// import GetFreeQuote from "./main/common_components/GetFreeQuote";
// import Staffing from "./main/it-staff-augmentation-services/it-staff-augmentation-services";
// // import ConfidentialityPolicy from "./main/ConfidentialityPolicy";
// import RefundPolicy from './main/RefundPolicy';
// // import CaseStudies from './main/CaseStudies';
// import CustomSoftwareDevelopment from "./main/services/CustomSoftwareDevelopment";
// import ITConsultantAdvisoryServices from "./main/services/ITConsultantAdvisoryServices";
//import ITStaffAugmentation from "./main/services/ITStaffAugmentation";
// import BackendDevelopmentService from "./main/services/BackendDevelopmentServices";
//import FrontendDevelopmentService from "./main/services/FrontendDevelopmentServices";
// import SaasApplicationDevelopmentService from "./main/services/SaasApplicationDevelopmentServices";
// import BusinessIntelligenceService from "./main/services/BusinessIntelligenceServices";
// import DatabaseDevelopmentService from "./main/services/DatabaseDevelopmentServices";
// import WebDevelopmentService from "./main/services/WebDevelopmentServices";
// import FenceCRM from "./main/product/FenceCRM";
// import DedicatedTeam from "./main/services/DedicatedTeam";

// import Hiring from "./main/Hiring";
// import SalesDaasCaseStudy from "./main/CaseStudy/SalesDaasCaseStudy";
// import FenceForceCaseStudy from "./main/CaseStudy/FenceForceCaseStudy";
// import EasyHireCaseStudy from "./main/CaseStudy/EasyHireCaseStudy";
// import PricingPlan from "./main/PricingPlan";
import "./style.css";
import "./custom.css";

import "./BackToTopButton.js";

function App() {
  const url = window.location.href;
  const [canonical, setCanonical] = useState(window.location.href);

  useEffect(() => {
    // Update the document title using the browser API
    setCanonical(window.location.href);
  }, [url]);

  return (
    <div className="App">
      <Helmet>
        <meta
          name="google-site-verification"
          content="4u5qJogshQWVHHZM5gWU7j6S5R6kydqQnAyoov9Ga50"
        />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/career" exact element={<Career />} />
            <Route path="/jobdetails/:id" exact element={<JobDetails />} />
            <Route path="/about" exact element={<AboutUs />} />
            <Route path="/contact" exact element={<ContactTest />} />
            <Route path="/services" exact element={<Services />} />
            <Route
              path="/custom-software-development"
              exact
              element={<CustomSoftwareDevelopment />}
            />
            <Route path="/dedicated-team" exact element={<DedicatedTeam />} />
            <Route
              path="/it-consultant-advisory-service"
              exact
              element={<ITConsultantAdvisoryServices />}
            />
            <Route
              path="/it-staff-augmentation"
              exact
              element={<ITStaffAugmentation />}
            />
            <Route
              path="/backend-development-services"
              exact
              element={<BackendDevelopmentService />}
            />
            <Route
              path="/frontend-development-services"
              exact
              element={<FrontendDevelopmentService />}
            />
            <Route
              path="/saas-application-development-services"
              exact
              element={<SaasApplicationDevelopmentService />}
            />
            <Route
              path="/business-intelligence-services"
              exact
              element={<BusinessIntelligenceService />}
            />
            <Route
              path="/database-development-services"
              exact
              element={<DatabaseDevelopmentService />}
            />
            <Route
              path="/web-development-services"
              exact
              element={<WebDevelopmentService />}
            />
            <Route path="/get-free-quote" exact element={<GetFreeQuote />} />
            <Route
              path="/it-staff-augmentation-services"
              exact
              element={<Staffing />}
            />
            <Route path="/hiring/:technology" exact element={<Hiring />} />
            <Route
              path="/confidentiality-policy"
              exact
              element={<ConfidentialityPolicy />}
            />
            <Route path="/refund-policy" exact element={<RefundPolicy />} />
            <Route path="/case-studies" exact element={<CaseStudies />} />
            <Route
              path="/sales-daas-case-study"
              exact
              element={<SalesDaasCaseStudy />}
            />
            <Route
              path="/fence-force-case-study"
              exact
              element={<FenceForceCaseStudy />}
            />
            <Route
              path="/easy-hire-case-study"
              exact
              element={<EasyHireCaseStudy />}
            />

            <Route path="/fence-crm" exact element={<FenceCRM />} />
            <Route path="/pricing-plan" exact element={<PricingPlan />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
