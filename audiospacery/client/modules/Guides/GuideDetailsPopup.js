import React from 'react';
import styles from './Guides.css';

const GuideDetailsPopup = (props) =>{
	const { details } = props;
    return(
    	 
			<div className={styles.GuideDetailsPopup}>
				<h3>{details.localisation}</h3>
				<h4>{details.description}</h4>
				<p><strong>format:</strong>{details.format}, <strong>płatny:</strong>{details.paid}</p>
				<p><strong>cena: </strong>{details.price}, <strong>autor:</strong>{details.author}</p>
				<p><strong>język:</strong>{details.language}, <strong>rating:</strong>{details.rating}</p>
			</div>
		
	)
}	
	
export default GuideDetailsPopup;