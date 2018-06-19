import FieldMessage from './FieldMessage';
import demoFragment from './FieldMessage.demoFragment';

export default {
  route: '/field-message',
  title: 'Field Message',
  category: 'Form',
  component: FieldMessage,
  initialProps: {
    id: 'id-message'
  },
  options: demoFragment
};
