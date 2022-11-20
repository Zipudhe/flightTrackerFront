import React, { FC, Suspense, memo } from 'react';
import {
  InfoWrapper,
  FlightDiv,
  Image,
  ImageDiv,
  Link,
  InformationDiv,
  ButtonDiv,
} from './styles';

import {
  Airline,
  Aircraft,
  Identification,
} from '../../services/getDetailedFlight';

import { Text, EnumTextTypes, EnumTextSize, ButtonText } from '../Typography';

interface IFlighInfo {
  airline: Airline;
  aircraft: Aircraft;
  identification: Identification;
}

interface IFlightDiv {
  flightData: IFlighInfo;
  onClick?: React.MouseEventHandler;
  onBlur?: React.FocusEventHandler;
}

export const FlightInfo: FC<IFlightDiv> = ({ flightData, onClick, onBlur }) => {
  return (
    <InfoWrapper>
      <Suspense fallback={() => <h1> Carregando... </h1>}>
        <ImageDiv>
          <Image
            src={
              flightData.aircraft.images &&
              flightData.aircraft.images.thumbnails[0].src
            }
            alt={
              flightData.aircraft.images
                ? flightData.aircraft.images.thumbnails[0].source
                : flightData.aircraft.model.text
            }
          />
          {/* <p> {flightData.aircraft.images.thumbnails[0].copyright} </p> */}
        </ImageDiv>
        <FlightDiv>
          <InformationDiv>
            <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
              CALLSIGN:
            </Text>
            <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
              {flightData.identification.callsign}
            </Text>
          </InformationDiv>
          <InformationDiv>
            <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
              AERONAVE:
            </Text>
            <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
              {flightData.aircraft.model.text}
            </Text>
          </InformationDiv>
          <ButtonDiv onClick={onClick}>
            <ButtonText> Detalhar </ButtonText>
          </ButtonDiv>
        </FlightDiv>
      </Suspense>
    </InfoWrapper>
  );
};

export default memo(FlightInfo);

{
  /* <Link
href={`https://flightradar24.com/${flightData.identification.id}`}
target='_blank'
rel='noopener noreferrer'
>
Detalhar
</Link> */
}
