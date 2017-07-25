import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createSearchAction, getSearchSelectors } from 'redux-search';
import { setLocation , isPaid , setFormat } from './GuidesActions';
import paidGuide from './isPaidReducer';
import selectLocation  from  './selectReducer';
import guideFormat from  './fileFormatReducer';
import { getGuidesByResult, filterGuides } from '../Wrapper/WrapperSelector';
import _ from 'lodash';
import Guide from './Guide';
import styles from './Guides.css';
import Maps from '../Maps/MapsContainer'


class GuidesSearch extends Component {
	constructor(props){
		super(props);
		this.searchGuides = this.props.searchGuides.bind(this);
		this.setLocation = this.props.setLocation.bind(this);
		this.isPaid = this.props.isPaid.bind(this);
		this.setFormat = this.props.setFormat.bind(this);
	}
	
	componentDidMount(){
		this.props.dispatch(this.searchGuides(''));		
	}
	

	render(){
		
		const { filterGuides, results, guideFrom , guideFormat, selectLocation , paidGuide ,guidesResult} = this.props;
		let citiesArr = _.uniq(filterGuides.map(guide=>{
			return(guide.localisation)}))
		let formatsArr = _.uniq(filterGuides.map(guide=>{
			return(guide.format)}))
				
		return (

		<div className={styles.GuidesSearch}>
		{console.log(this.props)}
			<div className={styles.GuidesSearchInputWrapper}>
				<div className={styles.GuidesSearchInput}>
					<h4>Miasto</h4>
					<select onChange={event=> this.props.dispatch(this.setLocation(event.target.value))} value={selectLocation} >
						<option value='' >Pokaż wszystkie...</option>
						{citiesArr.map(city=>{
							return(<option key={city} value={city}>{city}</option>)
							} 
						)}			
					</select>
				</div>
				<div className={styles.GuidesSearchInput}>
					<h4>Szukaj</h4>
					<input type="text" onChange={
						event => {this.props.dispatch(this.searchGuides(event.target.value))
					}}/>
				</div>
				<div className={styles.GuidesSearchInput}>
					<h4>Płatny</h4>
					<input id="checkb" type="checkbox" onChange={ event =>this.props.dispatch(this.isPaid(event.target.checked))} checked={paidGuide}/>
				</div>
				<div className={styles.GuidesSearchInput}>
					<h4>Format</h4>
					<select onChange={event=> this.props.dispatch(this.setFormat(event.target.value))} value={guideFormat} >
						<option value='' >Pokaż wszystkie...</option>
						{formatsArr.map(format=>{
							return(<option key={format} value={format}>{format}</option>)
							} 
						)}			
					</select>
				</div>
			</div>
			<div className={styles.MapsWrapper}>
				<Maps getGuides={filterGuides}/>
			</div>
			<div className={styles.GuidesView}>
				{
					filterGuides.map(guide=>{
						{ 	
							return(<Guide key={guide.id} guide={guide}/>)
						} 
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

const { text, result } = getSearchSelectors({
  resourceName: 'guides',
  resourceSelector: (resourceName, state) => {return state[resourceName]}
});

const mapStateToProps = (state) =>{
	const { paidGuide, selectLocation, guides, guideFormat  } = state; 
	return { 
		paidGuide: paidGuide,
		selectLocation: selectLocation, 
		guideFrom: Object.values(guides),
		guidesResult: getGuidesByResult(state),
		guideFormat: guideFormat,
		filterGuides: filterGuides(state)
	}
} 
  
const mapDispatchToProps = (dispatch) => ({
	setFormat,
	setLocation,
	isPaid,
	searchGuides: createSearchAction('guides'),
	dispatch
  });

export default connect(mapStateToProps, mapDispatchToProps)(GuidesSearch)
