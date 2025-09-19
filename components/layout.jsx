import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
export default function Layout() {
 return (
 <>
 < img src={football1}alt="football" className="football" width="50px" height="50px"/>
 <h1>My Portfolio</h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="project">Projects</Link>| <Link to="/service">Services</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
