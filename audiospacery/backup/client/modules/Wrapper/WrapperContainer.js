import Wrapper from './Wrapper';
import { fetchGuides } from '../Guides/GuidesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGuides } from './WrapperSelector';

Wrapper.need = [() => { return fetchGuides(); }];

function mapStateToProps(state){ 
	  return {
		  guides: getGuides(state),
	}
}

export default connect(mapStateToProps)(Wrapper);