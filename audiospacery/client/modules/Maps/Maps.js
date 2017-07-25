import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMap from 'google-map-react';
import { getGuides } from '../Wrapper/WrapperSelector';
import GuideDetails from '../Guides/GuideDetails';
import GuidesMapMarker from './GuidesMapMarker';
import { setBounds } from '../Guides/GuidesActions';
import  FontAwesome from 'react-fontawesome';
// Import Style
import styles from './Maps.css';

class Maps extends Component {
	constructor(props){
		super(props);
		this.state={
			zoom: 6,
			center: [53, 21],
			nw: {lat: 56, lng: 13}, 
			se: {lat: 49, lng: 28	}
		}
		this.setBounds = this.props.setBounds.bind(this);
	}

	

	_onChange = ({center, zoom, bounds}) =>{
		this.setState({
			center: center,
			zoom: zoom,
			nw: bounds.nw,
			se: bounds.se
		}, ()=>{
			this.setBounds(bounds)
		})
	}

  	render() {

	  	const { getGuides } = this.props;
	  	const { zoom, center } = this.state;
	  	const mapMarkers = getGuides.map(maps=>{
			        	return(
				        	<GuidesMapMarker 
				        		key={maps.id}
				        		lat={maps.lat} 
				        		lng={maps.lng} 
				        		guide={maps} />
			        	)}
			        );	

	    return (
	    	<div className={styles.MapsWrapper}>
		    	<div className={styles.Maps}>
		    		<FontAwesome
						name='map-marker'
						size='4x'
					/>
			    	<GoogleMap 
			    		bootstrapURLKeys={{key: 'AIzaSyCPak7hAA2D0B5xjYNpIgC1xiKJpcwhnvA', language: 'pl'}}
			        	center={center}
			        	zoom={zoom}
			        	onChange={this._onChange}
			      	>
			        {mapMarkers}
			      </GoogleMap>
		      </div>
	      </div>
	    );
	  }
}

export default Maps;



 
