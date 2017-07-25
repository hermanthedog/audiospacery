import { createSelector } from 'reselect';
import { boundSelector } from '../Maps/mapSelector' 

export const guidesSelector = state => state.guides;
export const selectedLocationSelector = state => state.selectLocation;
export const resultSelector = state => state.search.guides.result;
export const selectedGuideSelector = state => state.selectedGuide; 
export const paidGuideSelector = state => state.paidGuide;
export const guideFormatSelector = state=> state.guideFormat;



export const getGuides = createSelector(
	guidesSelector, 
	guides => Object.values(guides)
)

export const getGuide = createSelector(
	[getGuides, selectedGuideSelector], 
	(guides, selectedGuide)=>
		guides.filter(guide=>{
			if(guide.id===selectedGuide){
				return guide
			}
		})
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
 

export const filterGuides = createSelector(
	[getGuidesByResult, selectedLocationSelector, guideFormatSelector, paidGuideSelector, boundSelector],
	(guidesByResult, selectLocation, guideFormat, paidGuide, setMapBounds)=>
		guidesByResult.filter(guide=>{
			if(
				(selectLocation === '' || guide.localisation.toLowerCase() === selectLocation.toLowerCase()) &&
				(paidGuide=== false || guide.paid === 'true') &&
				(guideFormat === '' || guide.format === guideFormat) && 
				(setMapBounds.nw.lat > guide.lat) && (setMapBounds.nw.lng < guide.lng) 
				&& (setMapBounds.se.lat < guide.lat) && (setMapBounds.se.lng > guide.lng)
			){
			return guide
			}	
	})
)