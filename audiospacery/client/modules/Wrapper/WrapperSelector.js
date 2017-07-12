import { createSelector } from 'reselect';

export const guidesSelector = state => state.guides;
export const selectedLocationSelector = state => state.selectLocation;
export const resultSelector = state => state.search.guides.result;

export const getGuides = createSelector(
	guidesSelector, 
	guides => Object.values(guides)
)

export const getPopGuides = createSelector(
	getGuides, 
	guides=> guides.filter(guide=>guide.rating>50)
)

export const getGuidesByResult = createSelector(
	[resultSelector, getGuides],
	(result, guides)=> 
		guides.filter(guide=>{
			if(result.indexOf(guide.id)!==-1 ){
				return guide
				}
		})
)

export const getGuidesByLocation = createSelector(
	[getGuidesByResult, selectedLocationSelector],
	(guidesByResult, selectLocation)=>
		guidesByResult.filter(guide=>
			guide.localisation.toLowerCase().includes(selectLocation.toLowerCase())
		)
)