import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPlayer from 'react-player'
import styles from './Guides.css';
import { setGuide } from './GuidesActions';
import { getGuides, getGuide } from '../Wrapper/WrapperSelector';


class GuideDetailPage extends Component{
	constructor(props){
		super(props);
		//this.setGuide = this.props.setGuide.bind(this);
		this.state = { 
			playing: false, 
		}
	}

	/*componentDidMount(){
		this.setGuide(this.props.params.id);
	}*/
		
	playPause = () => {
		this.setState({ playing: !this.state.playing })
	}	
		
	render(){
		const { playing } = this.state;
		const { guide } = this.props;
			
		return(
			<div>
			{console.log(this.props)}
				<div className={styles.GuidePage}>
					<ReactPlayer  ref={player => { this.player = player }} 
							url={this.props.guide.audio} 
							width="0px" 
							height="0px"  
							playing={playing}
						/>
					<img src={this.props.guide.cover}/>
					<span>
						<h4>{guide.title}
							<button 
								className={styles.PlayButton} 
								onClick={this.playPause}>
									{playing ? '❚❚ ' : '►'}
							</button>
						</h4>
					</span> 
					<h5>{guide.localisation}</h5>
					<h4>{guide.description}</h4>
					<p><strong>format:</strong>{guide.format}, <strong>płatny:</strong>{guide.paid}</p>
					<p><strong>cena: </strong>{guide.price}, <strong>autor:</strong>{guide.author}</p>
					<p><strong>język:</strong>{guide.language}, <strong>rating:</strong>{guide.rating}</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return{
		getGuide: getGuide(state), 
		selectedGuide: ownProps.params.id,
		guide: getGuides(state).find(guide=>guide.id===ownProps.params.id)
	}
}

 

export default connect(mapStateToProps)(GuideDetailPage);