import React from 'react';
import Banner from './Banner';
import Counting from './Counting';
import Role from './Role';
import Template from '../common/Template';
import { Helmet } from 'react-helmet';
function Index() {
  return (
    <div>
      <Helmet>
        <title>Career - Explore Career In Software Development - Softgetix</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Template>
        <Banner />
        <Role />
        <Counting />
      </Template>
    </div>
  )
}

export default Index
