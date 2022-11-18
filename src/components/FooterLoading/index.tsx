import React, { FC } from 'react';

import { FaPlane } from 'react-icons/fa';
import { PlaneWrapper } from './style';

export const LoadingFooter: FC = () => {
  return (
    <PlaneWrapper>
      <FaPlane color={'white'} size={32} />
    </PlaneWrapper>
  );
};
