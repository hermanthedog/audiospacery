

import { FILE_FORMAT } from './GuidesActions';


const initialState = '';

const guideFormat = (state = initialState, action) => {
	switch(action.type){
		case SET_LOCATION:
			return action.name;
		default:
			return state;
	}
}

export default guideFormat;