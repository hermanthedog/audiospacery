import React, { Component, PropTypes } from 'react';
import Guide from './Guide';
import styles from './Guides.css';

// Import Style
//import styles from './Guides.css';

const PopularGuides = (props) => {	

	const { guidesPop } = props;

	return(
		<div className={styles.PopularGuides}>
			<div className={styles.PopularGuidesHeader}>
				<h4>Top przewodniki</h4>
			</div>
			{guidesPop.map(guide=> 
				{
					return (
						<Guide className={styles.PopularGuidesItem} key={guide.id} guide={guide} />
					)
				}
			)}
		</div>
	)
	
}

PopularGuides.propTypes = { 
};

export default PopularGuides; 
