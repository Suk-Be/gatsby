import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../utils/css/cssColors';
import { measurements } from '../../utils/css/cssMeasurements';
import {
  typoConfig,
  flexFontSizeHeadline,
  flexFontSizeBase,
} from '../../utils/css/cssTypo';

const StyledHeadline = styled.h1`
  padding-bottom: ${measurements.gridEmUnits.rowGap};

  ${props =>
    props.isLogo &&
    css`
      color: ${colors.text.secondary};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 0;
      margin-left: calc(1.5 * ${measurements.gridEmUnits.rowGap});
    `}
`;

const StyledSubHeadline = styled.h2`
  font-family: ${typoConfig.headlineFont};
  color: ${colors.text.primaryHeadline};
  padding-bottom: ${measurements.gridEmUnits.rowGap};
  ${flexFontSizeHeadline}

  ${props =>
    props.isLogin &&
    css`
      font-family: ${typoConfig.baseFont};
      font-weight: ${typoConfig.fontRegular};
      ${flexFontSizeBase}
    `}
`;

const StyledAccordionHeadline = styled(StyledSubHeadline)`
  color: ${colors.text.primaryHeadline};

  cursor: pointer;
  border: solid 1px #ccc;
  border-radius: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${measurements.gridEmUnits.rowGap};

  &::after {
    content: '';
    border-top: 5px solid;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
  }

  &:hover {
    color: black;
  }

  ${props =>
    props.isOpen &&
    css`
      &::after {
        content: '';
        border-top: 5px solid transparent;
        border-left: 5px solid transparent;
        border-right: 5px solid;
        border-bottom: 5px solid transparent;
      }
      &:hover {
        color: black;
      }
    `}
`;

export const AccordionHeadline = ({ isOpen, category }) => (
  <StyledAccordionHeadline isOpen={isOpen}>{category}</StyledAccordionHeadline>
);

export const Headlines = ({ isLogo, content }) => (
  <StyledHeadline isLogo={isLogo}>{content}</StyledHeadline>
);

export const SubHeadline = ({ isLogin, content }) => (
  <StyledSubHeadline isLogin={isLogin}>{content}</StyledSubHeadline>
);

AccordionHeadline.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
};

Headlines.propTypes = {
  isLogo: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

SubHeadline.propTypes = {
  content: PropTypes.string.isRequired,
  isLogin: PropTypes.bool,
};
