import flightApi from '.';

export type Identification = {
  id: string;
  callsign: string;
  number: {
    default: string;
  };
};

type Status = {
  generic: {
    status: {
      text: string;
      color: string;
      type: string;
    };
  };
};

type Image = {
  src: string;
  copyright: string;
  source: string;
};

type Images = {
  thumbnails: Image[];
  medium: Image[];
  large: Image[];
};

type Model = {
  code: string;
  text: string;
};

export type Aircraft = {
  model: Model;
  registration: string;
  images: Images;
};

export type Airline = {
  name: string;
  short: string;
  code: {
    iata: string;
    icao: string;
  };
};

type Locale = {
  name: string;
  website: string;
  info: {
    terminal: string;
    gate: string;
  };
  code: {
    iata: string;
    icao: string;
  };
};

type Airport = {
  origin: Locale;
  destination: Locale;
};

type Time = {
  scheduled: {
    departure: number;
    arrival: number;
  };
};

export interface IDetailedFlight {
  identification: Identification;
  status: Status;
  aircraft: Aircraft;
  airline: Airline;
  airport: Airport;
  time: Time;
}

const getDetailedFlight = (id: string) =>
  flightApi
    .get<IDetailedFlight>(`/flight/${id}`)
    .then(({ data }) => data)
    .then(data => data);

export default getDetailedFlight;
