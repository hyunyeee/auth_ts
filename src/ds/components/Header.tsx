import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../icons/Lion.svg';
import TabBar, { Tabs } from './TabBar';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tabs[];
  tabStatus: TabStatus;
}

export interface TabStatus {
  login: boolean;
  register: boolean;
}

export const Header = ({ onClickLogo, tabs, tabStatus }: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        <TabBar tabs={tabs} tabStatus={tabStatus} />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 70px;
  border-bottom: ${({ theme }) => theme.color.gray3};
  position: sticky;
  background-color: #fff;
  top: 0;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  max-width: 1280px;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
