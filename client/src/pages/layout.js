import { Outlet, Link } from "react-router-dom";
import {Dropdown, DropdownItem} from 'react'
import {useState, useEffect} from 'react'

const Layout = () => {
    return (
        <>
        <nav>
            <p>
                <Link to="/home">Home</Link>
                <br></br>
                <Link to="/">Login</Link>
                <br></br>
                <Link to="/hostel">View hostel Buildings</Link>
                <br></br>
                <Link to="/room">View rooms</Link>
                <br></br>
                <Link to="/booking">Book a room</Link>
                <br></br>
                <Link to="/cancel">Cancel Booking</Link>
            </p>
            
        </nav>
  
        <Outlet />
      </>
    )
};

export default Layout;
{/* <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/hostel">View hostel Buildings</Link>
        </li>
        <li>
            <Link to="/room">View room</Link>
        </li>
        <li>
            <Link to="/booking">Book a room</Link>
        </li>
        <li>
            <Link to="/cancel">Cancel Booking</Link>
        </li>
    </ul> */}