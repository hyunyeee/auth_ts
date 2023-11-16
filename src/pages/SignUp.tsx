import { useNavigate } from 'react-router-dom';
import { postSignUpForm } from '../api/Auth';

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signUpdata = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      username: formData.get('username') as string,
    };
    try {
      const responseData = await postSignUpForm(
        '/api/auth/register',
        signUpdata
      );
      if (responseData?.data) {
        alert(responseData.data);
        navigate('/log-in');
      } else if (responseData?.error) {
        alert(responseData.error);
      }
    } catch (error) {
      console.error('회원가입 과정에서 오류 발생:', error);
    }
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
