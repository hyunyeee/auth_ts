import * as yup from 'yup';
import Messages from './messages';

export const login_schema = yup.object().shape({
  email: yup.string().required(Messages.EMAIL_REQUIRED).email(Messages.EMAIL_ERROR), //이메일
  password: yup //비밀번호
    .string()
    .required(Messages.PASSWORD_REQUIRED), //비밀번호
});

export const signup_schema = yup.object().shape({
  email: yup.string().required(Messages.EMAIL_REQUIRED).email(Messages.EMAIL_ERROR), //이메일
  password: yup //비밀번호
    .string()
    .required(Messages.PASSWORD_REQUIRED), //비밀번호
  username: yup // 이름
    .string()
    .required(Messages.USER_NAME_REQUIRED),
});
