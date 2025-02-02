import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNewPerson from './Components/AddNewPerson'
import RetriveInformation from './Components/RetriveInformation';
function App() {
  
  let [switchPage, setSwitch]=useState(false);
  const AddhandleSwitch=()=>{
    setSwitch(false);
  }
  const gethandleSwitch=()=>{
    setSwitch(true);
  }
  return (
    <>
      <h2>Directory App</h2>
      <h4 onClick={AddhandleSwitch}>Store Employee Information</h4>
      <h4 onClick={gethandleSwitch}> Retrivie Employee Data</h4>
      {
        switchPage? <RetriveInformation/>:<AddNewPerson/>
      }
      
    </>
  )
}

export default App
