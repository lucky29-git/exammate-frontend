import { Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Dashboard from './pages/Dashboard.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Navbar from './components/Navbar.jsx'
import MainPage from './components/MainPage.jsx';
import Resources from './pages/Resources.jsx';
import Notes from './pages/Notes.jsx';
import About from './pages/About.jsx';
function App() {

  return (
  //   <div className='container'>
  //   <Navbar />
  //   <MainPage />
  // </div>
  
    
    <BrowserRouter>
    <Routes>
      <Route path='dashboard' element = {<Suspense fallback={"Loading..."} ><Dashboard/></Suspense>} />
      <Route path='signin' element = {<Suspense fallback={"Loading..."} ><Signin/></Suspense>} />
      <Route path='signup' element = {<Suspense fallback={"Loading..."} ><Signup/></Suspense>} />
      <Route path='resources' element = {<Suspense fallback={"Loading..."} ><Resources /></Suspense>} />
      <Route path='notes' element = {<Suspense fallback={"Loading..."} ><Notes /></Suspense>} />
      <Route path='about' element = {<Suspense fallback={"Loading..."} ><About /></Suspense>} />
    </Routes>
    </BrowserRouter>

    
  )
}

function Dashboard2(){
      
  return <div>
      <div className='container'>
      <Navbar />
      <MainPage />
      </div>
  </div>
}

export default App
