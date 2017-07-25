import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const guidesSchema = new Schema({
	id: { 
		type: 'String',
		required: true,
		unique: true,
	},
	title: {
		type: 'String',
		required: true,
	},
	localisation: {
		type: 'String',
		//required: true,
	},
	format: {
		type: 'String',
		//required: true,
	},
	paid: {
		type: 'String',
		//required: true,
	},
	price: {  
		type: 'Number',
	},
	author: {
		type: 'String',
		//required: true,
	},
	description: {
		type: 'String',
		//required: true,
	},
	language: {
		type: 'String',
		//required: true,
	},
	link: {
		type: 'String',
	},
	audio: {
		type: 'String',
	},
	photo: { 
		type: 'String', 
	},
	cover: { 
		type: 'String', 
	},
	rating: {
		type: 'Number',
		//required: true, 
	},
	lat: {
		type: 'Number',
	},
	lng: {
		type: 'Number',
	}
	
});

export default mongoose.model('Guides', guidesSchema);
