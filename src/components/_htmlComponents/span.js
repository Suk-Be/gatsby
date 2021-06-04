import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { measurements } from '../../utils/css/cssMeasurements';
import {
  experimentalBackgroundYingYang,
  gradientBackground,
  isRowPair,
} from '../../utils/css/cssUtils';

export const StyledSpan = styled.span`
  ${props =>
    props.isLogin &&
    css`
      ${isRowPair};
      margin-top: ${measurements.gridEmUnits.rowGap};
    `}
   
   ${props =>
     props.isToServer &&
     css`
       ${isRowPair};
     `}
    
  ${props =>
    props.isVideoDummy &&
    css`
      width: 100%;
      height: auto;
      min-height: 300px;
      display: inline-block;

      background: ${experimentalBackgroundYingYang};
      background: ${gradientBackground};
    `}
`;

export const Span = ({
  // eslint-disable-next-line no-shadow
  isLogin,
  isToServer,
  isVideoDummy,
  children,
}) => {
  return (
    <StyledSpan
      isLogin={isLogin}
      isVideoDummy={isVideoDummy}
      isToServer={isToServer}
    >
      {children}
    </StyledSpan>
  );
};

Span.propTypes = {
  isLogin: PropTypes.bool,
  isToServer: PropTypes.bool,
  isVideoDummy: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
