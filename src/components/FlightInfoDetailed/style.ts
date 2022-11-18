import styled from 'styled-components';

interface IWrapper {
  isLoading?: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  max-height: 300px;
  height: 30vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--secondary-background-color);
`;

export const ContentPlaceHolder = styled.span`
  font-size: 24px;
  color: black;
`;
