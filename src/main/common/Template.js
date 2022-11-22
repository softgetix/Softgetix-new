import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Template(props) {
  return (
    <div>
      <Nav />
      <div className="main-content">
        {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Template
