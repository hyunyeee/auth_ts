import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../api/auth';
import { LoginData } from '../interfaces/User';
import { yupResolver } from '@hookform/resolvers/yup';
import { login_schema } from '../validation/schema';

const LogIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger: hookTrigger,
    formState: { errors },
  } = useForm<LoginData>({
    mode: 'onSubmit',
    resolver: yupResolver(login_schema),
  });

  const onSubmit: SubmitHandler<LoginData> = (item, event) => {
    console.log(item);
    event?.preventDefault();
    trigger(item);
  };

  const { trigger } = useSWRMutation('/api/auth/login', postFetcher, {
    onSuccess: async (data) => {
      const response = await data;
      if (response?.data) {
        alert(response?.data?.message);
        navigate('/');
      }
      if (response?.error) {
        alert(response?.error?.message);
      }
    },
  });

  return (
    <LogInWrapper>
      <Title>로그인</Title>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputBox>
            <Label>이메일</Label>
            <Input
              $isError={errors?.email?.message}
              autoFocus
              required
              type="email"
              {...register('email')}
              onBlur={() => hookTrigger('email')}
            />
            <HelperText>{errors?.email?.message}</HelperText>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <Input
              $isError={errors?.password?.message}
              required
              type="password"
              {...register('password')}
              onBlur={() => hookTrigger('password')}
            />
            <HelperText>{errors?.password?.message}</HelperText>
          </InputBox>
        </InputWrapper>
        <SubmitBtn type="submit">로그인</SubmitBtn>
      </form>
    </LogInWrapper>
  );
};

const LogInWrapper = styled.div`
  width: 500px;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.gray1};
`;
const InputWrapper = styled.div`
  margin: 70px 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Label = styled.label`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.gray1};
`;

interface InputProps {
  $isError?: boolean | string;
}
const Input = styled.input<InputProps>`
  padding: 14px 16px;
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? theme.color.red : theme.color.gray3)};
  border-radius: 12px;
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.gray1};
`;
const HelperText = styled.p`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.red};
`;
const SubmitBtn = styled.button`
  width: 500px;
  height: 54px;
  color: white;
  ${({ theme }) => theme.typography.title1};
  border-radius: 12px;
  background: linear-gradient(93deg, #cf0 -3.88%, #40ffaf 103.41%);
`;
export default LogIn;
