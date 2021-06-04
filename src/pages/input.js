import React from 'react';
import SEO from '../components/seo';
import { ComposeHeaderTopFooterBottom } from '../components/allPages/composeLayoutHeaderFooterMain';
import { StyledMain } from '../components/_htmlComponents/main';
import { Form } from '../components/_htmlComponents/formElements/form';
import { Accordion } from '../components/inputPage/Accordion';
import { Content as AccordionContent } from '../components/inputPage/Content';
import { ButtonsToServer } from '../components/inputPage/ButtonsToServer';
import data from '../mock/products';

const InputPage = () => {
  const categories = data.category;
  const MappedAccordions = categories.map(category => (
    <Accordion
      key={category.id}
      id={category.id}
      category={category.categoryname}
    >
      <AccordionContent products={category.products} />
    </Accordion>
  ));

  return (
    <ComposeHeaderTopFooterBottom>
      <Form id="input">
        <SEO title="Home" />
        <StyledMain isInputContent>{MappedAccordions}</StyledMain>
        <ButtonsToServer />
      </Form>
    </ComposeHeaderTopFooterBottom>
  );
};

export default InputPage;
