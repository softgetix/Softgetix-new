import React from 'react';
import Template from './common/Template';

function RefundPolicy() {
  return (
    <>
    <Template>
    <section className="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                        <h2 className="heading-section">Refund Policy</h2>
                    </div>
                </div>
            </div>
        </section>
        <section id="refund-policy">
            <div className="container text-center">
                <p><b>Refund Policy: Once paid there is no refund considered, in case of not satisfied with the existing resource we provide a resource replacement within 15 days of assessment.</b></p>
            </div>
        </section>
    </Template>
        
    </>
  )
}

export default RefundPolicy
