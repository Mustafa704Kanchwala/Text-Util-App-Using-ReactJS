import { useState } from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
//import About from './components/About';
import TextForm from './components/TextForm';
function App() {
  const [mode , setMode] = useState("light");
  const [alert , setMsg] = useState(null);

  const showAlert = (message , type)=>{
    setMsg({
      msg: message,
      typ: type  
    })
    setTimeout(() => {
      setMsg(null);
    }, 2500);
  }

  const toggleMode = ()=>{
    
    if(mode === "light"){
      document.body.style.backgroundColor = "#0f245b";
      document.body.style.color = "white";
      setMode("dark");
      showAlert(" :Dark mode enable","success"); 
    }
    else if(mode === "dark"){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
      setMode("light");
      showAlert(" :Light mode enable","success")
    }
  }
  
  return (
    <>
      <div>
      
        <Navbar propTitle="Text-Util-App" navOption1 = "Home" navOption2 = "About" mode={mode}  toggleMode = {toggleMode} />
        <Alert alert = {alert}/>
        <TextForm showAlert = {showAlert}/>
        
      </div>

    </>
  );
}

export default App;
