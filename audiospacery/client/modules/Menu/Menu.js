import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import AddGuide from '../AddGuide/AddGuide';
import styles from './Menu.css';

const Menu =(props)=>{
    return (
		<div>
			<ul>
				<li><Link to="/">Start</Link></li>
				<li><Link to="/guides">Przewodniki</Link></li>
				<li><Link to="/popularguides">Top</Link></li>
				<li><Link to="/addguide">Dodaj Nowy</Link></li>
			</ul>
			{ props.children }
		 </div>
    );
}

export default Menu;
