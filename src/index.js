import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { logger } from 'redux-logger/src';

const store = createStore(rootReducer, applyMiddleware(logger));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
