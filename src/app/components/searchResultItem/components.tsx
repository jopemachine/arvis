import styled from 'styled-components';

export const OuterContainer = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  flex-direction: column;
  width: 90%;
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
`;

export const SubTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
`;

export const IconImg = styled.img`
  object-fit: scale-down;
`;

export const OffsetText = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${process.platform === 'darwin' ? 15 : 20}px;
  white-space: nowrap;
  user-select: none;
`;
