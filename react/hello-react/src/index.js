import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import C1 from './components/C1.js';
import C2 from './components/C2.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
		<C1/><App /><C2/>
	</div>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
