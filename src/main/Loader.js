import React from 'react'

import { Puff } from  'react-loader-spinner'

const Loader = () => {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
return(
  <div style={style}>
<Puff
  height="80"
  width="80"
  radisu={1}
  color="#fa7169"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>) 


}



export default Loader;