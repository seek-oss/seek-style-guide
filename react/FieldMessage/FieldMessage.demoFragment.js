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
        label: 'Help text',
        transformProps: props => ({
          ...props,
          message: 'Help message'
        })
      },
      {
        label: 'Critical message',
        transformProps: props => ({
          ...props,
          valid: false,
          message: 'Something went wrong'
        })
      },
      {
        label: 'Positive message',
        transformProps: props => ({
          ...props,
          valid: true,
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
