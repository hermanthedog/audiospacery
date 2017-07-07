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
	}
	
	componentDidMount(){
		this.props.dispatch(this.searchGuides(''));		
	}
	
	render(){
		
		const { results, guideFrom } = this.props;
		let citiesArr = _.uniq(guideFrom.map(guide=>{
		return(guide.localisation)}))
		
		
		
		return (
		<div className={styles.GuidesSearch}>
			<div className={styles.GuidesSearchInputWraooer}>
				<select onChange={event=> setLocation(event.target.value)
				value={}}>
					{citiesArr.map(city=>{
						return(<option key={city} value={city}>{city}</option>)
						} 
						)}			
				</select>
				<input type="text" onChange={
					event => {this.props.dispatch(this.searchGuides(event.target.value))
				}}/>
			</div>
				{ guideFrom.map(guide=>{if(results.indexOf(guide.id)!==-1){
					return(<Guide key={guide.id} guide={guide}/>)
						} 
					})
				}
		</div>
		)
	}
}
GuidesSearch.propTypes = {
};

const guides = state => state;

const { text, result } = getSearchSelectors({
  resourceName: 'guides',
  resourceSelector: (resourceName, state) => {return state[resourceName]}
});
 
const mapStateToProps = (state)=>{
	return { 
		selectedLocation: 
		results: state.search.guides.result, 
		guideFrom: Object.values(state.guides)
	}
}
  
const mapDispatchToProps = (dispatch) => ({
	searchGuides: createSearchAction('guides'),
	dispatch
  });

export default connect(mapStateToProps, mapDispatchToProps)(GuidesSearch)
