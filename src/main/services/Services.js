import React from 'react'
import { Helmet } from 'react-helmet'
import Template from '../common/Template'
import FreeQuote from '../common_components/FreeQuote'

function Services() {
  return (
    <>
    <Helmet>
    <link rel="canonical" href={window.location.href} />
    </Helmet>
      <Template>
            <section className="services">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <h2 className="heading-section">Our Servicess</h2>
                            </div>
                            <div className="col-md-8 text-center mb-3">
                                <p>We help established businesses, blue chips and start-ups adopt advanced technology solutions to drive organisational change and achieve revenue growth.</p>

                                <p>Our services cover the key aspects of the successful product development: product vision, business goals, quality, user experience and technology innovation.</p>
                            </div>
                        </div>
                    </div>
                </section>
            <FreeQuote />
            
      </Template>
    </>
  )
}

export default Services
