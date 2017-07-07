import React, { Component, PropTypes } from 'react';
import GuidesSearch from '../Guides/GuidesSearch';
import PopularGuides from '../Guides/Guides';
import { fetchGuides } from '../Guides/GuidesActions';
import styles from './Wrapper.css';
import DevTools from '../App/components/DevTools';

class Wrapper extends Component {
	
	componentDidMount() {
		this.props.dispatch(fetchGuides());
		
		//console.log(props.searchInGuides);
	} 

	handleProps=()=>{
		console.log(this.props);
	} 
	
	render() {  
		return (				 
				<div className={styles.Wrapper}>
					<GuidesSearch />
				</div> 
		);
	}
}


export default Wrapper;
