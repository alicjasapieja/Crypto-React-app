import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './Pages/Home';
import Bitcoin from './Pages/Bitcoin';
import Popular from './Pages/Popular';
import NoPage from './Pages/NoPage';
import NavBar from './Components/NavBar';



function App() {
   
  


  return (
    
    <div>
      <div>
        
        <React.Fragment>
          <Router>
            <NavBar />
            
           <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/bitcoin" element={<Bitcoin />} />
              <Route exact path="/popular" element={<Popular />} />
              <Route exact path="*" element={<NoPage />} />
            </Routes>

          </Router>
        </React.Fragment>


       
     </div>
       </div>
  );
}

export default App;