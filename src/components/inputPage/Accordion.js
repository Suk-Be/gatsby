import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { AccordionAnchor } from '../_htmlComponents/anchor';
import { AccordionHeadline } from '../_htmlComponents/headlines';
import { bp } from '../../utils/css/cssBreakpoints';

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  width: 100%;
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: 9999px;
  height: auto;
  
  @media (min-width: ${bp.medium}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  
  @media (min-width: ${bp.large}) {
    grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
  }
  
  @media (min-width: ${bp.epicLarge}) {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }

  ${props =>
    props.isOpen &&
    css`
      transition: max-height 0.3s;
    `};
  ${props =>
    props.isOpen &&
    css`
      max-height: 0;
    `};
  ${props =>
    props.isOpen &&
    css`
      transition: padding-top 0.3s;
    `};
  ${props =>
    props.isOpen &&
    css`
      transition: padding-bottom 0.3s;
    `};
  ${props =>
    props.isOpen &&
    css`
      padding-top: 0;
    `};
  ${props =>
    props.isOpen &&
    css`
      padding-bottom: 0;
    `};
}
`;

export const Accordion = props => {
  const [id, category, children] = [props.id, props.category, props.children];
  const [isOpen, setOpen] = useState(true);

  const toggleItem = () => {
    // eslint-disable-next-line no-shadow
    setOpen(isOpen => !isOpen);
  };
  return (
    <section
      data-category-id={id}
      data-category-name={category}
      className="category"
    >
      <AccordionAnchor toggleItem={toggleItem}>
        <AccordionHeadline isOpen={isOpen} category={category} />
      </AccordionAnchor>
      <Content isOpen={isOpen} data-category-products="products in category">
        {children}
      </Content>
    </section>
  );
};

Accordion.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
