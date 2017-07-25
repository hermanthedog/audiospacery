import React, { Component, PropTypes } from 'react';
import { connect, compose } from 'react-redux';
import { createGuideDB } from '../Guides/GuidesActions';
import { Field }  from 'redux-form'
import { reduxForm } from 'redux-form'

// Import Style
import styles from './AddGuide.css';

class AddGuide extends Component{
	constructor(props){
		super(props);
	}
	
	logValues = (values) =>{
		console.log(values)
	} 	
	
	submit = (values) => {
		const { title, localisation, format, paid, price, author, description, language, link, audio, photo, cover, rating } = values;
		this.props.createGuideDB({	
									title: title,
									localisation: localisation, 
									format: format,
									paid: paid,
									price: price,
									author: author,
									description: description,
									language: language,
									link: link,
									audio: audio,
									photo: photo,
									cover: cover,
									rating: rating
								});
	} 
	 
		
	render(){
		
		const { handleSubmit, pristine, reset, submitting } = this.props;
		
		return (
			<form onSubmit={handleSubmit(this.submit.bind(this))}>
				<div>
					
					<div className={styles.formField}>
						<label>Tytuł</label>
						 <Field name="title" component="input" type="text" placeholder="tytuł"/>
					</div>
					
					<div className={styles.formField}>
						<label>Miejsce</label>
						 <Field name="localisation" component="input" type="text" placeholder="miejsce"/>
					</div>
					
					<div className={styles.formField}>
						<label>Format</label>
						<Field name="format" component="input" type="text" placeholder="format"/>
					</div>
					
					<div className={styles.formField}>
						<label>Płatny</label>
					  	<Field name="paid" component="input" type="text" placeholder="płatny"/>
					</div>
					
					<div className={styles.formField}>
						<label>Cena:</label>
					  	<Field name="price" component="input" type="text" placeholder="cena"/>
					</div>
					
					<div className={styles.formField}>
						<label>Autor</label>
					  	<Field name="author" component="input" type="text" placeholder="autor"/>
					</div>
					
					<div className={styles.formField}>
						<label>Opis</label>
					  	<Field name="description" component="textarea" type="text" placeholder="opis"/>
					</div>
					
					<div className={styles.formField}>
						<label>Język</label>
					  	<Field name="language" component="input" type="text" placeholder="język"/>
					</div>
					
					<div className={styles.formField}>
						<label>Link</label>
					  	<Field name="link" component="input" type="text" placeholder="link"/>
					</div>
					
					<div className={styles.formField}>
						<label>Audio</label>
						<Field name="audio" component="input" type="text" placeholder="audio"/>
					</div>
					
					<div className={styles.formField}>
						<label>Zdjęcie</label>
						<Field name="photo" component="input" type="text" placeholder="foto"/>
					</div>
					
					<div className={styles.formField}>
						<label>Okładka</label>
					  	<Field name="cover" component="input" type="text" placeholder="cover"/>
					</div>
					
					<div className={styles.formField}>
						<label>Rating</label>
					  	<Field name="rating" component="input" type="text" placeholder="rating"/>
					</div>
					<div className={styles.formField}>
						<label>Lat</label>
						<Field name="lat" component="input" type="text" placeholder="lat"/>
					</div>
					<div className={styles.formField}>
						<label>Lng</label>
						<Field name="lng" component="input" type="text" placeholder="lng"/>
					</div>


				</div>
				<div className={styles.formField}>
					<h4>DODAJ</h4>
					<button type="submit" >Submit</button>
					<button type="button" disabled={pristine || submitting} onClick={reset}>Wyczyść</button>
				</div>
			</form>
		)
	}
}

function mapStateToProps(state) {
   return {
     formValues: state.form
   };
 }
 
 const mapDispatchToProps = {
	 createGuideDB
 }

AddGuide = connect(mapStateToProps, mapDispatchToProps)(AddGuide);

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(AddGuide)

/*class AddGuide extends Component{
  //constructor(props) {
  //super(props);
  //}
  
	  this.state = {
		  title:'',
		  description: '',
		  paid:'',
		  price:'',
		  photo:'',
		  localisation:'',
		  format:'',
		  description:'',
		  author:'',
		  language:'',
		  audio:'',
		  cover:'',
		  link:'',
		  rating:''
		} 
  }

    handleInputChange = (event) =>{
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
		console.log(this.state)
	}
	
	handleSubmit = (event) =>{
		event.preventDefault();
		this.props.createGuideDB({ title: 'lublinbynight' });	
		console.log('aaa');
	}
	
	handleFormSubmit(formProps) {
		this.props.createGuideDB(formProps);
		this.props.initialize('');
	}
	
	
	
	render(){

		const { handleSubmit,  pristine, reset, submitting } = this.props;
		
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<div className={styles.AddGuide}>
					<label>Tytuł:</label>
					<Field
						component="input"
						name="title"
						type="text"
					/>
					/*<label>Opis:</label>
					<Field
						component="textarea"
						name="description"
						
					/>
					<label>Płatny:</label>
					<Field
						component="input"
						name="paid"
						type="text"
					/>
					<label>Cena:</label>
					 <Field
						component="input"
						name="price"
						type="text"
					/>
					<label>Lokalizacja:</label>
					<Field
						component="input"
						name="localisation"
						type="textarea"
					/>
					<label>Format:</label>
					<Field
						component="input"
						name="format"
						type="text"
					/>
					<label>Foto:</label>
					<Field
						component="input"
						name="photo"
						type="text"
					/>
					<label>Autor:</label>
					<Field
						component="input"
						name="author"
						type="text"
					 />
					<label>Audio:</label>
					<Field
						compoent="input"
						name="audio"
						type="text"
					/>
					<label>Język:</label>
					<Field
						component="input"
						name="language`"
						type="text"
					/>
					<label>Link:</label>
					<Field
						compoent="input"
						name="link"
						type="text"
					/>
					<label>Okładka:</label>
					<Field 
						component="input"
						name="cover`"
						type="text"
					/>
					<label>Rating:</label>
					<Field 
						component="input"
						name="rating`"
						type="text"
					/>
					
					<button type="submit">Dodaj</button>
				</div>
			</form>
			
			);
	}  
}

 

  
 AddGuide = reduxForm({
			form: 'addguideform'
		})(AddGuide);
 
 //export default AddGuide;
 
 export default AddGuide;
*/
