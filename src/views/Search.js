import React, { Component } from 'react';
import debounce from 'lodash.debounce';
class Search extends Component{

	constructor(props){
		super(props)
		this.state = {
			search: ""
		}
	}

	handleFilter = debounce(()=> this.props.filter(this.state.search), 300)

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		},()=>{
			this.handleFilter();
		})
	}


	render(){
		return<div className="search">
			<input name="search" onChange={this.handleChange} value={this.state.search} className="input" placeholder="Search by name..."/>
		</div>
	}
}

export default Search;