import React from 'react';

import { ComposeHeaderTopFooterBottom } from '../components/allPages/composeLayoutHeaderFooterMain';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <ComposeHeaderTopFooterBottom>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ComposeHeaderTopFooterBottom>
);

export default NotFoundPage;
