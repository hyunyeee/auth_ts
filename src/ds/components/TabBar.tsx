import styled from 'styled-components';
import { Tab } from './Tab';
import { TabStatus } from './Header';

export interface Tabs {
  id: number;
  title: string;
  onClick: () => void;
  path: 'login' | 'register';
}

interface TabBarProps {
  tabs: Tabs[];
  tabStatus: TabStatus;
}

const TabBar = ({ tabs, tabStatus }: TabBarProps) => {
  return (
    <Container>
      {tabs.map((item) => (
        <Tab
          key={item.id}
          isActive={tabStatus[item.path]}
          onClick={item.onClick}
        >
          {item.title}
        </Tab>
      ))}
    </Container>
  );
};

export default TabBar;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
