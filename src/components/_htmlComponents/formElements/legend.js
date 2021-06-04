import React from 'react';
import styled, { css } from 'styled-components';
import { isVisuallyHidden } from '../../../utils/css/cssUtils';

const StyledLegend = styled.legend`
  ${props =>
    props.isVisuallyHidden &&
    css`
      ${isVisuallyHidden}
    `}
`;

// eslint-disable-next-line no-shadow
export const Legend = ({ isVisuallyHidden, content }) => {
  return (
    <StyledLegend isVisuallyHidden={isVisuallyHidden}>{content}</StyledLegend>
  );
};
