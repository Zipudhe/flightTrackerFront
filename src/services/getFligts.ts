import flightApi from '.';

export type Flight = {
  id: string;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  ground_speed?: number;
  aircraft_code?: string;
  registration?: string;
  origin_airport_iata: string;
  destination_airport_iata: string;
  number?: string;
  airline_iata: string;
  airline_icao: string;
  callsign: string;
  icao_24bit: string;
};

export const getFlights = async () =>
  flightApi
    .get<Flight[]>('/')
    .then(({ data }) => data)
    .then(data => data);
