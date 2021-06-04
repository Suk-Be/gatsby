import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../utils/css/cssColors';
import { measurements } from '../../../utils/css/cssMeasurements';

const inputStyle = `
  background: ${colors.interact.input.mailTxtPwBG};
  border-color: ${colors.interact.input.mailTxtPwBG};

  &:active,
  &:focus,
  &:focus-within,
  &:hover {
    border-color: ${colors.interact.input.mailTxtPwHover};
    border-color: ${colors.interact.input.mailTxtPwHover};
  }
  padding: ${measurements.inputPaddingEMUnits.general};
  padding-top: ${measurements.inputPaddingEMUnits.top};
  margin-bottom: ${measurements.gridEmUnits.rowGap};
`;

const StyledInputDefault = styled.input`
  width: 100%;
  color: ${colors.interact.input.text};
  border: 1.5px solid;
  &:focus {
    outline: none;
    outline-offset: 0;
  }
`;

const StyledInput = styled(StyledInputDefault)`
  ${inputStyle}
`;

export const Input = ({
  isReset,
  value,
  type,
  id,
  name,
  placeholder,
  onChange,
  readOnly,
  dataProductName,
  dataProductId,
  dataProductAmount,
  dataProductChangeAmount,
  className,
  min,
}) => {
  return (
    <StyledInput
      isReset={isReset}
      value={value}
      type={type}
      id={id}
      onChange={onChange}
      name={name}
      className={className}
      placeholder={placeholder}
      data-product-name={dataProductName}
      data-product-id={dataProductId}
      data-product-amount={dataProductAmount}
      data-product-change-amount={dataProductChangeAmount}
      readOnly={readOnly}
      min={min}
    />
  );
};

Input.propTypes = {
  isReset: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  dataProductName: PropTypes.string,
  dataProductId: PropTypes.number,
  dataProductAmount: PropTypes.number,
  dataProductChangeAmount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
