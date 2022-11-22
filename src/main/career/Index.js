import React from 'react';
import Banner from './Banner';
import Counting from './Counting';
import Role from './Role';
import Template from '../common/Template';

function Index() {
  return (
    <div>
      <Template>
        <Banner />
        <Role />
        <Counting />
      </Template>
    </div>
  )
}

export default Index
