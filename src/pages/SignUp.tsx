import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../api/auth';
import { User } from '../interfaces/User';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<User>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<User> = (item, event) => {
    console.log(item);
    event?.preventDefault();
    trigger(item);
  };

  const { trigger } = useSWRMutation('/api/auth/register', postFetcher, {
    onSuccess: async (data) => {
      const response = await data;

      if (response?.data) {
        alert(response?.data?.message);
        navigate('/log-in');
      }
      if (response?.error) {
        alert(response?.error?.message);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        required
        type="text"
        {...register('username')}
        placeholder="Username"
      />
      <input required type="email" {...register('email')} placeholder="Email" />
      <input
        required
        type="password"
        {...register('password')}
        placeholder="Password"
      />
      <SubmitBtn type="submit">가입하기</SubmitBtn>
    </form>
  );
};

const SubmitBtn = styled.button`
  width: 500px;
  height: 54px;
  color: white;
  ${({ theme }) => theme.typography.title1};
  border-radius: 12px;
  background: linear-gradient(93deg, #cf0 -3.88%, #40ffaf 103.41%);
`;

export default SignUp;
