import { User } from '../interfaces/User';
import { useUser } from '../hooks/useUser';
import styled from 'styled-components';
import BIG_LION from '../ds/icons/BigLion.svg';

const UserList = () => {
  const { data, isLoading, isError } = useUser('/api/users');

  if (isLoading) return <div>Loading... </div>;
  if (isError) return <div>로딩 실패!</div>;
  if (!data) return <div>데이터가 없어요!</div>;

  return (
    <>
      {data && (
        <PageContainer>
          <Icon src={BIG_LION} />

          <UserWrapper>
            {data?.map((user: User) => (
              <UserBox key={user.username}>
                <Email>{user.email}</Email>
                <Username>{user.username}</Username>
              </UserBox>
            ))}
          </UserWrapper>
        </PageContainer>
      )}
    </>
  );
};

const PageContainer = styled.div`
  width: 1200px;
  height: auto;
  margin: 60px auto 0;
`;
const Icon = styled.img`
  display: block;
  margin: 0 auto;
`;
const UserWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const UserBox = styled.div`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 #e5e8f0;
`;
const Email = styled.p`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.gray2};
`;
const Username = styled.p`
  margin-top: 12px;
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.gray1};
`;
export default UserList;
