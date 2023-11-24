import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserList from './pages/UserList';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { GlobalFonts } from './styles/GlobalFonts';
import { theme } from './ds/theme';
import { Tabs } from './ds/components/TabBar';
import { Header } from './ds/components/Header';

function App() {
  const navigate = useNavigate();

  const [tabStatus, setTabStatus] = useState({
    login: false,
    register: false,
  });

  const tabs: Tabs[] = [
    {
      id: 0,
      title: '로그인',
      onClick: () => {
        navigate('/log-in');
        setTabStatus({ login: true, register: false });
      },
      path: 'login',
    },
    {
      id: 1,
      title: '회원가입',
      onClick: () => {
        navigate('/sign-up');
        setTabStatus({ login: false, register: true });
      },
      path: 'register',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Header
        onClickLogo={() => {
          navigate('/');
          setTabStatus({ login: false, register: false })
        }}
        tabs={tabs}
        tabStatus={tabStatus}
      />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
