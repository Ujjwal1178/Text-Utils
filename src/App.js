// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";



// import About from './components/About';

function App() {
  const [mode,setMode] = useState('light');
  const [btn,setbtn] = useState("Enable Dark Mode");
  const [btnClr,setBtnClr] = useState('dark') ;
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setbtn("Disable Dark Mode");
      setBtnClr('light')
      document.body.style.backgroundColor='#343a40';
    }else{
      setMode('light');
      setbtn("Enable Dark Mode");
      setBtnClr('dark');
      document.body.style.backgroundColor='white';
    }
  }
  
  
  return (
    <>
      
          <Navbar title="TextUtils" about="About Textutils" clr={btnClr} mode={mode} toggleMode={toggleMode} text={btn}/>
          <Alert alert="Hey! Welcome to this application. I hope you'll have a wonderful experience here."/>
          <div className="container">
   
        
          <TextForm  heading="Enter the text to analyze" clr={btnClr}/>
          
          </div>
         
    </>
  );
}

export default App;



