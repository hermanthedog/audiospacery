import { createSelector } from 'reselect';

export const guidesSelector = state => state.guides;
export const selectedLocationSelector = state => state.selectedLocation;

export const getGuides = createSelector(
	guidesSelector, 
	guides => Object.values(guides)
)

export const getPopGuides = createSelector(
	getGuides, 
	guides=> guides.filter(guide=>guide.rating>50)
)

export const getGuidesByLocation = createSelector(
	getGuides, 
	guides=> guides.filter(guide=> guide.localisation === selectedLocation)
)