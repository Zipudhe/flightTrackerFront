import styled from 'styled-components';

export const InfoWrapper = styled.div`
  max-width: 315px;
  max-height: 377px;

  width: 215px;
  height: 90%;

  min-width: 190px;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
  border-radius: 8px;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 45%;
  border-radius: 8px;
  text-align: center;

  p {
    position: relative;
    top: calc(100% - 170px);
    width: 100%;
    color: white;
    white-space: nowrap;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const FlightDiv = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  background-color: var(--secondary-background-color);
  border-radius: 8px;

  p {
    text-align: center;
    white-space: break-spaces;
    color: white;
  }
`;

export const Link = styled.a``;

export const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  height: min-content;
  max-height: 44px;
  width: 90%;
  max-width: 217px;
`;

export const ButtonDiv = styled.div`
  width: 50%;
  max-width: 130px;

  height: 8%;
  max-height: 31px;

  background-color: var(--button-background-color);
  font-color: var(--button-font-color);

  padding: 8px 24px;
  border-radius: 24px;

  display: grid;
  place-items: center;

  cursor: pointer;
  transition: opacity 500ms ease;

  :hover {
    opacity: 0.8;
  }
`;
