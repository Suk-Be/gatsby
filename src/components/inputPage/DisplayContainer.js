import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { measurements } from '../../utils/css/cssMeasurements';
import { Span } from '../_htmlComponents/span';
import { Label } from '../_htmlComponents/formElements/label';
import { Input } from '../_htmlComponents/formElements/input';

const Container = styled.span`
  width: calc(50% - ${measurements.gridEmUnits.colGap});
`;

export const DisplayContainer = props => {
  const [count, id, initial, name] = [
    props.count,
    props.id,
    props.initial,
    props.name,
  ];

  return (
    <Container>
      <Span>
        <Label
          isAmountLabel
          htmlFor={`${id}-total-amount`}
          content={`total amount (initially ${initial})`}
        />
        <Input
          id={`${id}-total-amount`}
          dataProductName={name}
          dataProductId={id}
          dataProductAmount={initial}
          type="number"
          value={count}
          className="product"
          readOnly
        />
      </Span>
    </Container>
  );
};

DisplayContainer.propTypes = {
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
