/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { HeaderComponent } from '../_htmlComponents/header';
import { FooterComponent } from '../_htmlComponents/footer';
import { CSSGlobalStyle } from '../../utils/css';
import { GapHeaderFooter } from '../_htmlComponents/div';
import { header } from '../../utils/css/theme';

export const ComposeHeaderTopFooterBottom = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <GapHeaderFooter>
      <ThemeProvider theme={header}>
        <CSSGlobalStyle />
        <HeaderComponent siteTitle={data.site.siteMetadata.title} />
        {children}
        <FooterComponent />
      </ThemeProvider>
    </GapHeaderFooter>
  );
};

ComposeHeaderTopFooterBottom.propTypes = {
  children: PropTypes.node.isRequired,
};
