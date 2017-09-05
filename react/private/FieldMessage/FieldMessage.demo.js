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
        label: 'No message',
        transformProps: props => ({
          ...props,
          message: false
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
      }
    ]
  }
];
