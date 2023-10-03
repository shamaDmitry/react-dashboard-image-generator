import { useLocation, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_NAME } from '../config';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    console.log(e);

    localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, true);

    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 2000)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-5'>
      {
        location.state?.message && <p className="text-white">
          {location.state?.message}
        </p>
      }

      <h1>
        LOGIN
      </h1>

      <button
        className="p-2 border"
        onClick={handleLogin}
      >
        go login
      </button>
    </div>
  );
}

export default Login;
