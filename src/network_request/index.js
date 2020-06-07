import axios from 'axios';

const apiRequest = (dispatch, params, path, actionLoading, actionSuccess, actionError) => {
	const Headers = {
		'Content-Type': 'application/json',
	};

	const reqObj = {
		method: 'GET',
		url: path,
		header: Headers,
		data: params,
	};

	if (actionLoading) {
		dispatch(actionLoading(true));
	}

	axios(reqObj)
		.then(res => {
			if (actionLoading) {
				dispatch(actionLoading(false));
			}

			if (res.data) {
				dispatch(actionSuccess(res.data));
			}
		})
		.catch(error => {
			if (actionError) {
				dispatch(actionError(error.response.data));
			}
		});
};

export default apiRequest;