import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { gridBreakpoints, grid } from '../../utils/css/cssUtils';

export const StyledLayout = styled.main`
  ${grid}
  ${props =>
    props.isLoginPageContent &&
    css`
      ${gridBreakpoints}
    `}
 ${props =>
   props.isMultiColContent &&
   css`
     grid-template-rows: auto;
     ${gridBreakpoints}
   `}
 ${props =>
   props.isInputContent &&
   css`
     overflow: hidden;
     grid-template-rows: auto;
   `}
`;

export const StyledMain = props => {
  const [isLoginPageContent, isInputContent, isMultiColContent, children] = [
    props.isLoginPageContent,
    props.isInputContent,
    props.isMultiColContent,
    props.children,
  ];
  return (
    <StyledLayout
      isLoginPageContent={isLoginPageContent}
      isMultiColContent={isMultiColContent}
      isInputContent={isInputContent}
    >
      {children}
    </StyledLayout>
  );
};

StyledMain.propTypes = {
  isLoginPageContent: PropTypes.bool,
  isInputContent: PropTypes.bool,
  isMultiColContent: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
