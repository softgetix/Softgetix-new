import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import About from "./about";
import Partnership from "./partnership";
import Plans from "./Plan";
import ContactUs from "./Contact";
import ContactUsTest from "./ContactTest";
import Template from "../common/Template";
import CaseStudy from "./CaseStudy";
import Testimonials from "./Testimonials";

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
