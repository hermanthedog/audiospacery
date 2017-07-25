import callApi from '../../util/apiCaller';

export const CREATE_GUIDES = 'CREATE_GUIDES';
export const CREATE_GUIDE = 'CREATE_GUIDE';
export const CREATE_POPULAR_GUIDES = 'CREATE_POPULAR_GUIDES';
export const SEARCH_GUIDES = 'SEARCH_GUIDES';
export const SET_LOCATION = 'SET_LOCATION';
export const IS_PAID = 'IS_PAID';
export const FILE_FORMAT = 'FILE_FORMAT';
export const SELECTED_GUIDE = 'SELECTED_GUIDE';
export const TOGGLE_VIEW = "TOGGLE_VIEW";
export const SET_MAP_BOUNDS = "SET_MAP_BOUNDS";

export function setBounds(obj){
	return{
		type: SET_MAP_BOUNDS,
		obj
	} 
}

export function toggleView(name){
	return{
		type: TOGGLE_VIEW,
		name
	}
}

export function setLocation(name){
	return {
		type: SET_LOCATION,
		name
	}
}

export function setGuide(name){
	return {
		type: SELECTED_GUIDE,
		name
	}
}

export function isPaid(name){
	return{
		type: IS_PAID, 
		name
	}
}

export function setFormat(name){
	return{
		type: FILE_FORMAT,
		name
	}
}

export function createGuides(guides) {
  return {
    type: CREATE_GUIDES,
    guides
  };
}

export function fetchGuides(){
	return (dispatch) => {
		return callApi('guides', 'get').then(res => {
			dispatch(createGuides(res.guides));
		})
	}
}

export function createGuide(guide){
	return {
		type: CREATE_GUIDE,
		guide
	}
}

/*export function createPopularFromDB(){
	return (dispatch)=>{
		return callApi('guidesPop', 'get').then(res => {
			dispatch(createPopularGuides(res.guidesPop)
		})
		
}}

export function createPopularGuides(guidesPop){
		type: CREATE_POPULAR_GUIDES,
		guidesPop
	}

*/

export function createGuideDB(guide) {
	return (dispatch) => {
		return callApi('guides', 'post', 
				{
				title: guide.title,
				description: guide.descritpion,
				paid: guide.paid,
				price: guide.price,
				photo: guide.photo,
				localisation: guide.localisation,
				format: guide.format,
				description: guide.descritpion,
				author: guide.author,
				language: guide.language,
				audio: guide.audio,
				cover: guide.cover,
				link: guide.link,
				rating: guide.rating,
				lat: guide.lat,
				lng: guide.lng
			}) 
			.then(res => {
				dispatch(createGuide(res.saved));
		});
	};
}


export function searchGuides(searchText){
	return {
		type: SEARCH_GUIDES,
		searchText
	}
}
