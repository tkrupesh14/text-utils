import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#000a29';
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
   <Navbar title = "TextUtils" mode= {mode} toggleMode={toggleMode}/>
   <div className="container my3">
    
   <TextForm heading = "Enter The Text" mode= {mode}/>
   {/* <About heading = "About TextUtils"/> */}
   </div>

   </>
  );
}

export default App;
