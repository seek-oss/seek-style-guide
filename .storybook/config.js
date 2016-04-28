import { configure } from '@kadira/storybook';
import '../theme/app.less';

const theme = require.context('../theme', true, /\.story\.js$/);
const components = require.context('../react', true, /\.story\.js$/);

function loadStories() {
  theme.keys().forEach(theme);
  components.keys().forEach(components);
}

configure(loadStories, module);
