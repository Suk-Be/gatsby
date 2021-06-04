import React from 'react';
import { Headlines, SubHeadline } from './_htmlComponents/headlines';
import { Span } from './_htmlComponents/span';
import { Paragraph } from './_htmlComponents/paragraph';
import { Link } from 'gatsby';
import { StyledImg } from './image';
import { colors } from '../utils/css/cssColors';

export const DummyComponentStart = () => (
  <div>
    <Headlines content="Log in to use the app" />
    <SubHeadline content="Purpose, purpose of the app?" />
    <Paragraph>Please use DW windows credentials to login.</Paragraph>
    <Span isVerticalBox isAwkwardShouldBeDeleted>
      <span>
        <StyledImg
          src="https://image.flaticon.com/icons/svg/2490/2490412.svg"
          alt="workplace"
        />
        <small>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </small>
      </span>
      <br />
      <Link
        to="/page-2/"
        title="Go to page 2"
        style={{ color: `${colors.interact.anchor.linkPrimary}` }}
      >
        Go to page 2
      </Link>
      <br />
      <Link
        to="/helloWorld/"
        title="Go to hello world"
        style={{ color: `${colors.interact.anchor.linkPrimary}` }}
      >
        Go to hello world
      </Link>
      <br />
      <Link
        to="/page-2"
        title="Go to page 2"
        style={{ color: `${colors.interact.anchor.linkPrimary}` }}
      >
        Go to page 2
      </Link>
    </Span>
  </div>
);
