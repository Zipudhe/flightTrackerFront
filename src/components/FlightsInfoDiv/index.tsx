import React, { FC, ReactNode } from 'react';

import { FlightInfoDiv } from './styles';

interface IFlightsDiv {
  children: ReactNode;
}

export const FlightsDiv: FC<IFlightsDiv> = ({ children }) => {
  return <FlightInfoDiv>{children}</FlightInfoDiv>;
};
