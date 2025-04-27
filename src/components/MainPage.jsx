import React, { useState } from 'react';
// import '../App.css'
// import '../index.css'
import './MainPage.css';

export default function MainPage() {
  const [showSections, setShowSections] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = () => {
    setShowSections(!showSections); // Toggle the visibility of sections
  };

  const handleSectionButtonClick = (section) => {
    setSelectedButton(section);
  };

  const renderSemesterButtons = () => {
    switch (selectedButton) {
      case 'Functional Button 1':
        return (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 1
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 2
            </button>
          </div>
        );
      case 'Functional Button 2':
        return (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 3
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 4
            </button>
          </div>
        );
      case 'Functional Button 3':
        return (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 5
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 6
            </button>
          </div>
        );
      case 'Functional Button 4':
        return (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 7
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Semester 8
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative mainpagediv ">
      <h1 className='font-bold' >Previous Year Question Papers & Notes</h1>
      <p className='font-semibold mt-8'>Tackle your exam with previous year papers, notes and video lectures all in one place.</p>

      <button
        onClick={handleClick}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        CSE
      </button>

      {showSections && (
        <div className="flex flex-col">
          <div className="flex items-center justify-between mt-8">
            <div>
              <h2 className="mt-4">FIRST YEAR</h2>
              <p>Content for first year..</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 1')} className="cursor-pointer">
              NOTES & PYQ
            </button>
          </div>

          {selectedButton === 'Functional Button 1' && renderSemesterButtons()}

          <div className="flex items-center justify-between mt-8">
            <div>
              <h2>SECOND YEAR</h2>
              <p>Content for second year...</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 2')} className="cursor-pointer">
              NOTES & PYQ
            </button>
          </div>

          {selectedButton === 'Functional Button 2' && renderSemesterButtons()}

          <div className="flex items-center justify-between mt-8">
            <div>
              <h2>THIRD YEAR</h2>
              <p>Content for third year...</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 3')} className="cursor-pointer">
              NOTES & PYQ
            </button>
          </div>

          {selectedButton === 'Functional Button 3' && renderSemesterButtons()}

          <div className="flex items-center justify-between mt-8">
            <div>
              <h2>FOURTH YEAR</h2>
              <p>Content for fourth year...</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 4')} className="cursor-pointer">
              NOTES & PYQ
            </button>
          </div>

          {selectedButton === 'Functional Button 4' && renderSemesterButtons()}
        </div>
      )}
    </div>
  );
}
