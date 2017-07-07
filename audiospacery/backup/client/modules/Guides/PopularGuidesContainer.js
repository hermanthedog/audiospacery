import PopularGuides from './PopularGuides';
import { connect } from 'react-redux';
import { getPopGuides } from '../Wrapper/WrapperSelector';

function mapStateToProps(state){
	return {
		guidesPop: getPopGuides(state)
		}
}

export default connect(mapStateToProps)(PopularGuides);