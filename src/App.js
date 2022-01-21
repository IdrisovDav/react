import React from 'react'
import './App.css'
import Header from './companents/Header';
import Navbar from './companents/Navbar';
import Profile from './companents/Profile';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}



export default App;
