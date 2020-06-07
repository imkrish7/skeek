import React from 'react';
import { getList } from './actions/listActions';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.getList({});
	}

	componentDidUpdate(prevProps, prevState){
		console.log(this.props)
	}

	render() {
		return (
			<div className="App">
				<div className="card" />
			</div>
		);
	}
}

const mapStateToProps = state =>{
	return { 
		listResponse: state.listResponse
	}
}

const mapActionToProps = dispatch =>{
	return {
		getList: params => dispatch(getList(params))
	}
}


export default connect(mapStateToProps, mapActionToProps)(App);
