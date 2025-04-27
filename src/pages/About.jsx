import React from 'react';
import Navbar from '../components/Navbar';
import './About.css'
import Card from '../components/Card';

export default function About() {
  return (
    <div>
      <div className='aboutPageNav'><Navbar /> </div>

      <div className='aboutPage'>

        {/* WELCOME GREET  */}
        <div className='welcomeGreet'>
          <div className='welcomeGreetContent'>
            <h2 >WELCOME TO</h2>
            <h1>Exammate</h1>
          </div>
        </div>

        {/* ABOUT WEBSITE  */}
        <div className='aboutWebsite'>

          <div className='leftSide'>
            <h1>WE SATISFY YOUR QUEST</h1>
          </div>

          <div className='rightSide'>
            <p>
              <strong>Exammate </strong>
              is designed with an aim to satisfy quest of every aspirant and student, who has hunger for knowledge attainment.
            </p>

            <ul>
              <li> <strong>We have</strong> put up immense efforts in making this helpful for students who have various sources to study from but
                ultimately end up in confusion.</li>
              <li><strong>This platform</strong> is one stop solution for all those who come within a lot of mess and find it chaotic to gain all the
                required study material.</li>
              <li><strong>This is</strong> a foundation we have laid after witnessing all the struggles that a student faces with regard to find the pe=revious year papers of UIT RGPV Bhopal. </li>
              <li><strong>Hereby</strong> presenting a platform for all the students who will be able to get refined study material and pyqs with no more obstacle
                that may arise between them and their knowledge with fruitful results. </li>
            </ul>

          </div>
          </div>

          <hr />

          {/* OUR TEAM  */}
          <div className='ourTeam'>

          <div className='TeamHeading'>
            <h1>OUR TEAM MEMBERS</h1>
            <div>
            <p>People who made this happen</p>
            </div>
          </div>

          <div className='teamMembers'>
            <Card name="Aditi Tiwari" rollNo="0101CS211008" college="UIT RGPV" email='aditi28tiwari@gmail.com' githubLink='adititiwari28' linkedin='aditi-tiwari-1b4131229'/>
            <Card name="Chandrashekhar Choudha" rollNo="0101CS211040" college="UIT RGPV" email='lucky291102@gmail.com' githubLink='lucky29-git' linkedin='chandrashekhar-in/'/>
            <Card name="Chinmayee Sharma" rollNo="0101CS211041" college="UIT RGPV" email='chinmayee7697@gmail.com' githubLink='Chinmayee7697' linkedin='chinmayee-sharma-6252b8225'/>
            <Card name="Jiya Patidar" rollNo="0101CS211059" college="UIT RGPV" email='jiyapatidarkasrawad@gmail.com' githubLink='jiya0111' linkedin='jiya-patidar-01a212225 '/>
          </div>

        </div>

        {/* FOOTER  */}
        <footer>
        <div>
        <p>Made with ❤️ By- Team ExamMate</p>
        </div>

        <div className='mt-3'>
          Copyright © <strong>Exam Mate</strong>. All Rights Reserved
        </div>
        </footer>


      </div>

    </div>
  );
}
