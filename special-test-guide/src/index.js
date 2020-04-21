import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout';

import * as serviceWorker from './serviceWorker';
import './web.config';

ReactDOM.render(<Layout />, document.getElementById('root'));

serviceWorker.register();