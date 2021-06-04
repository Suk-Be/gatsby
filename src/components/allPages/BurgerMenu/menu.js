import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { measurements } from '../../../utils/css/cssMeasurements';
import { Link } from 'gatsby';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: center;
  padding: calc(1.5 * ${measurements.gridEmUnits.rowGap});
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  width: 100%;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryBlue};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:visited {
      color: ${({ theme }) => theme.primaryBlue};
    }
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const Menu = ({ open, setOpen, ...props }) => {
  // eslint-disable-next-line no-unneeded-ternary
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link
        to="/"
        title="Go to Log in page"
        tabIndex={tabIndex}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">&#x270d;</span>
        Log in
      </Link>
      <Link
        to="/input/"
        title="Go to page 2"
        tabIndex={tabIndex}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">&#128395;</span>
        Edit Data
      </Link>
      <Link
        to="/helloWorld/"
        title="Go to hello world"
        tabIndex={tabIndex}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">&#x2714;</span>
        Hello World (later: Filter Data)
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
