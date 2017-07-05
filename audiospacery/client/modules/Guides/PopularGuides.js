import React, { Component, PropTypes } from 'react';
import Guides from './Guide';

// Import Style
//import styles from './Guides.css';

const PopularGuides = (props) => {	
		return (
			<div>
				<h4>Top Przewodniki:</h4> 
				<Guides guides={props.guidesPop}/>
			</div>
		);
}

PopularGuides.propTypes = { 
};

export default PopularGuides; 
