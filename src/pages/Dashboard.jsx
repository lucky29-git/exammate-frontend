import React, { useContext } from 'react';
import { useState } from 'react';
import {RecoilRoot, useRecoilValue} from 'recoil'
import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import HeroSection from '../components/HeroSection';
import './Dashboard.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import RenderPaper from '../components/Render';
import { paperAtom, shouldRenderAtom } from '../store/atom/paperContext';
export default function Dashboard() {
  const [ papers, setPapers] = useState([])
  // const obj = useContext(PaperContext)
  
  return (
    <div style={{background:' #f6eadd'}}>
      <div className="container fulpage" style={{paddingBottom:'5rem'}}>
        <RecoilRoot>
        <External/>
        </RecoilRoot>
      </div>
    </div>
  );
}

function External(){
  const pap = useRecoilValue(paperAtom)
  const shouldRender = useRecoilValue(shouldRenderAtom)
  return <div >
        <Navbar />
        {/* <MainPage /> */}
        <HeroSection/>
        {shouldRender ? pap.map(function(ele){
          return <RenderPaper key={ele.id} title={ele.title} semester={ele.semester} files={ele.files} subject={ele.subject} />
        }) : <div></div> }
        
        {/* <RenderPaper /> */}
  </div>
}
