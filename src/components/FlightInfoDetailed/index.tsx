import React, { FC, lazy, useEffect, useState } from 'react';

import { IDetailedFlight } from '../../services/getDetailedFlight';
import { forceLoading } from '../../Utils/forceLoading';

import { Wrapper, ContentPlaceHolder } from './style';

import { HeaderText, EnumTextTypes } from '../Typography';

const FlightFullInfo = lazy(() => import('../FlightFullInfo'));
// import FlightFullInfo from '../FlightFullInfo';
import { LoadingFooter } from '../FooterLoading';

interface IFlightInfoDetailed {
  data?: IDetailedFlight;
}

export const DetailedFlightInfo: FC<IFlightInfoDetailed> = ({ data }) => {
  const [isLoading, setILoading] = useState(false);

  useEffect(() => {
    setILoading(true);
    forceLoading(1400).then(() => setILoading(false));
  }, [data]);

  if (!data) {
    return (
      <Wrapper>
        <HeaderText type={EnumTextTypes.primary}> Detalhes do voo </HeaderText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {isLoading && <LoadingFooter />}
      <FlightFullInfo data={data} />
    </Wrapper>
  );
};

export default DetailedFlightInfo;
