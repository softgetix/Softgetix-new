import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
    // console.log('values',values);
  const { contact_name, resource, company_name, email ,technology} = values;

  
  return (
    <>
      <Card className="card-height" >
        <Card.Body>
        <div className="hire_team_form_heading">
          <p>Thank you {contact_name} for choosing SoftGetix to help you to hire an {technology} Developer. We will reach you shortly.</p>
        </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;