import { createSelector } from 'reselect';

export const guidesSelector = state => state.guides;

export const getGuides = createSelector(
	guidesSelector, 
	guides => Object.values(guides)
)