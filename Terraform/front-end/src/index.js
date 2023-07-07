import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './css/growroom.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import GrowRoom from './GrowRoom.js'
import HydroHome from './components/HydroHome';
import LinksBar from './components/LinkBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='d-flex-column justify-content-center'>
            <nav className='d-flex-column justify-content-center'>
                <div className='d-flex justify-content-center h-50'>
                <Link className="mx-2" to="/">Home</Link>
                <Link className="mx-2" to='/HydroHome'>Hydroponics</Link>
                </div>
            </nav>
  <Routes>
    <Route index element={<GrowRoom />} />
    <Route path='/' element={<GrowRoom />}/>
        <Route index element={<HydroHome />} />
        <Route path='HydroHome' element={<HydroHome />} />
  </Routes>
  </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
