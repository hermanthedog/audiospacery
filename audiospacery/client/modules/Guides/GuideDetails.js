import React from 'react';
import styles from './Guides.css';

const GuideDetails = (props) =>{
    return(
		<div className={styles.GuideDetails}>
			<h5>{props.details.description}</h5>
			<p>format:{props.details.format}</p>
			<p>płatny:{props.details.paid}</p>
			<p>cena: {props.details.price}</p>
			<p>autor:{props.details.author}</p>
			<p>{props.details.language}</p>
			<p>rating:{props.details.rating}</p>
		</div>
	)
}	
	
export default GuideDetails;