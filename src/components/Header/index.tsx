import React, { FC } from 'react';
import { HeaderDiv } from './style';
import { HeaderText, EnumTextTypes } from '../Typography';

export const Header: FC = ({ children }) => {
  return (
    <HeaderDiv>
      <HeaderText type={EnumTextTypes.primary}>{children}</HeaderText>
    </HeaderDiv>
  );
};
