import React from 'react';
import styled from 'styled-components';

const StyledOption = styled.option``;

export const Option = ({ children }) => {
  return <StyledOption>{children}</StyledOption>;
};
