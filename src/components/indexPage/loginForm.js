import React from 'react';
import { Form } from '../_htmlComponents/formElements/form';
import { SubHeadline } from '../_htmlComponents/headlines';
import { Span } from '../_htmlComponents/span';
import { Section } from '../_htmlComponents/section';
import { Fieldset } from '../_htmlComponents/formElements/fieldset';
import { Label } from '../_htmlComponents/formElements/label';
import { Input } from '../_htmlComponents/formElements/input';
import { Legend } from '../_htmlComponents/formElements/legend';
import { Button } from '../_htmlComponents/formElements/button';

const SubmitLogin = e => {
  e.preventDefault();
};

const ResetLogin = e => {
  e.preventDefault();
};

export const LoginForm = () => (
  <Form id="login" onReset={ResetLogin} onSubmit={SubmitLogin}>
    <SubHeadline content="Login to use the page" />
    <Section>
      <SubHeadline
        isLogin
        content="Please authenticate with your DW Windows User credentials to use the
        functionality of the app."
      />
      <Fieldset>
        <Legend isVisuallyHidden content="Login Authentication" />
        <Span>
          <Label isVisuallyHidden htmlFor="mail">
            <span>E-mail: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </Label>
          <Input type="email" id="mail" name="mail" placeholder="email *" />
        </Span>
        <Span>
          <Label isVisuallyHidden htmlFor="password">
            <span>Password: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="password *"
          />
        </Span>
      </Fieldset>
      <Span isLogin>
        <Button type="reset" isReset>
          Reset
        </Button>
        <Button type="submit" isSubmit>
          Login
        </Button>
      </Span>
    </Section>
  </Form>
);
