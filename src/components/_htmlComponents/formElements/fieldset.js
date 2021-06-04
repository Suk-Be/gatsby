import React from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset``;

export const Fieldset = ({ children }) => {
  return <StyledFieldset>{children}</StyledFieldset>;
};
