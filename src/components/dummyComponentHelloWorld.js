import React from 'react';
import { Headlines } from './_htmlComponents/headlines';
import { Paragraph } from './_htmlComponents/paragraph';
import { Link } from 'gatsby';
import { colors } from '../utils/css/cssColors';

export const DummyComponentHelloWorld = () => (
  <div>
    <Headlines content="Hello World" />
    <Paragraph>
      Alice was beginning to get very tired of sitting by her sister on the
      bank, and of having nothing to do. Once or twice she had peeped into the
      book her sister was reading, but it had no pictures or conversations in
      it, and what is the use of a book, thought Alice, without pictures or
      conversations?
    </Paragraph>
    <Paragraph>
      Alice was beginning to get very tired of sitting by her sister on the
      bank, and of having nothing to do. Once or twice she had peeped into the
      book her sister was reading, but it had no pictures or conversations in
      it, and what is the use of a book, thought Alice, without pictures or
      conversations?
    </Paragraph>
    <Paragraph>
      Alice was beginning to get very tired of sitting by her sister on the
      bank, and of having nothing to do. Once or twice she had peeped into the
      book her sister was reading, but it had no pictures or conversations in
      it, "and what is the use of a book," thought Alice, "without pictures or
      conversations?"
    </Paragraph>
    <Link
      to="/"
      title="Go back to the homepage"
      style={{ color: `${colors.interact.anchor.linkPrimary}` }}
    >
      Go back to the homepage
    </Link>
    <br />
    <Link
      to="/helloWorld"
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
  </div>
);
