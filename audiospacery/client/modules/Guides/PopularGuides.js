import React, { Component, PropTypes } from 'react';
import Guide from './Guide';

// Import Style
//import styles from './Guides.css';

const PopularGuides = (props) => {	
		return (
			<div>
				<h4>Top Przewodniki:</h4> 
				{props.guidesPop.map(guide=> <Guide key={guide.id} guide={guide}/>)}
			</div>
		);
}

PopularGuides.propTypes = { 
};

export default PopularGuides; 
