import React from 'react';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul``;

export const UnorderedList = ({ children }) => {
  return <StyledUnorderedList>{children}</StyledUnorderedList>;
};
