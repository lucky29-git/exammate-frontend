import React, { useState } from 'react';
import QuestionPaper from './QuestionPaper';
import './HeroSection.css';
const HeroSection = () => {
  const [questionPapers, setQuestionPapers] = useState([]);

  const handleSubmit = async (semester, subject) => {
    try {
      const response = await fetch(`/question-papers/${semester}/${subject}`);
      const data = await response.json();
      setQuestionPapers(data);
    } catch (error) {
      console.error('Error fetching question papers:', error);
    }
  };

  return (
    <div>
      
      <h1 className='font-bold text-center '>Previous Year Question Papers & Notes</h1>
      <QuestionPaper onSubmit={handleSubmit} />
      <div>
        {questionPapers.map((questionPaper) => (
          <div key={questionPaper._id}>
            <a href={`/download-question-paper/${questionPaper._id}`}>
              Question Paper {questionPaper.year}
            </a>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
