import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Alert from "./components/Alert";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      });

      setTimeout(() => {
          setAlert(null)
      },3000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#000a29';
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark";
   
     
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success")
      document.title = "TextUtils - Light"
    }
  }
  return (
    <>
    <BrowserRouter>
   <Navbar title = "TextUtils" mode= {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my3">

   <Routes>        
          <Route path="/about" element={   <About heading = "About TextUtils" mode = {mode}/>
} />    
          <Route path="/" element={<TextForm showAlert = {showAlert} heading = "Enter The Text" mode= {mode}/>} />
          </Routes>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
