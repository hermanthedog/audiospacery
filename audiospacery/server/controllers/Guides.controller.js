import Guides from '../models/Guides';
import sanitizeHtml from 'sanitize-html';
import uuid from 'uuid/v4';


export function getGuides(req, res) {
  Guides.find().exec((err, guides) => {
    if (err) res.status(500).send(err);
    res.json({ guides });
  });
} 


export function postGuide(req, res){
  
	const newGuide = new Guides(req.body);
	newGuide.id  = uuid();
	newGuide.save((err) => {
    if (err) res.status(500).send(err);
  });
}

export function getPopularGuides(req, res) {
	Guides.find({ rating :{$gt: 50}}).exec((err, guidesPop) => {
		if(err) res.status(500),send(err);
		res.json({ guidesPop })
	})
}