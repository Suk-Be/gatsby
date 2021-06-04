import React from 'react';
import styled from 'styled-components';
import { measurements } from '../../utils/css/cssMeasurements';

const StyledDiv = styled.div``;

const StyledGapHeaderFooter = styled(StyledDiv)`
  height: calc(
    100% - ${measurements.header.baseHeightMin}px -
      ${measurements.footer.baseHeightMin}px
  );
`;

export const GapHeaderFooter = ({ children }) => {
  return <StyledGapHeaderFooter>{children}</StyledGapHeaderFooter>;
};
