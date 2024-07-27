import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const username = Cookies.get('username')|| 'Guest';


  const handleLogout = () => {
    Cookies.remove('accessToken', { secure: true, sameSite: 'Strict' });
    Cookies.remove('username', { secure: true, sameSite: 'Strict' });
    Cookies.remove('userId', { secure: true, sameSite: 'Strict' });
    Cookies.remove('email', { secure: true, sameSite: 'Strict' });


    navigate('/signin');
  };

  const  handleAdmin =()=> {
    navigate('/admin');

  }
  

  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Welcome, {username}</h1>
      <button
        onClick={handleAdmin}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
      >
        admin
      </button>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
