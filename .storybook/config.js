import { configure } from '@kadira/storybook';
import '../theme/app.less';

const components = require.context('../react', true, /\.story\.js$/);
const other = require.context('../stories', true, /\.story\.js$/);

function loadStories() {
  components.keys().forEach(components);
  other.keys().forEach(other);
}

configure(loadStories, module);
