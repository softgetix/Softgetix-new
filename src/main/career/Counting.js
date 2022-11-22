import React from 'react'

function Counting() {
  return (
    <>
      <section className="opportunities-counting">
          <div className="container opportunities-counting_container">
              <div className="row" >
                <div className="col-md-12 text-center">
                  <h1 className="opportunities-counting-title pt-4">
                      Growing fast, globally
                  </h1>
                </div>   
              </div>
              <div className="row text-center">
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">24+</h2>
                      <p className="count-text "><img src="icons/flight.png" width="25px" alt=""/>&nbsp; COUNTRIES SERVED </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">530+</h2>
                      <p className="count-text "><img src="icons/rating.png" width="25px" alt=""/> HAPPY CLIENTS </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">1280+</h2>
                      <p className="count-text "><img src="icons/pencil-and-ruler.png" width="25px" alt=""/>&nbsp; PROJECTS COMPLETE </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">12+</h2>
                      <p className="count-text "><img src="icons/years.png" width="25px" alt=""/>&nbsp; YEARS </p>
                    </div>
                </div>
              </div>
          </div>
      </section>

    </>
  )
}

export default Counting
