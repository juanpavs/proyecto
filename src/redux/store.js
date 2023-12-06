// store.js
/*import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers.js'; 

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;*/

/*import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index.js';

const store = createStore(rootReducer);

export default store;*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Asegúrate de importar tu raíz de reductores

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;