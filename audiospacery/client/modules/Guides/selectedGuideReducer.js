import { SELECTED_GUIDE } from './GuidesActions';


const initialState = '';

const selectedGuide = (state = initialState, action) => {
	switch(action.type){
		case SELECTED_GUIDE:
			return action.name;
		default:
			return state;
	}
}

export default selectedGuide;