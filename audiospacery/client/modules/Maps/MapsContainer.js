import Maps from './Maps';
import { connect } from 'react-redux';
import { getGuides , getGuide, filterGuides } from '../Wrapper/WrapperSelector';
import { boundNwSelector, boundSeSelector } from './mapSelector';
import setMapBounds from './mapBoundReducer';
import { setBounds } from '../Guides/GuidesActions';

const mapStateToProps = (state) => {
	return{
		getGuides: filterGuides(state),
		getGuide: getGuide(state), 
		mapBounds: state.setMapBounds
		
		
		//toggleGuideView: state.toggleGuideView
		//selectedGuide: state.selectedGuide
	}
}


const mapDispatchToProps = (dispatch) =>({
	setBounds: (obj)=>dispatch(setBounds(obj))
})
 

export default connect(mapStateToProps, mapDispatchToProps)(Maps);

