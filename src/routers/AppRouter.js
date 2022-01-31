import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';


import { SeacrhScreen } from '../components/SeacrhScreen';


export const AppRouter = () => {
    return (
        <Router>
         
                <Routes> 
                    
                    
                    <Route exact path="*" element={<SeacrhScreen/>} />
                    <Route exact path="/movies/:id" element={<SeacrhScreen/>} />
                </Routes>
        </Router>
    )
}
