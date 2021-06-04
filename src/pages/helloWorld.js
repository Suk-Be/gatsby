import React from 'react';
import SEO from '../components/seo';
import { ComposeHeaderTopFooterBottom } from '../components/allPages/composeLayoutHeaderFooterMain';
import { StyledMain } from '../components/_htmlComponents/main';
import { DummyComponentHelloWorld } from '../components/dummyComponentHelloWorld';
const HelloWorld = () => (
  <ComposeHeaderTopFooterBottom>
    <SEO title="hello world" />
    <StyledMain isMultiColContent>
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
      <DummyComponentHelloWorld />
    </StyledMain>
  </ComposeHeaderTopFooterBottom>
);

export default HelloWorld;
