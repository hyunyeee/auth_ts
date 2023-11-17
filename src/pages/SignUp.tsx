import { User } from '../interfaces/User';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import { postFetcher } from '../api/auth';

const SignUp = () => {
  const { mutate } = useSWRMutation(postFetcher);
  const navigate = useNavigate();

  const handleResponse = (responseData) => {
    if (responseData?.data) {
      alert(responseData.data);
      navigate('/log-in');
    } else if (responseData?.error) {
      alert(responseData.error);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const signUpdata: User = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      username: formData.get('username') as string,
    };

    mutate('/api/auth/register', signUpdata)
      .then(handleResponse)
      .catch((error) => {
        console.error('회원가입 과정에서 오류 발생:', error);
      });
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
