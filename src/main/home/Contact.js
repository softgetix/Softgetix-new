import React , { useState } from 'react'

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/contacts/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          mobile: mobile,
          message: comment
        }),
      });

      // let resJson = await res.json();
      console.log(res);
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber(""); 
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
      <section className="contact_us">
          <div className="container">
            
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-5">
                  <div className="contact_profile">	
                    <div className="row">
                      <div className="col-lg-12">
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-3">
                        <div className="contact_img">
                          <img src="images/binod_sir_profile_pic.png" alt="" width="120px"/>
                        </div>	
                      </div>
                      <div className="col-lg-8 mt-3">
                        <div className="contact_us_details">
                          <p>We take each project as a mission, with enthusiasm and dedication, sharing its new challenges and new space to grow with our clients. Speak to <b>Binod</b> – let’s work together.</p>
                        </div>  
                      </div>
                    </div>
                  </div>	
                </div>
                <div className="col-lg-7">
                  <div className="contact_form">	
                      <div className="d-flex flex-row justify-content-center">
                          <form className="w-xl-50 w-lg-75" onSubmit={handleSubmit} >
                              <div className="container">
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="form-group"> 
                                              <label htmlFor="name">Your Name :</label>
                                              <div className="input-field">
                                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required/> </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 mt-5">    
                                          <div className="form-group"> 
                                              <label htmlFor="name">Mail :</label>
                                              <div className="input-field"><input type="email"
                                              placeholder="Enter your email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 mt-5">    
                                          <div className="form-group"> 
                                              <label htmlFor="name">Phone :</label>
                                              <div className="input-field"><input type="text" minlength="10" maxlength="10" pattern="[0-9]+" placeholder="Enter your phone number" name="mobile" value={mobile} onChange={(e) => setMobileNumber(e.target.value)} required/> </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-12 mt-5">
                                          <div className="form-group"> 
                                              <label htmlFor="msg">Message :</label>
                                              <div className="input-field bg-blue"><textarea name="comment" id="msg" value={comment}
                                                onChange={(e) => setComment(e.target.value)}  cols="10" rows="1" className="form-control bg-blue" placeholder="Brief description of your needs"></textarea></div>
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <label className="check">Lorem Ipsum is simply dummy text of the printing and
                                          </label>
                                          <input
                                            type="checkbox"
                                            name="check"
                                            value="Check_accepted"
                                            checked={isChecked}
                                            className="geekmark"
                                            onChange={handleOnChange}
                                          />
                                      </div>
                                      <div className="d-flex flex-row w-100 ml-3 mt-3">   
                                        <input type="submit" value="Contact Us" className="btn free_Quote_btn btn-lg"/> 
                                      </div>

                                      <div className="message">{message ? <p className='message_block'>{message}</p> : null}</div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact
