import React, { Component, PropTypes } from 'react';
import Guides from '../Guides/Guides';
import PopularGuides from '../Guides/Guides';
import { fetchGuides } from '../Guides/GuidesActions';
import styles from './Wrapper.css';


class Wrapper extends Component {
	componentDidMount() {
		this.props.dispatch(fetchGuides());
	}

	handleSearch=()=>{
		console.log('search');
	}
	
	render() {  
		return (				 
				<div className={styles.Wrapper}>
					<input type="text" onChange={this.handleSearch}/>
					<Guides guides={this.props.guides}/>
				</div> 
		);
	}
}


export default Wrapper;
