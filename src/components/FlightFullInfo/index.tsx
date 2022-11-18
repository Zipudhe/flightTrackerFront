import React, { FC } from 'react';

import { IDetailedFlight } from '../../services/getDetailedFlight';
import { Text, EnumTextSize, EnumTextTypes } from '../Typography';

import {
  Wrapper,
  AircraftImgDiv,
  AircraftImg,
  AirportsInfoDiv,
  FlightInfoDiv,
  AirCraftDataDiv,
  StatusText,
  FlightStatusDetailDiv,
  FlightTimeDiv,
  LocationDiv,
  InformationDiv,
  AirportInformationDiv,
} from './style';

interface IFlightFullInfo {
  data: IDetailedFlight;
}

export const FlightFullInfo: FC<IFlightFullInfo> = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <AircraftImgDiv>
        <AircraftImg src={data.aircraft.images.medium[0].src} />
      </AircraftImgDiv>
      <AirCraftDataDiv>
        <InformationDiv>
          <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
            Modelo:
          </Text>
          <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
            {data.aircraft.model.text}
          </Text>
        </InformationDiv>
        <InformationDiv>
          <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
            Registro:
          </Text>
          <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
            {data.aircraft.registration}
          </Text>
        </InformationDiv>
      </AirCraftDataDiv>
      <FlightStatusDetailDiv>
        <InformationDiv>
          <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
            STATUS DE VOO:
          </Text>
          <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
            {data.status.generic.status.text}
          </Text>
        </InformationDiv>
        <InformationDiv>
          <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
            Short:
          </Text>
          <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
            {data.airline.short}
          </Text>
        </InformationDiv>
      </FlightStatusDetailDiv>

      <AirportsInfoDiv>
        <AirportInformationDiv>
          <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
            ORIGEM:
          </Text>
          <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
            {data.airport.origin ? data.airport.origin.name : '-'}
          </Text>
        </AirportInformationDiv>
        <AirportInformationDiv>
          <Text type={EnumTextTypes.secondary} size={EnumTextSize.md}>
            DESTINO:
          </Text>
          <Text type={EnumTextTypes.primary} size={EnumTextSize.lg}>
            {data.airport.destination ? data.airport.destination.name : '-'}
          </Text>
        </AirportInformationDiv>
      </AirportsInfoDiv>
    </Wrapper>
  );
};

export default FlightFullInfo;
