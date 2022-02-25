// import logo from './logo.svg';
import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
// import { useState } from 'react';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

 
  // wether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success " );
      document.title = 'TextUtilsddddddddddddddddd - Dark mode';
        
     
      
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success  ");
      document.title = 'TextUtils - Light mode';
    }
  }

 
  return (
   <>
   <Router>
   <Navbar title ="Textutils11" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode}/>
          </Route>
        </Switch>
   {/* <TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode}/> */}
   {/* <About/> */}
   </div>
   </Router>
   </>
  );
}

export default App;
