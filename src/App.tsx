import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">User List</a>
        <a href="/log-in">LogIn</a>
        <a href="/sign-up">SignUp</a>
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
