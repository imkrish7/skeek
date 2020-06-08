import React, { Component } from 'react';
import AddTag from './AddTag';

class ListRow extends Component {

	constructor(props){
		super(props)
		this.state = {
			expand: false
		}
	}

	

	addTag = (ind, tag) =>{

			this.props.addTag(ind, tag);
	}

	toggle =()=>{
		this.setState({
			expand: !this.state.expand
		})
	}

	render(){
		return <div className="list_item">
				<div className="list_item_text_wrap">
					<div className="list_item_avatar_wrap">
						<img className="list_item_avatar" src={this.props.data.pic} />
					</div>
					<div className="list_item_info_text">
						<h1>
							{`${this.props.data.firstName} ${this.props.data.lastName}`}
						</h1>
						<div className="subtext">
							<ul className="list_item_info_subtext_list">
								<li className="list_item_info_subtext_item">
									<span className="subtext_item">Email</span>
									<span className="subtext_item">
										{this.props.data.email}
									</span>
								</li>
								<li className="list_item_info_subtext_item">
									<span className="subtext_item">Company</span>
									<span className="subtext_item">
										{this.props.data.company}
									</span>
								</li>
								<li className="list_item_info_subtext_item">
									<span className="subtext_item">Skill</span>
									<span className="subtext_item">
										{this.props.data.skill}
									</span>
								</li>
								<li className="list_item_info_subtext_item">
									<span className="subtext_item">Average</span>
									<span className="subtext_item">
										{this.props.data.avg}%
									</span>
								</li>
							</ul>
							{this.state.expand && <React.Fragment>
									<ul className="grades">
										{this.props.data.grades.length > 0 && this.props.data.grades.map(
												(grade, ind) =>
													<li key={ind}>
														<span className="left">
															Test {ind + 1}
														</span>
														<span className="right">
															{grade}%
														</span>
													</li>
											)}
									</ul>
									<div className="tags">
										{this.props.data.tags.length > 0 && this.props.data.tags.map(
												(tag, ind) => {
													return (
														<button key={ind} className="btn">
															{tag}
														</button>
													);
												}
											)}
									</div>
									<AddTag index={this.props.index} addTag={this.addTag} />
								</React.Fragment>}
						</div>
					</div>
				</div>
				<div className="expand">
					<span onClick={this.toggle} className="expand_btn">
						{this.state.expand ? '-' : '+'}
					</span>
				</div>
			</div>;
	}
}

export default ListRow;