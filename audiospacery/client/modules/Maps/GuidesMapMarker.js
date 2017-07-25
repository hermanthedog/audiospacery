import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMap from 'google-map-react';
import { Link } from 'react-router';
import GuideDetailsPopup from '../Guides/GuideDetailsPopup';
import FontAwesome from 'react-fontawesome';
import styles from './Maps.css';


class GuidesMapMarker extends Component{
	constructor(props){
		super(props)
		this._onHover = this._onHover.bind(this);	 
	}

	_onHover(guides){
		if(this.props.$hover){
			return <GuideDetailsPopup details={guides}/>
		} else {
			return null
				}
	}

	render(){

		const { guide, $hover } = this.props;

		return(
			<Link to={`guides/${guide.id}`}>
				<div 
					className={styles.MapMarrker}
					key={guide.id} 
					id={guide.id}
				>
					<FontAwesome
						className={styles.MapMarker}
						name='map-marker'
						size='4x'
					/>
					{this._onHover(guide)}
				</div>
			</Link>
		)
	}
}

export  default GuidesMapMarker;