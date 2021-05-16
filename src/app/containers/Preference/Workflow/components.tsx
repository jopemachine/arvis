import styled from 'styled-components';

export const EmptyListDesc = styled.div`
  margin-left: 11px;
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const WorkflowItemTitle = styled.div`
  color: #ffffff;
`;

export const WorkflowItemCreatorText = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #cccccc;
`;

export const OuterContainer = styled.div`
  height: 100vh;
  width: 100vh;
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #12151a;
  justify-content: flex-start;
`;

export const WorkflowListView = styled.div`
  overflow-y: auto;
  min-height: 150px;
`;

export const Header = styled.div`
  width: 50%;
  margin-top: 25px;
  height: 70px;
  color: #ffffff;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  user-select: none;
`;

export const WorkflowListViewFooter = styled.div`
  overflow-y: auto;
  width: 100vh;
  height: 7%;
  background-color: #222222;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WorkflowListOrderedList = styled.ol`
  background-color: #1f2228;
  border-radius: 10px;
  margin-left: 40px;
  margin-right: 25px;
  padding-bottom: 20px;
  padding-right: 30px;
  padding-top: 20px;
  overflow: auto;
  height: 78%;
`;

export const WorkflowItemContainer = styled.div`
  width: 300px;
  height: 65px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 68px;
  margin-bottom: 7px;
  user-select: none;
  position: relative;
`;

export const WorkflowDescContainer = styled.div`
  padding-left: 15px;
  margin-right: 10px;
  flex-grow: 2;
`;

export const WorkflowImg = styled.img`
  user-select: none;
  object-fit: scale-down;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 14px;
  left: 15px;
`;
