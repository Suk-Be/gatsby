import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../../utils/css/cssColors';
import { styledButton } from '../../../utils/css/cssUtils';

// todo refactor like editContainer/index.js
// used only
// on start page "login feature"
// on edit page "reset all changes" "submit all changes"

const StyledButton = styled.button`  
  ${styledButton}

  ${props =>
    props.isReset &&
    css`
      background: ${colors.background.tertiary};
      border-color: ${colors.interact.buttons.tertiary.normalBorder};
      color: ${colors.interact.buttons.tertiary.normalBorder};
      &:hover {
        border-color: ${colors.interact.buttons.tertiary.hoverBorder};
        color: ${colors.interact.buttons.tertiary.hoverBorder};
      }
      &:focus {
        border-color: ${colors.interact.buttons.tertiary.focusBorder};
        color: ${colors.interact.buttons.tertiary.focusBorder};
      }
      &:active {
        border-color: ${colors.interact.buttons.tertiary.activeBorder};
        color: ${colors.interact.buttons.tertiary.activeBorder};
      }
    `}

  ${props =>
    props.isSubmit &&
    css`
      background: ${colors.interact.buttons.secondary.normal};
      border-color: ${colors.interact.buttons.secondary.normal};
      color: ${colors.text.secondary};
      &:hover {
        background: ${colors.interact.buttons.secondary.hover};
        border-color: ${colors.interact.buttons.secondary.hover};
        color: ${colors.text.secondary};
      }
      &:focus,
      &:focus-within {
        background: ${colors.interact.buttons.secondary.focus};
        border-color: ${colors.interact.buttons.secondary.focus};
        color: ${colors.text.secondary};
      }
      &:active {
        background: ${colors.interact.buttons.secondary.active};
        border-color: ${colors.interact.buttons.secondary.active};
        color: ${colors.text.secondary};
      }
    `}
    
    ${props =>
      props.isSubmitAll &&
      css`
        background: ${colors.interact.buttons.green.normal};
        border-color: ${colors.interact.buttons.green.normal};
        color: ${colors.text.secondary};
        &:hover {
          background: ${colors.interact.buttons.green.hover};
          border-color: ${colors.interact.buttons.green.hover};
          color: ${colors.text.secondary};
        }
        &:focus,
        &:focus-within {
          background: ${colors.interact.buttons.green.focus};
          border-color: ${colors.interact.buttons.green.focus};
          color: ${colors.text.secondary};
        }
        &:active {
          background: ${colors.interact.buttons.green.active};
          border-color: ${colors.interact.buttons.green.active};
          color: ${colors.text.secondary};
        }
      `}
`;

export const Button = ({
  isReset,
  isSubmit,
  isSubmitAll,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      isReset={isReset}
      isSubmit={isSubmit}
      isSubmitAll={isSubmitAll}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  isReset: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isSubmitAll: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};
