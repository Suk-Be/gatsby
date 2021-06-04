import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SubHeadline } from '../_htmlComponents/headlines';
import { Paragraph } from '../_htmlComponents/paragraph';
import { StyledImg } from '../image';
import { Fieldset } from '../_htmlComponents/formElements/fieldset';
import { Legend } from '../_htmlComponents/formElements/legend';
import { InputContainer } from './Container';
import { measurements } from '../../utils/css/cssMeasurements';

const Container = styled.span`
  display: flex;
  flex-flow: column;
`;

const Article = styled.article`
  display: flex;
  flex-flow: column;
  padding: ${measurements.gridEmUnits.top} ${measurements.gridEmUnits.colGap}
    ${measurements.gridEmUnits.rowGap} ${measurements.gridEmUnits.colGap};

  img {
    order: -1;
    margin-bottom: ${measurements.baseRowGapMax}px;
  }
  fieldset {
    margin-top: auto;
  }
`;

export const Content = props => {
  const products = props.products;
  const MappedArticles = products.map(prod => (
    <Article key={prod.id}>
      <SubHeadline content={prod.productname} />
      <Paragraph>{prod.description}</Paragraph>

      <StyledImg
        src="https://image.flaticon.com/icons/svg/2490/2490412.svg"
        alt="workplace"
      />
      <Fieldset>
        <Container>
          <Legend
            content={`${prod.productname} editable amount of items"`}
            isVisuallyHidden
          />
          <InputContainer
            id={prod.id}
            amount={prod.amount}
            name={prod.productname}
          />
        </Container>
      </Fieldset>
    </Article>
  ));

  return MappedArticles;
};

Content.propTypes = {
  products: PropTypes.array.isRequired,
};
