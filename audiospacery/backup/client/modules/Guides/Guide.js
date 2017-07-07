import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPlayer from 'react-player'
import GuideDetails from './GuideDetails';
import styles from './Guides.css';


class Guide extends Component{
	constructor(props){
		super(props);
		this.state = { 
			playing: false, 
			showFullGuide: false }
		}
		
		playPause = () => {
			this.setState({ playing: !this.state.playing })
		}	
		
		toggleGuide = () =>{
			this.setState({ showFullGuide: !this.state.showFullGuide })
		}
		
		render(){
			const { playing, showFullGuide } = this.state;
			const { guide, ...props } = this.props;
			
			
			return(
			<div>
				<div className={styles.Guide}>
					<ReactPlayer  ref={player => { this.player = player }} 
							url={guide.audio} 
							width="0px" 
							height="0px"  
							playing={playing}
					/>
					<img src={guide.cover}/>
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
					<button className={styles.ToggleButton} onClick={this.toggleGuide}>
						{showFullGuide ? 'zwiń' : 'rozwiń' }
					</button>
				</div>
				<div>
					{showFullGuide ? <GuideDetails details={guide}/> : null }
				</div>
			</div>
		)
	}
}

export default Guide;