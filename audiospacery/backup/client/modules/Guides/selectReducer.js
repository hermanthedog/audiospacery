import { SET_LOCATION } from './GuidesActions';

const initialState = {}

const selectedLocationReducer = (state = inistialState, action) => {
	switch(action.type){
		case SET_LOCATION:
			return action.name;
		default:
			return state;
	}
}