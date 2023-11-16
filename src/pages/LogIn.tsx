import { useNavigate } from 'react-router-dom';
import { postLogInForm } from '../api/Auth';

const LogIn = () => {
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const logIndata = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      const responseData = await postLogInForm('/api/auth/login', logIndata);
      if (responseData?.data) {
        alert(responseData.data);
        navigate('/');
      } else if (responseData?.error) {
        alert(responseData.error);
      }
    } catch (error) {
      console.error('로그인 과정에서 오류 발생:', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" />
    </form>
  );
};

export default LogIn;
