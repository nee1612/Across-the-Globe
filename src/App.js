import './App.css';
import {useState} from 'react';
import Header from './components/Header'
import ComputerEngineeringBanner from './components/ComputerEngineeringBanner'
import MainSection from './components/MainSection'

function App() {
  // defining state variables and their setter functions using useState hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [groupJoined , setGroupJoined] = useState(false);

  return (
    <div className='min-w-screen min-h-screen'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ComputerEngineeringBanner/>
      <MainSection groupJoined={groupJoined}  setGroupJoined={setGroupJoined} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
}

export default App;
