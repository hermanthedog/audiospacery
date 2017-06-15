import PopularGuides from './Guides';
import { connect } from 'react-redux';
import { getPopularGuides } from './PopularGuidesSelector';

function mapStateToProps(state){ 
	  return {
		  guidesPop: getPopularGuides(state)
	}
}

export default connect(mapStateToProps)(PopularGuides);