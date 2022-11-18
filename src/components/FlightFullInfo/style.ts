import styled from 'styled-components';

interface IText {
  color?: string;
  fontSize?: number;
}

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  max-height: 271px;
  /* border: 1px dashed black; */

  background-size: cover;
`;

export const AircraftImg = styled.img`
  height: 100%;
  border-radius: 8px;
`;

export const AircraftImgDiv = styled.div`
  /* border: 1px solid red; */
  height: 75%;
`;

export const FlightInfoDiv = styled.div`
  /* border: 1px solid blue; */
  height: 100%;
  width: 35%;
`;

export const FlightStatusDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding-top: 10px;
`;

export const Text = styled.span<IText>`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const StatusText = styled.span<IText>`
  color: ${({ color }) => (color ? color : 'black')};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  font-weight: bolder;

  margin-left: 10px;
`;

export const AirCraftDataDiv = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 16px;

  border-right: 1px solid black;
`;

export const FlightStatusDetailDiv = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 16px;

  border-right: 1px solid black;
`;

export const FlightTimeDiv = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;
`;

export const AirportsInfoDiv = styled.div`
  width: 23%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const LocationDiv = styled.div`
  height: 50%;
  width: 100%;

  display: grid;
  place-items: center;
`;

export const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50%;
  width: 100%;

  text-align: center;
`;

export const AirportInformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50%;
  width: 100%;

  text-align: center;
  border-bottom: 1px solid black;
`;
