import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import About from "./about";
import Partnership from "./partnership";
import Plans from "./Plan";
import ContactUsTest from "./ContactTest";
import Template from "../common/Template";
import CaseStudy from "./CaseStudy";
import Testimonials from "./Testimonials";
import { HelmetProvider,Helmet } from "react-helmet-async";

function Index(props) {
  const ContactSection = React.useRef("");

  function smoothScroll(target) {
    const { top } = target.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  const [renderContact, setRenderContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setRenderContact(true);
      }
    });
  }, []);

  

  return (
    <>
    <HelmetProvider>
    <Helmet prioritizeSeoTags>
        <title>Digital Product Engineering & IT Staff Augmentation Company</title>
        <meta
      name="description"
      content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services."/>
    <meta name="keywords" content=""></meta>
    <link rel="canonical" href={window.location.href} />

        </Helmet>
        </HelmetProvider>
      <Template>
      
        <Banner />
        <About />
        <Partnership />
        <CaseStudy />
        <Testimonials />
        <Plans />
        
        <section className="contact_us" id="conthub" ref={ContactSection}>
          {renderContact && <ContactUsTest />}
        </section>
      </Template>
    </>
  );
}

export default Index;
