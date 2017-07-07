import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './modules/App/components/DevTools';
import rootReducer from './reducers';
import { reduxSearch } from 'redux-search';
import { composeWithDevTools } from "redux-devtools-extension";


export function configureStore(initialState = {}) {
	

	const enhancers = [
			applyMiddleware(thunk),
			reduxSearch({
				resourceIndexes: {
				/*	guides: ({ guides, indexDocument, state }) => {
						guides.forEach(guide => {
							indexDocument(guide.id, guide.title);
							indexDocument(guide.id, guide.description);
					});
				}
					
					*/ guides: ['author', 'description', 'localisation', 'title']
					
				},
				
				resourceSelector: (resourceName, state) => {
					return state[resourceName]
				}
							
			})
		
  ];  

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
