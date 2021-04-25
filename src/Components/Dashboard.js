import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import Home from './Home';


function Dashboard() {
    return (
        <div>
           <NavBar />
           <div className="flex">
           <Home />
           </div>
          
        </div>
    )
}

export default Dashboard
