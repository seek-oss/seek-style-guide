export default [
  {
    label: 'Secondary label',
    type: 'checklist',
    states: [
      {
        label: 'Secondary label',
        transformProps: props => ({
          ...props,
          secondaryLabel: '(Max 30 characters)'
        })
      }
    ]
  }
];
