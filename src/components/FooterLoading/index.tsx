import React, { FC } from 'react';
import { useSpring } from '@react-spring/web';

import { FaPlane } from 'react-icons/fa';
import { PlaneWrapper } from './style';

export const LoadingFooter: FC = () => {
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: {
      friction: 100,
    },
  });

  return (
    <PlaneWrapper
      style={{
        transform: x.to(x => `translateX(${x}%)`),
      }}
    >
      <FaPlane color={'white'} size={32} />
    </PlaneWrapper>
  );
};
