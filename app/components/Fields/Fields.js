import React from 'react';
import AddCode from 'AddCode/AddCode';
import Section from 'Section/Section';
import Heading from 'Heading/Heading';
import Subheading from 'Subheading/Subheading';
import { TextField, EmailField } from 'seek-style-guide/react';

export default function TextFieldComponent() {
  return (
    <div>
      <Section>
        <Heading>Text field</Heading>

        <Subheading>Default</Subheading>
        <AddCode>
          <TextField />
        </AddCode>

        <Subheading>Invalid</Subheading>
        <AddCode>
          <TextField invalid={true} message="Something went wrong" />
        </AddCode>
      </Section>

      <Section>
        <Heading>Email field</Heading>
        <AddCode>
          <EmailField />
        </AddCode>
      </Section>
    </div>
  );
}
