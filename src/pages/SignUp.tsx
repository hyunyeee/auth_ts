import { useNavigate } from 'react-router-dom';
import { postForm } from '../api/Auth';

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signUpdata = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      username: formData.get('username') as string,
    };

    postForm('/api/auth/register', signUpdata);
    navigate('/log-in');
    alert('유저가 성공적으로 생성되었습니다.');
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="username" placeholder="Username" />
      <button type="submit" />
    </form>
  );
};

export default SignUp;
