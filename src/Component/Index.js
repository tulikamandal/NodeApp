import React from 'react';
import './Index.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Emp_Details } from './Emp_Details';
import { Campus_Details } from './Campus_Details';
import { Rm_Details } from './Rm_Details';
import { Ld_Details } from './Ld_Details';
import { Hr_Analytics } from './Hr_Analytics';
// import { Logoimage } from '../Assets/Persistent_Logo_Horizontal_Orange_Silver'

export function Index() {
  return (
    <div>
      <div className="align">
        <img className='navlogo' src={require('../Assets/Persistent_Logo_Horizontal_Orange_Silver.png')} alt="Logo" />
        <input className="searchBox" placeholder="Search" type="text" />
      </div>
      <h2 align="center">Employee Details</h2>
      <div className='tab'>
        <Link to='/emp_details'><button className='buttons'>Employee Details</button></Link>
        <Link to='/campus_details'><button className='buttons'>Campus Details</button></Link>
        <Link to='/rm_details'><button className='buttons'>RM Details</button></Link>
        <Link to='/ld_details'><button className='buttons'>L and D Details</button></Link>
        <Link to='/hr_analytics'><button className='buttons'>HR Analytics</button></Link>
      </div>
      <Routes>
        <Route path='/emp_details' element={<Emp_Details />} />
        <Route path='/campus_details' element={<Campus_Details />} />
        <Route path='/rm_details' element={<Rm_Details />} />
        <Route path='/ld_details' element={<Ld_Details />} />
        <Route path='/hr_analytics' element={<Hr_Analytics />} />
      </Routes>
    </div>
  )
}

