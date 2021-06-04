import React from 'react';
import SEO from '../components/seo';
import { ComposeHeaderTopFooterBottom } from '../components/allPages/composeLayoutHeaderFooterMain';
import { StyledMain } from '../components/_htmlComponents/main';
import { DummyComponentHelloWorld } from '../components/dummyComponentHelloWorld';
import { DummyComponentStart } from '../components/dummyComponentStart';

const SecondPage = () => (
  <ComposeHeaderTopFooterBottom>
    <SEO title="Page two" />
    <StyledMain isMultiColContent>
      <DummyComponentStart />
      <DummyComponentHelloWorld />
      <DummyComponentStart />
      <DummyComponentHelloWorld />
      <DummyComponentStart />
      <DummyComponentHelloWorld />
      <DummyComponentStart />
      <DummyComponentHelloWorld />
      <DummyComponentStart />
      <DummyComponentHelloWorld />
      <DummyComponentStart />
      <DummyComponentHelloWorld />
      <DummyComponentStart />
    </StyledMain>
  </ComposeHeaderTopFooterBottom>
);

export default SecondPage;
