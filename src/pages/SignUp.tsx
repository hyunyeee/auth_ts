import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/log-in');
    alert('유저가 성공적으로 생성되었습니다.');
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Username" />
      <button type="submit" />
    </form>
  );
};

export default SignUp;
