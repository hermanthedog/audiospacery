import { FILE_FORMAT } from './GuidesActions';


const initialState = '';

const guideFormat = (state = initialState, action) => {
	switch(action.type){
		case FILE_FORMAT:
			return action.name;
		default:
			return state;
	}
}

export default guideFormat;