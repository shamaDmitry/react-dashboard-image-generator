import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    localStorage.clear();

    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000)
  }

  return (
    <div>
      <h1 className="text-red-600">
        HOME
      </h1>

      <button
        className="border p-2"
        onClick={handleLogOut}
      >
        log out
      </button>
    </div>

  );
}

export default Home;
