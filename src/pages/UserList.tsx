import { User } from '../interfaces/User';
import { useUser } from '../hooks/useUser';

const UserList = () => {
  const { data, isLoading, isError } = useUser('/api/users');

  if (isLoading) return <div>Loading... </div>;
  if (isError) return <div>로딩 실패!</div>;
  if (!data) return <div>데이터가 없어요!</div>;

  return (
    <>
      {data && (
        <div>
          {data?.map((user: User) => (
            <div key={user.username}>
              <div>{user.email}</div>
              <div>{user.username}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
