import React from 'react';
import styled from 'styled-components';

const StyledlSelect = styled.select``;

export const Select = ({ children }) => {
  return <StyledlSelect>{children}</StyledlSelect>;
};
