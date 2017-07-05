import React, { Component, PropTypes } from 'react';
import styles from './Guides.css';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createSearchAction, getSearchSelectors } from 'redux-search';
import _ from 'lodash';
import DevTools from '../App/components/DevTools';
import Guide from './Guide';


class GuidesSearch extends Component {
	constructor(props){
		super(props);
		this.searchGuides = this.props.searchGuides.bind(this);
		//this.state = {
		//	search:''
		//}
	}
	
	componentWillMount(){
		this.props.dispatch(this.searchGuides(' '));		
	}
	
	
	
	render(){
		const { results, guideFrom } = this.props;
		
		return (<div>
			<div className={styles.GuidesSearch}>
				<input type="text" onChange={
					event => {this.props.dispatch(this.searchGuides(event.target.value))
				}}/>
				
				{guideFrom.map(guide=>{if(results.indexOf(guide.id)!==-1)
					{
						return(
							<Guide key={guide.id} guide={guide}/>
						)					} 
					})
				}
				
	
				</div>
				</div>
		)
	}
}
GuidesSearch.propTypes = {
};

const guides = state => state;
// :text is a selector that returns the text Books are currently filtered by
// :result is an Array of Book ids that match the current seach :text (or all Books if there is no search :text)
/*const { text, result } = getSearchSelectors({
	resourceName: 'guides',
	resourceSelector: 
		(resourceName, state) => state[resourceName]
})


*/



const {
  text, // search text
  result // ids
} = getSearchSelectors({
  resourceName: 'guides',
  resourceSelector: (resourceName, state) => {return state[resourceName]}
});
	
const mapStateToProps = (state)=>{
	return { 
		results: state.search.guides.result, 
		guideFrom: Object.values(state.guides)
	}
}


/*const mapStateToProps = (state)=>({
	state.guides.search.result
	  })
	  */
	  
	  
const mapDispatchToProps = (dispatch) => ({
	searchGuides: createSearchAction('guides'),
	dispatch
  });


export default connect(mapStateToProps, mapDispatchToProps)(GuidesSearch)
