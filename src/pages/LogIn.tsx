import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  // const handleResponse = (responseData) => {
  //   if (responseData?.data) {
  //     alert(responseData.data);
  //     navigate('/');
  //   } else if (responseData?.error) {
  //     alert(responseData.error);
  //   }
  // };
  //
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const logIndata = {
  //     email: formData.get('email') as string,
  //     password: formData.get('password') as string,
  //   };
  // };

  return (
    <form
      // onSubmit={onSubmit}
    >
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" />
    </form>
  );
};

export default LogIn;
