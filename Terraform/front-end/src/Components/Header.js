import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import {Link, Outlet } from 'react-router-dom';
import '../scss/shopping.scss'

const Header = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    
    return(<>  
               
                <div className="d-flex flex-row mx-auto">
                   <Link className="mx-4" to="shopping-cart">Shopping Cart</Link>
                   <Dropdown alignRight>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       <AiOutlineShoppingCart  size="35px" />
       Shopping Cart 
      </Dropdown.Toggle>
      <Dropdown.Menu style={{minWidth: 370}}>
        <span style={{padding: 10}}>Cart is Empty!</span>
      </Dropdown.Menu>
    </Dropdown>
                </div>
                
          </>)
}

export default Header