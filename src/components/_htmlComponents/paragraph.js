import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { measurements } from '../../utils/css/cssMeasurements';
import { flexFontSizeBase } from '../../utils/css/cssTypo';

const StyledParagraph = styled.p`
  width: 100%;
  padding-bottom: ${measurements.gridEmUnits.rowGap};
  font-size: ${flexFontSizeBase}
  );
`;

export const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};
