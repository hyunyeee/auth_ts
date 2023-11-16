import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/');
    alert('로그인에 성공하였습니다.');
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit" />
    </form>
  );
};

export default LogIn;
