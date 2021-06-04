import React from 'react';
import { SubHeadline } from '../_htmlComponents/headlines';
import { Section } from '../_htmlComponents/section';
import { Anchor } from '../_htmlComponents/anchor';
import { Paragraph } from '../_htmlComponents/paragraph';
import { Span } from '../_htmlComponents/span';

export const VideoTutorial = () => (
  <Section>
    <SubHeadline content="Tutorial how to use the app" />
    <Anchor href="https://dw.com" tooltip="Go to dw.com" isLinkBox>
      <Span isVideoDummy>
        <span
          style={{
            background: 'white',
            padding: '10px',
            borderRadius: '7px',
          }}
        >
          Dummy Video
        </span>
      </Span>
    </Anchor>
    <Paragraph>
      Zoom recording of the app. It chains some click paths and demonstrates
      users what can be expected by the app if used right.
    </Paragraph>
  </Section>
);
