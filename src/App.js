import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import FindDoctors from './components/FindDoctors';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState({
    msg : "Page Loaded",
    type : "success"
  });
  //const [alert, setAlert] = useState(null);

  const setAppAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

   setTimeout(() => {
      setAlert(null);
   }, 2000);

   setInterval(() => {
    document.Title = "Create your profile."
    }, 500);

  }
  return (
    <>
     <Navbar title="Alchemist" menu1="Find a Doctor" menu2="Appointent" menu3="Medicins" menu4="Surgery"/>
     <Alert alert={alert}/>
     <div className="container my-3"></div>
      <Routes>
        <Route path="/" element={<TextForm setAppAlert={setAppAlert} heading="Enter your text"/>} />
        <Route path="/FindDoctors" element={<FindDoctors/> } />
      </Routes>
    </>
  );
}

export default App;
