import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'

 
function Maindashboardpage(){
 
        return (
            <div>
                <Navbar/>
                {/* <div className="container-fluid" id="main"> */}
                 <div className="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
                </div>
            {/* </div>   */}
        </div>  
        );
    }
  
export default Maindashboardpage