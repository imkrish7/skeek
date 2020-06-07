import React, { Component } from 'react';

class AddTag extends Component{

	constructor(props){
		super(props);
		this.state = {
			tag: ""
		}
	}

	componentDidMount(){
		// console.log(this.props)
	}
	handleChange = (e)=>{
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleKeypress = (e)=>{
		if(e.key=="Enter"){
			this.props.addTag(this.props.index, this.state.tag)
		}
	}

	render(){
		return <div className="search">
			<input onKeyPress={this.handleKeypress} name="tag" className="input" onChange={this.handleChange}  placeholder="Add Tags..." />
		</div>
	}
}

export default AddTag;