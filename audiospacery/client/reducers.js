import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as searchReducer } from 'redux-search';

// Import Reducers
import guides from './modules/Guides/GuidesReducer';
import selectLocation from './modules/Guides/selectReducer';
import paidGuide from './modules/Guides/isPaidReducer';
// Combine all reducers into one root reducer
export default combineReducers({
	guides, 
	selectLocation,
	paidGuide, 
	form: reduxFormReducer,
	search: searchReducer,
});
