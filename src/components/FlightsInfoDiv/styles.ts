import styled from 'styled-components';

export const FlightInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 25px;

  height: 44vh;
  min-height: 30vh;
  max-height: 350px;
  width: 80vw;
  margin: 12px;

  overflow-x: scroll;
  scrollbar-width: none;
`;
