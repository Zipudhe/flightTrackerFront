import React, { FC, useState } from 'react';
import { IDetailedFlight } from '../../services/getDetailedFlight';
import FlightInfo from '../FlightInfo';

import {
  HeaderText,
  EnumTextTypes,
  AnimatedHeader,
} from '../../components/Typography';

import { useSpring, config } from '@react-spring/web';

interface IFlights {
  isLoading: Boolean;
  flights: IDetailedFlight[];
  setFlight: React.Dispatch<React.SetStateAction<IDetailedFlight | undefined>>;
}

export const Flights: FC<IFlights> = ({ isLoading, flights, setFlight }) => {
  if (isLoading) {
    const [flip, setFlip] = useState(false);
    const animatedProps = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 50,
      config: config.molasses,
      onRest: () => setFlip(!flip),
    });
    return <AnimatedHeader style={animatedProps}> Loading...</AnimatedHeader>;
  }

  if (flights.length == 0) {
    return (
      <HeaderText type={EnumTextTypes.secondary}>
        Nenhum voo próximo encontrado
      </HeaderText>
    );
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
