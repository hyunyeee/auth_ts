import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">User List</Link>
        <Link to="/log-in">LogIn</Link>
        <Link to="/sign-up">SignUp</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
