/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepFive = ({ nextStep, handleFormData, prevStep, values }) => { 
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.company_name) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
        // console.log('values',values);
        const form = new FormData();
        form.append("technology", values.technology);
        form.append("resource_type", values.resource);
        form.append("resource_time", values.resource_time);
        form.append("resource_start", values.resource_start);
        form.append("budget", values.resource_budget);
        form.append("email", values.email);
        form.append("name", values.contact_name);
        form.append("company_name", values.company_name);
        form.append('_method', 'POST')

        try {
            let res = fetch("https://softgetix.com/SoftGetixAPI/public/api/hiring", {
            method: "POST",
            body: form,
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }


      nextStep();
    }
  };
  return (
    <>
      <Card className="card-height">
        <Card.Body>
          <Form onSubmit={submitFormData}>
            
            <Form.Group className="mb-3">
              <Form.Label className="label-heading">Company Email</Form.Label>
              <Form.Control
                className="form-multi"
                style={{ border: error ? "2px solid red" : "" }}
                type="email"
                placeholder="email"
                onChange={handleFormData("email")} required
              />
              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label-heading">Company Name</Form.Label>
              <Form.Control
                className="form-multi"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="Company Name"
                onChange={handleFormData("company_name")} required
              />
              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>

            <Form.Group className="mb-3">
              <label className="label-heading">Contact Name</label>
              <Form.Control
                className="form-multi"
                style={{ border: error ? "2px solid red" : "" }}
                name="contact_name"
                defaultValue={values.contact_name}
                type="text"
                placeholder="Contact Name"
                onChange={handleFormData("contact_name")} required
              />
              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>
            <div className="button-block">
              <Button  className="btn back_btn" onClick={prevStep}>
               <i className="fa fa-angle-double-left"></i> Back
              </Button>

              <Button  className="btn continue-btn" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepFive;