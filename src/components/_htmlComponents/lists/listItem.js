import React from 'react';
import styled from 'styled-components';

const StyledlistItem = styled.li``;

export const ListItem = ({ children }) => {
  return <StyledlistItem>{children}</StyledlistItem>;
};
