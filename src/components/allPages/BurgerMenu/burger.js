import React from 'react';
import { bool, func } from 'prop-types';
import { measurements } from '../../../utils/css/cssMeasurements';
import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 35%;
  right: calc(1.5 * ${measurements.gridEmUnits.rowGap});
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.3rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryBlue : theme.primaryDarkblue};
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    animation-name: animateBurgerOnStart;
    animation-duration: 0.3s;
    animation-iteration-count: 1;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

// eslint-disable-next-line no-unused-vars
export const Burger = ({ open, setOpen, ...props }) => {
  // eslint-disable-next-line no-unneeded-ternary
  const isExpanded = open ? false : true;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
