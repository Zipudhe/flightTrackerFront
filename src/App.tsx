import React, { useEffect, useState } from 'react';

import GlobalStyle from './GlobalStyles';

import { getFlights, Flight } from './services/getFligts';
import getDetailedFlight, {
  IDetailedFlight,
} from './services/getDetailedFlight';

import { FlightInfoDiv } from './components/FlightsInfoDiv/styles';
import { Header } from './components/Header';
import { Flights } from './components/Flights';

import DetailedFlightInfo from './components/FlightInfoDetailed';
import { MainWrapper } from './components/Wrapper';

type Circle = {
  radius: number;
  max_x: number;
  min_x: number;
  max_y: number;
  min_y: number;
};

interface IPosition extends GeolocationCoordinates {
  circle: Circle;
}

const App = () => {
  const [coordinates, setCoordinates] =
    useState<IPosition | undefined>(undefined);
  const [flights, setFlights] = useState<IDetailedFlight[]>([]);
  const [flight, setFlight] = useState<IDetailedFlight>();
  const [isFlightsLoading, setIsFlightsLoading] = useState<Boolean>(false);

  const getCircleCoordinates = (coords: GeolocationCoordinates) => {
    const max_y = coords.latitude + 3;
    const min_y = coords.latitude - 3;
    const max_x = coords.longitude + 3;
    const min_x = coords.longitude - 3;

    const circle = {
      radius: 0.1,
      max_x: Number(max_x.toFixed(6)),
      min_x: Number(min_x.toFixed(6)),
      max_y: Number(max_y.toFixed(6)),
      min_y: Number(min_y.toFixed(6)),
    } as Circle;
    return circle;
  };

  const positionHandler = async (position: GeolocationPosition) => {
    const circle = getCircleCoordinates(position.coords);
    // @ts-ignore
    position.coords['circle'] = circle;
    setCoordinates(position.coords as IPosition);

    const filteredFligts = await getFlights().then(flights => {
      const filteredFligts = flights.filter(flight => {
        if (
          flight.latitude &&
          flight.latitude < circle.max_y &&
          flight.latitude > circle.min_y
        ) {
          if (
            flight.longitude &&
            flight.longitude < circle.max_x &&
            flight.longitude > circle.min_x
          ) {
            return flight;
          }
        }
      });
      return filteredFligts;
    });

    handleFLights(filteredFligts);
  };

  const handleBlockLocation = () => {
    console.log('location not allowed');
  };

  useEffect(() => {
    setIsFlightsLoading(true);
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        positionHandler,
        handleBlockLocation,
      );
    } else {
      console.log('not supported');
    }
  }, []);

  // link para voo no fligtRadar: https://www.flightradar24.com/id
  // console.log('coordinates: ', coordinates);
  // ideia trackear aeronaves federais no brasil

  const handleFLights = (flights: Flight[]) => {
    console.log('handling fligt');
    const Fetches = [] as Promise<IDetailedFlight>[];

    flights.forEach(flight => {
      Fetches.push(getDetailedFlight(flight.id));
    });

    Promise.all(Fetches)
      .then(flights => setFlights(flights))
      .catch(err => console.error(err))
      .finally(() => setIsFlightsLoading(false));
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <MainWrapper>
        <Header>Veja pra onde estão indo os voos perto de você!</Header>
        <FlightInfoDiv>
          <Flights
            isLoading={isFlightsLoading}
            setFlight={setFlight}
            flights={flights}
          />
        </FlightInfoDiv>
        <DetailedFlightInfo data={flight} />
      </MainWrapper>
    </React.Fragment>
  );
};

export default App;
