import { configure } from '@kadira/storybook';
import '../theme/app.less';

const components = require.context('../react', true, /\.story\.js$/);
const theme = require.context('../theme', true, /\.story\.js$/);

function loadStories() {
  components.keys().forEach(components);
  theme.keys().forEach(theme);
}

configure(loadStories, module);
