import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as searchReducer } from 'redux-search';

// Import Reducers
import guides from './modules/Guides/GuidesReducer';
import selectLocation from './modules/Guides/selectReducer';
import paidGuide from './modules/Guides/isPaidReducer';
import guideFormat from './modules/Guides/fileFormatReducer';
import selectedGuide from './modules/Guides/selectedGuideReducer';
import toggleGuideView from './modules/Guides/toggleViewReducer';
import setMapBounds from './modules/Maps/mapBoundReducer';


// Combine all reducers into one root reducer
export default combineReducers({
	guides, 
	selectLocation,
	paidGuide, 
	guideFormat,
	toggleGuideView,
	setMapBounds,
	//selectedGuide, 
	form: reduxFormReducer,
	search: searchReducer,
});
