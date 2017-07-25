import React from 'react';
import styles from './Guides.css';

const GuideDetails = (props) =>{
    return(
    	<div className={styles.GuideDetailsWrapper}>
			<div className={styles.GuideDetails}>
				<h4>{props.details.description}</h4>
				<p><strong>format:</strong>{props.details.format}, <strong>płatny:</strong>{props.details.paid}</p>
				<p><strong>cena: </strong>{props.details.price}, <strong>autor:</strong>{props.details.author}</p>
				<p><strong>język:</strong>{props.details.language}, <strong>rating:</strong>{props.details.rating}</p>
			</div>
		</div>
	)
}	
	
export default GuideDetails;