import styled from 'styled-components';

export const PlaneWrapper = styled.div`
  height: 30vh;
  width: 100%;
  overflow: hidden;

  background-color: var(--secondary-background-color);
  display: flex;
  place-items: center;

  > svg {
    margin-left: 2rem;
  }
  animation: travel 3s linear;
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
