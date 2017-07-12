
import { SET_LOCATION } from './GuidesActions';

const initialState = '';

const selectLocation = (state = initialState, action) => {
	switch(action.type){
		case SET_LOCATION:
			return action.name;
		default:
			return state;
	}
}

export default selectLocation;