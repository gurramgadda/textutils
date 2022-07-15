import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alerts from "./components/Alerts";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      message : message,
      type : type
      })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const ToggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e0b0b';
      document.body.style.color = 'grey';
      showAlert("Enabled Dark Mode",'success');
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Disabled Dark Mode",'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar Title = "TextUtils"  aboutText = "About TextUtils" mode = {mode} ToggleMode = {ToggleMode} />
      <Alerts alert={alert}/>
      <div className="container my-3 ">
        <Routes>
          <Route path='/' element={<TextForm heading="Welcome to TextUtils you can Convert your Text here" mode = {mode} showAlert={showAlert} />}>
          </Route>
          <Route path='/about' element={<About mode = {mode}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
