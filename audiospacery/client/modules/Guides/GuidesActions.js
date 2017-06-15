import callApi from '../../util/apiCaller';

export const CREATE_GUIDES = 'CREATE_GUIDES';
export const CREATE_GUIDE = 'CREATE_GUIDE';
export const CREATE_POPULAR_GUIDES = 'CREATE_POPULAR_GUIDES';
export const SEARCH_GUIDES = 'SEARCH_GUIDES';

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
				rating: guide.rating
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
