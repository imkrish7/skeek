import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
class FilterByTag extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		};
	}

	handleFilter = debounce(() => this.props.filterByTag(this.state.search), 300);

	handleChange = e => {
		const { name, value } = e.target;
		this.setState(
			{
				[name]: value,
			},
			() => {
				this.handleFilter();
			}
		);
	};

	render() {
		return (
			<div className="search">
				<input
					name="search"
					onChange={this.handleChange}
					value={this.state.search}
					className="input"
					placeholder="Search by tags..."
				/>
			</div>
		);
	}
}

export default FilterByTag;
