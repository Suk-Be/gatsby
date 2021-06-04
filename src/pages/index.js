import React from 'react';
import SEO from '../components/seo';
import { ComposeHeaderTopFooterBottom } from '../components/allPages/composeLayoutHeaderFooterMain';
import { StyledMain } from '../components/_htmlComponents/main';
import { LoginForm } from '../components/indexPage/loginForm';
import { VideoTutorial } from '../components/indexPage/videoTutorial';

const StartPage = () => (
  <ComposeHeaderTopFooterBottom>
    <SEO title="Login" />
    <StyledMain isLoginPageContent>
      <LoginForm />
      <VideoTutorial />
    </StyledMain>
  </ComposeHeaderTopFooterBottom>
);

export default StartPage;
