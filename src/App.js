import Login from './components/auth/login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='text-red-600'>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
