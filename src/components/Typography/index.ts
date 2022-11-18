import styled from 'styled-components';

export enum EnumTextTypes {
  primary = 'PRIMARY',
  secondary = 'SECONDARY',
}

export enum EnumTextSize {
  md = 16,
  lg = 18,
}

type TextTypes = {
  type: EnumTextTypes;
  size: EnumTextSize;
};

type HeaderTypes = {
  type: EnumTextTypes;
};

export const Text = styled.span<TextTypes>`
  color: ${props =>
    props.type == EnumTextTypes.primary
      ? 'var(--primary-font-color)'
      : 'var(--secondary-font-color)'};
  font-size: ${props => `${props.size}px`};
  padding: 4px 0;
`;

export const ButtonText = styled.span`
  color: var(--button-font-color);
  font-size: 16px;
`;

export const HeaderText = styled.h1<HeaderTypes>`
  color: ${props =>
    props.type == EnumTextTypes.primary
      ? 'var(--primary-font-color)'
      : 'var(--secondary-font-color)'};
  font-size: 32px;
  width: 50%;
  text-align: center;
  animation: pulse 500ms infinite;

  @keyframes pulse: {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;
