import React, { Component, PropTypes } from 'react';
import Guide from './Guide';

// Import Style
//import styles from './Guides.css';

const Guides = (props) => {	
		return (
			<div>
				{props.guides.map(guide=> <Guide key={guide.id} guide={guide}/>)}
			</div>
		);
}

Guides.propTypes = {
};

export default Guides; 
