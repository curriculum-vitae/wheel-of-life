import 'index.css';

import App from 'App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import registerServiceWorker from 'registerServiceWorker.js';
import typographyTheme from 'typography-theme-lincoln';

const typography = new Typography(typographyTheme);
typography.injectStyles();

ReactDOM.render(<App />, document.getElementById('root'));
