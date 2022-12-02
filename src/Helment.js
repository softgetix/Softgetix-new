import React from "react";
import { HelmetProvider,Helmet} from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";
import "./custom.css";


const HeaderHelmet= () =>{
    const helmetContext = {};
   const HelemetData = <HelmetProvider context={helmetContext}>
        <Helmet prioritizeSeoTags>
        
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta
          name="google-site-verification"
          content="4u5qJogshQWVHHZM5gWU7j6S5R6kydqQnAyoov9Ga50"
        />
      
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"
    />
      </Helmet>
    </HelmetProvider>
   return HelemetData;
}

export default HeaderHelmet;