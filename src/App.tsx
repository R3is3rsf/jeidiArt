import { useState } from 'react'
import img from './assets/image02.jpg'
import wallpaper from './assets/wallpaper/v722-aum-35a.jpg'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const objStyle = {

    
    
    backgroundImage: `url(${wallpaper})` 
    
    }

  return (
  <>
   <div style={objStyle}>
    <div className="container" >
      
      <div className='row  vh-100 justify-content-center align-items-center'>
        <div className="card col-auto h-75" >
           <div className='row vh-100 row justify-content-center  align-items-center'>
              <div className="card-body col-auto justify-content-center align-items-center">
              <div className='d-flex justify-content-center text-secondary'>

                  <img className="d-flex card-img-top w-25 border border-2 rounded-circle me-4" src={img} alt="Card image cap"/>
                  <div className=''>
                      <h1 className="card-title">- Jeidy Art -</h1>
                      <p className="card-text">DIGITAL ARTIST</p>
                      <p className="card-text">SHE/HER ┊ ENG/SPA</p>
                      <hr/>
                      <span>
                      I'm Jeidy, a freelance artist.
                        <br />
                      You can consult my prices and check my art.
                        <br />
                      Commission Status: CHECK FIRST
                        <br />
                      Waitlist: OPEN
                      </span>

                  </div>
              </div>
              <hr/>
              <div className='d-flex justify-content-center'>
                  <a href="#" className="btn btn-outline-dark me-2">T.O.S</a>
                  <a href="#" className="btn btn-outline-dark me-2">Contact</a>
                  <a href="#" className="btn btn-outline-dark me-2">Prices</a>
              </div>
              </div>

           </div>
        </div>

      </div>
     </div>

   </div>
   </>
  )
}

export default App
