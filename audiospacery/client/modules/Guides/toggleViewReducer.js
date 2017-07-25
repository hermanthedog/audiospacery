import { TOGGLE_VIEW } from './GuidesActions';

const initialState = false;

const toggleGuideView = (state = initialState, action) => {
	switch(action.type){
		case TOGGLE_VIEW: 
			return action.name
		default:
			return state;
	}
}

export default toggleGuideView;