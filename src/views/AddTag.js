import React, { Component } from 'react';

class AddTag extends Component{

	constructor(props){
		super(props);
		this.state = {
			tag: ""
		}
	}
	handleChange = (e)=>{
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleKeypress = (e)=>{
		if(e.key=="Enter"){
			let tag = this.state.tag;
			this.setState(
				{
					tag: "",
				}				
			);
			this.props.addTag(this.props.index, tag);
			
		}
	}

	render(){
		return <div className="search">
			<input onKeyPress={this.handleKeypress} value={this.state.tag} name="tag" className="input tag" onChange={this.handleChange}  placeholder="Add Tags..." />
		</div>
	}
}

export default AddTag;