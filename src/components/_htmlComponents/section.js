import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../utils/css/cssColors';
import { measurements } from '../../utils/css/cssMeasurements';

const StyledSection = styled.section`
  ${props =>
    props.isToServer &&
    css`
      position: fixed;
      bottom: 35px;
      left: 0;
      width: calc(100%);
      margin: 0;
      border-top: ${measurements.baseRowGapMin}px solid
        ${colors.background.primary};
      border-bottom: ${measurements.baseRowGapMin}px solid
        ${colors.background.primary};
      background: ${colors.background.primary};
    `}
`;

// eslint-disable-next-line no-shadow
export const Section = ({ isToServer, children }) => {
  return <StyledSection isToServer={isToServer}>{children}</StyledSection>;
};

Section.propTypes = {
  isToServer: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
