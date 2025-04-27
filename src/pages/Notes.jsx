import React from 'react';
import Navbar from '../components/Navbar';
import './Notes.css';

export default function Notes() {
  return (
    <div >
      <Navbar />
      <div className='notes'>
          <div className="bg-text notesContent" id="mybranch1">
            <h1 style={{ fontWeight: 'bold' }}>All Year Notes</h1>
            <h3 style={{ marginTop: '30px', fontWeight: 'bold' }}>Select Your Year</h3>
            <div style={{ marginTop: '50px' }} className="res-margin1 notesButtons">
              <a href="Years/FirstYear.html"><button className="btn btn-primary" style={{ fontWeight: 'bold' }}>First Year</button></a>
              <a href="Years/SecondYear.html"><button className="btn btn-primary ourbtn" style={{ fontWeight: 'bold' }}>Second Year</button></a>
              <a href="Years/ThirdYear.html"><button className="btn btn-primary ourbtn" style={{ fontWeight: 'bold' }}>Third Year</button></a>
              <a href="Years/FourthYear.html"><button className="btn btn-primary ourbtn" style={{ fontWeight: 'bold' }}>Fourth Year</button></a>
            </div>
        </div>
      </div>
    </div>
  );
}
