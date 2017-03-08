export default [
  {
    label: 'Secondary',
    type: 'checklist',
    states: [
      {
        label: 'Secondary message',
        transformProps: props => ({
          ...props,
          messageProps: { secondary: true }
        })
      }
    ]
  },
  {
    label: 'Message',
    type: 'radio',
    states: [
      {
        label: 'Help text',
        transformProps: props => props
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
        label: 'No message',
        transformProps: props => ({
          ...props,
          message: false
        })
      }
    ]
  }
];
