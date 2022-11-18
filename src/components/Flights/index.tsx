import React, { FC } from 'react';
import { IDetailedFlight } from '../../services/getDetailedFlight';
import FlightInfo from '../FlightInfo';

import { HeaderText, EnumTextTypes } from '../../components/Typography';

interface IFlights {
  isLoading: Boolean;
  flights: IDetailedFlight[];
  setFlight: React.Dispatch<React.SetStateAction<IDetailedFlight | undefined>>;
}

export const Flights: FC<IFlights> = ({ isLoading, flights, setFlight }) => {
  if (isLoading) {
    return <HeaderText type={EnumTextTypes.primary}> Loading.... </HeaderText>;
  }

  if (!flights) {
    return <HeaderText type={EnumTextTypes.secondary}> No Fligts </HeaderText>;
  }

  return (
    <>
      {flights.map((flight, index) => (
        <FlightInfo
          key={index}
          flightData={flight}
          onClick={() => setFlight(flight)}
        />
      ))}
    </>
  );
};
