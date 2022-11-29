import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Template(props) {
  return (
    <React.Fragment>
      <Nav />
      
      <div className="main-content">
        {props.children}
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Template
