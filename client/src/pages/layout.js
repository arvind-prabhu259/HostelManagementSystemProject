import { Outlet, Link } from "react-router-dom";
import {useState} from 'react'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="pageHeader">
            <button className="navButton" onClick={() => setIsOpen(!isOpen)}>Nav</button>
        </div>
        {isOpen &&(
            <div>
                <nav>
                    <p>
                        <Link to="/home">Home</Link>
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
            </div>
        )}
        <Outlet />
      </>
    );
};

export default Layout;