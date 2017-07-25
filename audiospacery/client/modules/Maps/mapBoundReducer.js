import { SET_MAP_BOUNDS } from '../Guides/GuidesActions';

const initialState = {nw: {lat: 56, lng:13}, se: { lat: 48, lng: 29}};

const setMapBounds = (state = initialState, action) => {
	switch(action.type){
		case SET_MAP_BOUNDS:
			return action.obj;
		default:
			return state;
	}
}

export default setMapBounds;