import React from 'react'
import { Reveal } from 'react-scrollkit'

class Collapsible extends React.Component {

	constructor() {
		super();
		this.state = {
			selected: -1
		}
	}

	selectComponent(id) {
		if (id === this.state.selected) id = -1;
		this.setState({
			selected: id
		});
	}

	componentWillReceiveProps({ items }) {
		if (items !== this.props.items) this.setState({ selected: -1 });
	}

	render() {

		let itemList = this.props.items.map( (item, idx) => (
			<li className={ (this.state.selected === idx) ? 'active' : null  } key={ item.name }>	
				<span className="rect" onClick={ this.selectComponent.bind(this, idx) }>{ item.name }</span>
				
				<div className="project-case-collapse">
					<p>
					If none of these use cases apply to you or your request is not addressed by this site, we require that you submit your YouTube brand usage request in English through the Brand Use Request Form for review. Please allow up to a week for a reply. For non-English requests, you should reach out to your YouTube Partnerships counterpart.
					</p>
					<p>	
					If none of these use cases apply to you or your request is not addressed by this site, we require that you submit your YouTube brand usage request in English through the Brand Use Request Form for review. Please allow up to a week for a reply. For non-English requests, you should reach out to your YouTube Partnerships counterpart.
					</p>
				</div>
				<div className="project-case-meta">
					<div className="project-case-label">Technology used</div>
					<div className="project-case-info">
						<span>HTML</span>
						<span>CSS</span>
						<span>PHP</span>
						<span>Javascript</span>
					</div>
				</div>
			</li>
		));
		 
		return (
			<Reveal wrapper="ol" once={ false } name="componentOl" activeClass="active">
				 { itemList } 
			</Reveal>
		);
	}
}

Collapsible.displayName = "Collapsible";
export default Collapsible;