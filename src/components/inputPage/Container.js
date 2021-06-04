import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  parseAdd as plus,
  parseMinus as minus,
} from '../../utils/js/parseMath';
import { DisplayContainer } from './DisplayContainer';
import { EditContainer } from './EditContainer';

const Container = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = props => {
  const [amount, id, name] = [props.amount, props.id, props.name];

  const initial = amount;
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(initial);

  const addToAmount = () => setCount(plus(count, number));
  const subtractFromAmount = () => setCount(minus(count, number));

  return (
    <Container>
      <DisplayContainer id={id} initial={initial} count={count} name={name} />
      <EditContainer
        id={id}
        initial={initial}
        count={count}
        setCount={setCount}
        number={number}
        setNumber={setNumber}
        addToAmount={addToAmount}
        subtractFromAmount={subtractFromAmount}
      />
    </Container>
  );
};

InputContainer.propTypes = {
  amount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
