import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isVisuallyHidden } from '../../../utils/css/cssUtils';
import { colors } from '../../../utils/css/cssColors';

const StyledlLabel = styled.label`
  ${props =>
    props.isVisuallyHidden &&
    css`
      ${isVisuallyHidden};
    `}
  ${props =>
    props.isAmountLabel &&
    css`
      color: ${colors.background.secondary};
    `}
`;

export const Label = props => {
  // eslint-disable-next-line no-shadow
  const [isVisuallyHidden, htmlFor, isAmountLabel, children] = [
    props.isVisuallyHidden,
    props.htmlFor,
    props.isAmountLabel,
    props.content,
    props.children,
  ];
  return (
    <StyledlLabel
      htmlFor={htmlFor}
      isVisuallyHidden={isVisuallyHidden}
      isAmountLabel={isAmountLabel}
    >
      {children}
    </StyledlLabel>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  isVisuallyHidden: PropTypes.bool,
  isAmountLabel: PropTypes.bool,
  content: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
