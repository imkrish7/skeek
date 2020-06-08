import React from 'react';
import { getList } from './actions/listActions';
import { connect } from 'react-redux';
import  List  from './views/List';
import Search from './views/Search';
import pickby from 'lodash.pickby';
import FilterByTag from './views/FilterByTag';
import './App.css';

class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			students: [],
			nameFilter: "",
			tagFilter: ""
		}
	}
	componentDidMount(){
		this.props.getList({});
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.listResponse != this.props.listResponse && this.props.listResponse.data){
			let tempList = this.props.listResponse.data.students.slice();
			let list = [...tempList.map(student => {
				let data ={ ...student };
				let grade_length = student.grades.length;
				data['avg'] = (student.grades.reduce( (acc, grade) => acc + parseInt(grade), 0) /grade_length).toFixed(2) 
				data['tags'] = [];
				return data;
			})]
			
			this.setState({
				students: [...list]
			})
		}
	}
	// Add filter
	handleNameFilter = (filter)=>{
		this.setState({
			nameFilter: filter
		})
	}

	handleTagFilter = (tagFilter)=>{
		this.setState({
			tagFilter: tagFilter
		})
	}
	// Add Tag 
	addTag = (i, tag)=>{
		let list = [...this.state.students];
		list[i].tags.push(tag);
		this.setState({
			students: [...list]
		})
	}

	render() {
		let { students, nameFilter,  tagFilter } = this.state;
		const searchRE = new RegExp(nameFilter, 'i');
		if(nameFilter.length>0 || tagFilter.length > 0){
			let temps = null; 
			temps = pickby(this.state.students, value => value.firstName.match(searchRE) || value.lastName.match(searchRE));
			if (temps != null && Object.keys(temps).length != 0) {
				students = Object.keys(temps).map(entity => temps[entity]);
			}
			if (tagFilter.length > 0) {
				students = students.filter(student => student.tags.indexOf(tagFilter) >= 0);
			}
			
		}
		return <div className="App">
				<div className="card">
					<Search filter={this.handleNameFilter} />
					<FilterByTag filterByTag={this.handleTagFilter} />
					{this.state.students.length > 0 && <List addTag={this.addTag} students={[...students]} />}
				</div>
			</div>;
	}
}

const mapStateToProps = state =>{
	return { 
		listResponse: state.listResponse
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		getList: params => dispatch(getList(params))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
