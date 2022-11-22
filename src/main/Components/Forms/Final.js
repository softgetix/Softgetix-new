/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  return (
    <>
      <Card className="card-height">
        <Card.Body>
          <div className="hire_team_form_heading">
            <p>
              Thank you {values.contact_name} for choosing SoftGetix to help you
              to hire an {values.technology} Developer. We will reach you
              shortly.
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
