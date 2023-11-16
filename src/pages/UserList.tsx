import { useUser } from '../api/Auth';
import { User } from '../api/Auth';

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
            <div>
              <div key={user.email}>{user.email}</div>
              <div key={user.username}>{user.username}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
