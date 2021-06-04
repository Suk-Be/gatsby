import React from 'react';
import { Section } from '../_htmlComponents/section';
import { Button } from '../_htmlComponents/formElements/button';
import { Span } from '../_htmlComponents/span';
import { SubmitAllChanges } from './SubmitAllChanges';
import { ResetAllChanges } from './ResetAllChanges';

// used only on index and input pages
export const ButtonsToServer = () => {
  return (
    <Section isToServer>
      <Span isToServer>
        <Button type="button" isReset onClick={ResetAllChanges}>
          reset all changes
        </Button>
        <Button type="button" isSubmitAll onClick={SubmitAllChanges}>
          submit all changes
        </Button>
      </Span>
    </Section>
  );
};
