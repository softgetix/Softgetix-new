import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "./Components/Forms/StepOne";
import StepTwo from "./Components/Forms/StepTwo";
import Final from "./Components/Forms/Final";
import StepThree from "./Components/Forms/StepThree";
import Template from "./common/Template";
import {Link} from 'react-router-dom'
import { useParams, withRouter } from "react-router";
import StepFour from "./Components/Forms/StepFour";
import StepFive from "./Components/Forms/StepFive";
import AugmentedHiringBenifits from "./common_components/AugmentedHiringBenifits";

import logo from '../logo/softgetix_logo_new.png'

function Hiring() {
  //state for steps
  const [step, setstep] = useState(1);
  const params = useParams();

  //state for form data
  const [formData, setFormData] = useState({
    resource: "",
    resource_time: "",
    company_name: "",
    email: "",
    technology:params['technology']
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => { 
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  
//   console.log('formData',formData);
  
// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
      <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" to="/">
                                    <img src={logo} alt="softgetix_logo"/>
                                 </Link>
                              </div>
                           <div className="hire_team_form_heading">
                              <p>Thank you for choosing SoftGetix to help you hire an. To match you with the best resource, please take a minute to answer a few quick questions.</p>
                           </div>
                           <div className="">
                              <StepOne nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" to="/">
                                    <img src="/logo/softgetix_logo_new.png" alt=""/>
                                 </Link>
                              </div>
                           <div className="">
                              <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" to="/">
                                    <img src="/logo/softgetix_logo_new.png" alt=""/>
                                 </Link>
                              </div>
                           <div className="">
                              <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      );
      case 4:
      return (
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" to="/">
                                    <img src="/logo/softgetix_logo_new.png" alt=""/>
                                 </Link>
                              </div>
                           <div className="">
                              <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      );
      case 5:
      return (
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" to="/">
                                    <img src="/logo/softgetix_logo_new.png" alt=""/>
                                 </Link>
                              </div>
                           <div className="">
                              <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
         </section>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 6:
      return (
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" to="/">
                                    <img src="/logo/softgetix_logo_new.png" alt=""/>
                                 </Link>
                              </div>
                           <div className="">
                              <Final values={formData}  />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      );
    // default case to show nothing
    default:
      
  }
}

export default Hiring;