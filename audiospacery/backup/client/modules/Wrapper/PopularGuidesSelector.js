import { createSelector } from 'reselect';
import { getGuides } from './WrapperSelector';

export const getPopularGuides = createSelector(
	getGuides,
	guides => guides.filter(guide=>guide.rating>50)
)