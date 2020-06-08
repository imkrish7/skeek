import React, { Component } from 'react';
import ListRow from './ListRow';

class List extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="list">
				{this.props.students.map((student, ind) => {
					return <ListRow key={student.id} addTag={this.props.addTag} index={ind} data={student} />;
				})}
			</div>
		);
	}
}

export default List;