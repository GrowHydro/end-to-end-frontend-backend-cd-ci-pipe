import {useState} from 'react'
import kit from '../pictures/3plants.png'
import pro from '../pictures/flower.jpg'
import glow from '../pictures/grow-kit.jpg'
import eBook from '../pictures/Ebook-cover.jpg'
import pvc from '../pictures/pvc.jpg'
import '../css/button.css'

const BuyButtons = () =>{
    
    return(<>[
            <div className="d-flex flex-column-reverse mx-auto vertical">
              <span className="header mx-auto text-white">
                <h1>Unlock Your Green Haven</h1>
              </span>
              <p className='mx-auto fs-3 fw-bolder text-white header'>Cultivate Greatness: Our Kit, Your Journey, Pure Potency.</p>
              <p className='mx-auto fs-3 fw-bolder text-white header'>Budding Entrepreneurs Wanted: Grow Legal Green with Our Hydroponic Mastery.</p>
              <p className='mx-auto fs-3 fw-bolder text-white'>Grows 30%-50% Faster!</p>
              
              <div className="mx-auto button my-2">
              <div className='d-flex flex-column price'>
              <h1 className='mx-auto fs-3'>HydroBloom Pro</h1>
              <p className='mx-auto'>$660.00</p>
              <img className="rounded-circle" src={pro} alt="high power grow kit" height={"220px"} width={"200px"}/>
              <a target="_blank" href="https://square.link/u/myPEbbJu?src=embed" className="buy">Buy now</a>
             
            </div>
            </div>
              
              <div className="mx-auto button my-2">
              <div className='d-flex flex-column price'>
              <h1 className='mx-auto fs-3'>Starter Grow Kit</h1>
              <p className='mx-auto'>$400.00</p>
              <img className="rounded-circle" src={glow} alt="starter kit" height={"220px"} width={"200px"}/>
              <a target="_blank" href="https://square.link/u/osl3ipFg?src=embed" className="buy">Buy now</a>
              </div>
              </div>
              
             

//
<div className="mx-auto button my-2">
  <div className='d-flex flex-column price'>
  <h1 className='mx-auto fs-3'>Hydroponic pvc</h1>
  <h1 className='mx-auto fs-3'>skeleton</h1>
      <p className="mx-auto">$160.00</p>
      <img className="mx-auto rounded-circle" src={pvc} alt="high power grow kit" height={"220px"} width={"200px"}/>
    <a target="_blank" href="https://square.link/u/ti2QESgi?src=embed" className="buy">Buy now</a>
  </div>
</div>

//

//
<div className="mx-auto button my-2">
  <div className="d-flex flex-column price">
  <h1 className="mx-auto fs-3 mt-2">Comprehensive Guide</h1>
  <h1 className='mx-auto fs-4'>Hydroponic Growth</h1>
  <h1 className="mx-auto fs-6">eBook</h1>
      <p className="mx-auto">$11.11</p>
      <img className="mx-auto rounded-circle" src={eBook} alt="high power grow kit" height={"220px"} width={"200px"}/>
    <a target="_blank" href="https://square.link/u/Gmm3L9v8?src=embed" className="buy mb-2" >Buy now</a>
  </div>
</div>
//

            </div>
    ]
           </>)
}

export default BuyButtons