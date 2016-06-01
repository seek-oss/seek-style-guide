import React from 'react';
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
        <TextField />

        <Subheading>Invalid</Subheading>
        <TextField invalid={true} message="Something went wrong" />
      </Section>

      <Section>
        <Heading>Email field</Heading>
        <EmailField />
      </Section>
    </div>
  );
}
