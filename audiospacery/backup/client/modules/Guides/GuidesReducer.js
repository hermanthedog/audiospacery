import { CREATE_GUIDE, CREATE_GUIDES, SEARCH_GUIDES , CREATE_POPULAR_GUIDES, SET_LOCATION } from './GuidesActions';


const initialState = {}; 

const GuidesReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_GUIDES: 
			return { ...action.guides };
		case CREATE_GUIDE:
			return {...state};
    default:
      return state;
  } 
};





export default GuidesReducer;
