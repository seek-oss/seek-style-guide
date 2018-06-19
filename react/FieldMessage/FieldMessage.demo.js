import FieldMessage from './FieldMessage';
import demoFragment from './FieldMessage.demoFragment';

export default {
  route: '/fieldMessage',
  title: 'FieldMessage',
  category: 'Form',
  component: FieldMessage,
  initialProps: {
    id: 'id-message'
  },
  options: demoFragment
};
