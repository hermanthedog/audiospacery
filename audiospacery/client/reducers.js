import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as searchReducer } from 'redux-search';

// Import Reducers
import guides from './modules/Guides/GuidesReducer';
// Combine all reducers into one root reducer
export default combineReducers({
	guides, 
	form: reduxFormReducer,
	search: searchReducer,
});
