import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const removeClasses = ()=>{
  document.body.classList.remove('dark');
  document.body.classList.remove('light');
  document.body.classList.remove('success');
  document.body.classList.remove('warning');
  document.body.classList.remove('primary');
  document.body.classList.remove('danger');
}
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
         setAlert({
          msg:message,
          type:type
         });
         setTimeout(()=>{
          setAlert(null);
         },1000);
  }
  const changeMode = (cls)=>{
    removeClasses();
    console.log(cls);
    document.body.classList.add('bg-' +cls)
    // document.title = "Dark mode enable";
    // setInterval(()=>{
    //  document.title = "subcribe channel";
    // },1000);
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = "#16003B";
      document.body.style.color = "#fff";
      showAlert("Dark Mode Enabled....","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled....","success");
    }
  }
  return (
    <>
        <Router>
        <Navbar title="TextUtils" mode={mode} changeMode={changeMode}/>
        <Alert alert={alert}/>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter The Value For Analyze..." mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
