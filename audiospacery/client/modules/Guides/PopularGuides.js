import React, { Component, PropTypes } from 'react';
import Guide from './Guide';

// Import Style
//import styles from './Guides.css';

const PopularGuides = (props) => {	

	const { guidesPop } = props;

	return(
		<div>
			<h4>Top przewodniki</h4>
			{guidesPop.map(guide=> 
				{
					return (
						<Guide key={guide.id} guide={guide} />
					)
				}
			)}
		</div>
	)
	
}

PopularGuides.propTypes = { 
};

export default PopularGuides; 
