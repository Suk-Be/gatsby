import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { measurements } from '../../utils/css/cssMeasurements';
import {
  changeAmmountButton,
  resetButton,
  styledButton,
} from '../../utils/css/cssUtils';
import { Label } from '../_htmlComponents/formElements/label';
import { Input } from '../_htmlComponents/formElements/input';

const Container = styled.span`
  width: calc(50% - ${measurements.gridEmUnits.colGap});
`;
const ButtonContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > input {
    width: calc(50% - ${measurements.gridEmUnits.colGap});
  }
  > button {
    width: calc(50% - ${measurements.gridEmUnits.colGap});
  }
`;
const ChangeButton = styled.button`
  ${styledButton}
  ${changeAmmountButton}
`;
const ResetButton = styled.button`
  ${styledButton}
  ${resetButton}
`;

export const EditContainer = props => {
  const [
    id,
    initial,
    number,
    setNumber,
    setCount,
    addToAmount,
    subtractFromAmount,
  ] = [
    props.id,
    props.initial,
    props.number,
    props.setNumber,
    props.setCount,
    props.addToAmount,
    props.subtractFromAmount,
  ];

  return (
    <Container>
      <Label
        isAmountLabel
        htmlFor={`input-${id}-add-amount`}
        content="edit total amount"
      />
      <Input
        id={`input-${id}-add-amount`}
        type="number"
        value={number}
        className="amount-change"
        dataProductChangeAmount="0"
        min="0"
        onChange={e => setNumber(e.target.value)}
      />
      <ButtonContainer>
        <ChangeButton type="button" onClick={addToAmount}>
          plus
        </ChangeButton>
        <ChangeButton type="button" onClick={subtractFromAmount}>
          minus
        </ChangeButton>
      </ButtonContainer>
      <ResetButton
        type="button"
        onClick={() => {
          setNumber(0);
          setCount(initial);
        }}
      >
        reset
      </ResetButton>
    </Container>
  );
};

EditContainer.propTypes = {
  id: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setNumber: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  addToAmount: PropTypes.func.isRequired,
  subtractFromAmount: PropTypes.func.isRequired,
};
