import React, { useEffect, useState } from 'react'
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';


function Home() {

  const [loggedInUser,setloggedInUser]=useState('');


  useEffect(()=>{
    setloggedInUser(localStorage.getItem('name'));
  },[])

const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');

  handleSuccess('User Logged out');

  window.location.href = "/login"; 
};

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </div>
  )
}

export default Home