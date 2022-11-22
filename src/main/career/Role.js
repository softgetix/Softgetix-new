import React , {useState , useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

function Role() {

  const [jobs, setJobs] = useState([]);
 
  async function fetchData() {
    try {
      const response = await axios.get("https://softgetix.com/SoftGetixAPI/public/api/jobProfile")
      setJobs(response.data[0])
      localStorage.setItem('roles',JSON.stringify(response.data[0]))
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <section id="opportunities">
        <div className="container">
        <div className="row">
            <div className="text-center pb-2 m-auto">
              <div className="col-md-12">
                <h1 className="font-weight-bold text-center staff-heading">Current <b className="orange-text">opportunities</b></h1>
              </div>
              <div className="col-md-12 m-auto">
                <div className="staff_steps_details text-center">
                  <p>What are you waiting for? Start your future at SoftGetix today</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
          {
            jobs.map((job, index)=>{
              return (
              <>
                <div className="col-md-4">
                  <Link to={`/jobdetails/${job.id}`} >
                    <div className="opportunities1" style={{ borderColor : `${job.border_color}`}} >
                        <div className="opportunities1_body" onMouseOver={({target})=>target.style.backgroundColor=`${job.border_color}`}
                          onMouseOut={({target})=>target.style.backgroundColor=''} >
                          <h3 className="text-center">ROLE</h3>
                          <h1 className="text-center pt-3 pb-3" >{job.job_name}</h1>
                          <h5 className="text-center">Desired Experience {job.experience}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
              )
            })
          }
          </div>

          {/* <div className="row mt-4 ml-3">
            <div className="col-md-4">
              <div className="opportunities1">
                <div className="opportunities1_body" style={{
                  backgroundColor: isYellowActive ? "#ffb300" : ''}}>
                  
                  <a href="#!" onClick={getRole('Wordpress Developer','#ffb300')} style={{
                  color: isYellowActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Wordpress Developer</h1>
                    <h5 className="text-center">Desired Experience 2+ Years</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities2">
                <div className="opportunities2_body" style={{
                  backgroundColor: isBlueActive ? "#4385f4" : ''}}>
                  <a href="#!"  onClick={getRole('Codeigniter Developer','#4385f4')} style={{
                  color: isBlueActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Codeigniter Developer</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities3">
                <div className="opportunities3_body" style={{
                  backgroundColor: isGreenActive ? "#4eacae" : ''}}>
                  <a href="#!" onClick={getRole('Laravel Developer','#4eacae')} style={{
                  color: isGreenActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Laravel Developer</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities4">
                <div className="opportunities4_body" style={{
                  backgroundColor: isPistaActive ? "#c4df9b" : ''}}>
                  <a href="#!" onClick={getRole('PHP Developer','#c4df9b')} style={{
                  color: isPistaActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">PHP <br/> Developer</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities5">
                <div className="opportunities5_body" style={{
                  backgroundColor: isPinkActive ? "#ffa8ff" : ''}}>
                  <a href="#!" onClick={getRole('Digital Marketing Executive','#ffa8ff')} style={{
                  color: isPinkActive ? 'white' : 'black' }}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Digital Marketing Executive</h1>
                    <h5 className="text-center">Desired Experience 0-1 Years</h5>
                  </a>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opportunities6">
                <div className="opportunities6_body" style={{
                  backgroundColor: isOrangeActive ? "#ff7800" : ''}}>
                  <a href="#!" onClick={getRole('Business Development Executive','#ff7800')} style={{
                  color: isOrangeActive ? 'white' : 'black'}}>
                    <h3 className="text-center">ROLE</h3>
                    <h1 className="text-center pt-3 pb-3">Business Development Executive</h1>
                    <h5 className="text-center">Desired Experience 1+ Years</h5>
                  </a>  
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </section>
    </div>
  )
}

export default Role
