import { createSelector } from 'reselect';
import { guidesSelector } from '../Wrapper/WrapperSelector';

const searchTextSelector = state => state.searchText;

export const searchGuides = createSelector{
	guidesSelector, searchTextSelector,
	(searchText, guides) => guides,filter(guide=>guide. 		
	
	}