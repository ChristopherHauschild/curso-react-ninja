import { configure } from '@kadira/storybook';

function loadStories() {
  // Pega por padrão o arquivo index.js dentro de stories
  require('../stories');
}

configure(loadStories, module);
