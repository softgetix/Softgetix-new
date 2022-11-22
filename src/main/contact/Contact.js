import React, { useState } from 'react';
import Template from '../common/Template';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [mobile, setMobileNumber] = useState("");

    const [intrests, setIntrests] = useState("");

    const [comment, setComment] = useState("");
    const [message, setMessage] = useState("");
    
    const onValueChange = (event) => {
      setIntrests(event.target.value);
    };
    
    let handleSubmit = async (e) => {
     
      e.preventDefault();
      try {
        let res = await fetch("https://softgetix.com/SoftGetixAPI/public/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            page: 'contactus',
            name: name,
            email: email,
            organisation: organisation,
						mobile:mobile,
            intrests: intrests,
            message: comment
          }),
        });
  
        // let resJson = await res.json();
        console.log(res);
        if (res.status === 200) {
          setName("");
          setEmail("");
          setOrganisation(""); 
					setMobileNumber("");
          setIntrests('');
          setComment("");
          setMessage("Thanks for contacting Us. We will contact you shortly.");
        } else {
          setMessage("Contact Us support not available for now. Please try again later.");
        }
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <>
      <Template>
      <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 text-center mb-3">
                      <h2 className="heading-section">Please submit your information and we will get back to you.</h2>
                </div>
              </div>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                      <div className="wrapper">
                        <div className="row mb-3">
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Address:</span> 519, Shagun Tower, AB Road, Vijay Nagar Square, Indore</p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+91-731-4002699</a></p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-envelope"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">hello@softgetix.com</a></p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Website</span> <a href="#">softgetix.com</a></p>
                                  </div>
                              </div>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-md-7">
                              <div className="contact-wrap w-100  p-4">
                              
                              <form className="contactForm" onSubmit={handleSubmit}>
																<div className="row">
																		<div className="col-md-6">
																			<div className="form-group">
																				<label className="label" htmlFor="name">Full Name</label>
																				<input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" required/>
																			</div>
																		</div>
																		<div className="col-md-6">
																			<div className="form-group">
																				<label className="label" htmlFor="email">Email Address</label>
																				<input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
																			</div>
																		</div>
																		<div className="col-md-6">
																			<div className="form-group">
																			<label className="label" htmlFor="organization">Organization</label>
																					<input type="text" className="form-control" name="organization" value={organisation} onChange={(e) => setOrganisation(e.target.value)} id="organization" placeholder="Organization"/>
																			</div>
																		</div>
																		<div className="col-md-6">
																			<div className="form-group">
																				<label className="label" htmlFor="mobile">Phone</label>
																				<input type="text" minlength="10" maxlength="10" pattern="[0-9]+" className="form-control" placeholder="Phone number" name="mobile" value={mobile} onChange={(e) => setMobileNumber(e.target.value)} required/>
																			</div>
																		</div>
																		<div className="col-md-12">
																			<div className="form-group radio-block">
																					<label className="label" htmlFor="#">Interested in?*</label>
																					<ul className="radio-flex">
																						<li>
																							<input type="radio" id="staffing" name="intrests" value="Custom Software Development" checked={intrests === "Custom Software Development"}
					onChange={onValueChange} />
																							<label className="wpforms-field-label-inline ml-2" htmlFor="staffing">Custom Software Development</label>
																						</li>
																						<li>
																							<input type="radio" id="staffing" name="intrests" value="Dedicated Team" checked={intrests === "Dedicated Team"}
					onChange={onValueChange} />
																							<label className="wpforms-field-label-inline ml-2" htmlFor="staffing">Dedicated Team</label>
																						</li>
																						<li>
																							<input type="radio" id="staffing" name="intrests" value="IT Staff Augmentation" checked={intrests === "IT Staff Augmentation"}
					onChange={onValueChange} />
																							<label className="wpforms-field-label-inline ml-2" htmlFor="staffing">IT Staff Augmentation</label>
																						</li>
																						<li>
																							<input type="radio" id="staffing" name="intrests" value="IT Consulting Digital Advisory" checked={intrests === "IT Consulting Digital Advisory"}
					onChange={onValueChange} />
																							<label className="wpforms-field-label-inline ml-2" htmlFor="staffing">IT Consulting &amp; Digital Advisory</label>
																						</li>
																						<li>
																							<input type="radio" id="other" name="intrests" value="Other Services" checked={intrests === "Other Services"}
					onChange={onValueChange}/>
																							<label className="wpforms-field-label-inline ml-2" htmlFor="other">Other Services</label>
																						</li>
																					</ul>
																			</div>
																		</div>
																		<div className="col-md-12">
																			<div className="form-group">
																					<label className="label" htmlFor="#">Tell Us More </label>
																					<textarea name="comment" value={comment}
																								onChange={(e) => setComment(e.target.value)} className="form-control" id="message" cols="30" rows="4" placeholder="Tell Us More" required></textarea>
																			</div>
																		</div>
																		<div className="col-md-12">
																			<div className="form-group">
																				<input type="submit" value="Let's Connect With Us" className="btn free_Quote_btn"/>
																			</div>
																		</div>
																		<div className="col-md-12">
																				<p>We respect your privacy and will not use your email address for any other communication</p>
																		</div>
																		<div className="message col-md-12">
																			{message ? <p className='message_block'>{message}</p> : null}
																		</div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-stretch">
                              <div className="info-wrap w-100 p-5 img infowrap-contactimg" >
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </section>
      </Template>
    </>
  )
}

export default Contact
