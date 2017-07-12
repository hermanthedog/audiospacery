import { IS_PAID } from './GuidesActions';

const initialState = false;

const paidGuide = (state = initialState, action) => {
	switch(action.type){
		case IS_PAID: 
			return action.name
		default:
			return state;
	}
}

export default paidGuide;