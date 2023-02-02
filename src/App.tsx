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
           <div className="card-body justify-content-center align-items-center">
              <div className='d-flex text-secondary col-auto'>
                  <img className="card-img-top w-25 border border-2 rounded-circle" src={img} alt="Card image cap"/>
                  <div>
                      <h1 className="card-title">- Jeidy Art -</h1>
                      <h6 className="card-text">DIGITAL ARTIST</h6>
                      <h6 className="card-text">SHE/HER ┊ ENG/SPA</h6>
                      <p className="card-text">DIGITAL ARTIST</p>

                  </div>
              </div>
              <div className=''>
                  <a href="#" className="btn btn-outline-dark me-2">T.O.S</a>
                  <a href="#" className="btn btn-outline-dark me-2">Contact</a>
                  <a href="#" className="btn btn-outline-dark me-2">Prices</a>
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
