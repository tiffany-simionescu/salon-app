import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from 'styled-react-modal';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// Redux Store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);