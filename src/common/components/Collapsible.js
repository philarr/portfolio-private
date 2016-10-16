import React from 'react'
import { Reveal } from 'react-scrollkit'
import TextFormat from './TextFormat';

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
					<TextFormat>
						{ item.desc }
					</TextFormat>
 
				</div>
				<div className="project-case-meta">
					<div className="project-case-label">Technology used</div>
					<div className="project-case-info">
						{ item.tech.map( t => <span key={ item.name + t }>{ t }</span>) }
					</div>
				</div>
			</li>
		));
		 
		return (
			<Reveal wrapper="ol" name="componentOl" activeClass="active">
				 { itemList } 
			</Reveal>
		);
	}
}

Collapsible.displayName = "Collapsible";
export default Collapsible;