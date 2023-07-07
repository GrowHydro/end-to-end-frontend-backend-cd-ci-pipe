import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import LinkBar from './components/LinkBar.js'
import HydroHome from './components/HydroHome.js'
import './App.css';
import './css/growroom.scss'
import Badge from 'react-bootstrap/Badge';

function GrowRoom(){

    
    
    return(
        <div className='grow-header mx-auto grow-room'>
            <h1 className='fs-1 highlight fw-bold'><Badge bg="secondary">Home Grown Hydro</Badge>Home Grown Hydroponics</h1>
            <LinkBar />
           </div>
          
           )
}

export default GrowRoom;