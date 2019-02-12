import React from 'react';
import Alert from './Alert';
import SketchFieldContainer from '../private/SketchFieldContainer/SketchFieldContainer';

const noop = () => {};

export const symbols = {
  'Alert/1. Positive/1. Primary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="positive" level="primary" />
    </SketchFieldContainer>
  ),
  'Alert/1. Positive/1. Primary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="positive" level="primary" onClose={noop} />
    </SketchFieldContainer>
  ),
  'Alert/1. Positive/2. Secondary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="positive" level="secondary" />
    </SketchFieldContainer>
  ),
  'Alert/1. Positive/2. Secondary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert
        message="Message"
        tone="positive"
        level="secondary"
        onClose={noop}
      />
    </SketchFieldContainer>
  ),
  'Alert/1. Positive/3. Tertiary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="positive" level="tertiary" />
    </SketchFieldContainer>
  ),
  'Alert/1. Positive/3. Tertiary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert
        message="Message"
        tone="positive"
        level="tertiary"
        onClose={noop}
      />
    </SketchFieldContainer>
  ),

  'Alert/2. Critical/1. Primary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="critical" level="primary" />
    </SketchFieldContainer>
  ),
  'Alert/2. Critical/1. Primary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="critical" level="primary" onClose={noop} />
    </SketchFieldContainer>
  ),
  'Alert/2. Critical/2. Tertiary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="critical" level="tertiary" />
    </SketchFieldContainer>
  ),
  'Alert/2. Critical/2. Tertiary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert
        message="Message"
        tone="critical"
        level="tertiary"
        onClose={noop}
      />
    </SketchFieldContainer>
  ),

  'Alert/3. Info/1. Primary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="info" level="primary" />
    </SketchFieldContainer>
  ),
  'Alert/3. Info/1. Primary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="info" level="primary" onClose={noop} />
    </SketchFieldContainer>
  ),
  'Alert/3. Info/2. Secondary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="info" level="secondary" />
    </SketchFieldContainer>
  ),
  'Alert/3. Info/2. Secondary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="info" level="secondary" onClose={noop} />
    </SketchFieldContainer>
  ),
  'Alert/3. Info/3. Tertiary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="info" level="tertiary" />
    </SketchFieldContainer>
  ),
  'Alert/3. Info/3. Tertiary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="info" level="tertiary" onClose={noop} />
    </SketchFieldContainer>
  ),

  'Alert/4. Help/1. Primary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="help" level="primary" />
    </SketchFieldContainer>
  ),
  'Alert/4. Help/1. Primary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="help" level="primary" onClose={noop} />
    </SketchFieldContainer>
  ),
  'Alert/4. Help/2. Tertiary/1. Standard': (
    <SketchFieldContainer>
      <Alert message="Message" tone="help" level="tertiary" />
    </SketchFieldContainer>
  ),
  'Alert/4. Help/2. Tertiary/2. With Close Button': (
    <SketchFieldContainer>
      <Alert message="Message" tone="help" level="tertiary" onClose={noop} />
    </SketchFieldContainer>
  )
};
