import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const PlaneWrapper = styled(animated.div)`
  height: 30vh;
  width: 95%;
  overflow: hidden;
  margin-left: 2rem;

  background-color: var(--secondary-background-color);
  display: flex;
  place-items: center;

  /* animation: travel 1s linear; */
  z-index: 999;
  position: absolute;

  @keyframes travel {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;
