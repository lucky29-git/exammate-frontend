import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { createContext } from 'react';
import { useRecoilState } from 'recoil';
import { paperAtom, shouldRenderAtom } from '../store/atom/paperContext';
import './QuestionPaper.css'
const QuestionPaperForm = ({ onSubmit }) => {
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectsForSemester, setSubjectsForSemester] = useState([]);

  const semesterOptions = [
    { value: '1', label: 'Semester 1', subjects: ['FOCSE', 'basic computer eng'] },
    { value: '2', label: 'Semester 2', subjects: ['chemistry', 'electrical'] },
    { value: '3', label: 'Semester 3', subjects: ['data structures', 'cso', 'dcd', 'discrete structure', 'edc'] },
    { value: '4', label: 'Semester 4', subjects: ['ADA', 'ADC', 'Microprocessor', 'TOC'] },
    { value: '5', label: 'Semester 5', subjects: ['DBMS', 'OS', 'DC','Cyber Security', 'CGM','Essence of Indian Traditional Knowledge'] },
    { value: '6', label: 'Semester 6', subjects: ['ACA', 'CN', 'OOAD','PM','PPL'] },
    { value: '7', label: 'Semester 7', subjects: ['Compiler design', 'Information Storage Management', 'IOT', 'Network Security', 'Software Engg'] },
    { value: '8', label: 'Semester 8', subjects: ['Network Management', 'Soft Computing', 'Web Engineering'] },
    // Add more semester options with corresponding subjects
  ];

  const handleSemesterChange = async(selectedSemester) => {
    setSemester(selectedSemester);
    const selectedSemesterObj = semesterOptions.find((option) => option.value === selectedSemester);
    setSubjectsForSemester(selectedSemesterObj ? selectedSemesterObj.subjects : []);
    setSubject('');
  };

  const [pap, setPap] = useRecoilState(paperAtom)
  const [shouldRender, setShouldRender] = useRecoilState(shouldRenderAtom)
  const handleSubmit =async (e) => {
    e.preventDefault();
    // onSubmit(semester, subject);

    let obj={
      semester,
      subject,
    }
    // useEffect(() => {
    let output=await axios.post('https://exammate-backend-seven.vercel.app/paper', obj)
    // }, [])
    // console.log(output);
  
    const dataArray =Object.values(output.data.value);
    setPap(dataArray)
    console.log("dataaa " ,dataArray);
    // console.log(output.data.value[0].semester);
    // console.log(output.subject);
    setShouldRender(true)
  };

  return (
    <div className='flex justify-center '>
      <form onSubmit={handleSubmit} className='mt-12'>
        <div className='grid grid-cols-3 gap-14'>

        <div>
        <label htmlFor="semester" className='font-semibold mt-2 me-2'><section className='text'>Select Semester:</section> </label>
        <select id="semester" value={semester} onChange={(e) => handleSemesterChange(e.target.value)}>
        <option value="">Select</option>
        {semesterOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        </select>
        </div>
        
        <div>
        <label htmlFor="subject" className='font-semibold mt-2 me-2'><section className='text'>Select Subject: </section></label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select</option>
        {subjectsForSemester.map((subj) => (
          <option key={subj} value={subj}>{subj}</option>
        ))}
        </select>
        </div>

        <button type="submit" >Get Question Papers & Notes</button>
        </div>
        
    </form>
    </div>
    
  );
};

export default QuestionPaperForm;
