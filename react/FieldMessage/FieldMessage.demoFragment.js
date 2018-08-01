import { TONE } from '../private/tone';

export default [
  {
    label: 'Message',
    type: 'radio',
    states: [
      {
        label: 'No message',
        transformProps: props => ({
          ...props
        })
      },
      {
        label: 'Default text',
        transformProps: props => ({
          ...props,
          tone: TONE.NEUTRAL,
          message: 'Text input is fun!'
        })
      },
      {
        label: 'Critical message',
        transformProps: props => ({
          ...props,
          tone: TONE.CRITICAL,
          message: 'Something went wrong'
        })
      },
      {
        label: 'Positive message',
        transformProps: props => ({
          ...props,
          tone: TONE.POSITIVE,
          message: 'Looking good!'
        })
      },
      {
        label: 'Message disabled',
        transformProps: props => ({
          ...props,
          message: false
        })
      }
    ]
  }
];
