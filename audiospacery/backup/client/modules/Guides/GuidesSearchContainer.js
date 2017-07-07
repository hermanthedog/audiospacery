import { connect } from 'react-redux'
import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { createSearchAction, getSearchSelectors } from 'redux-search';
import GuidesSearch from './GuidesSearch';
// :books is a map (Object or Immutable.Map) with ids as keys
// These ids correspond to :result returned by getSearchSelectors('books')
const guides = state => state.guides.toJS();

// :text is a selector that returns the text Books are currently filtered by
// :result is an Array of Book ids that match the current seach :text (or all Books if there is no search :text)
const { text, result } = getSearchSelectors({
	resourceName: 'guides',
	resourceSelector: 
		(resourceName, state) => state[resourceName]
})

const mapStateToProps = createSelector(
  [result, guides, text],
  (guideIds, guides, searchText) => ({
    guideIds,
    guides,
    searchText
  })
)

const searchGuide = () =>{
	 createSearchAction('guides');
}

const mapDispatchToProps = {
  searchGuides: searchGuide
  };



export default connect(mapStateToProps, mapDispatchToProps)(GuidesSearch)