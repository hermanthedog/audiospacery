import PopularGuides from './PopularGuides';
import { connect } from 'react-redux';
import { getPopularGuides } from '../Wrapper/PopularGuidesSelector';

function mapStateToProps(state){ 
	  return {
		  guidesPop: getPopularGuides(state)
	}
}

export default connect(mapStateToProps)(PopularGuides);