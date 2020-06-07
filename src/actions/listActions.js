import { getActionStates } from '../Utils/reduxUtils';
import api_request from '../network_request'
import apiRequest from '../network_request';
export const GET_LIST = "GET_LIST";

export const listLoading = (isLoading)=> {
	return{ 
		type: getActionStates(GET_LIST).inProgress,
		isLoading
	}
}

export const listSuccess = (data)=>{
	return{
		type: getActionStates(GET_LIST).success,
		data
	}
}

export const listErrored = (error)=>{
	return{
		type: getActionStates(GET_LIST).failure,
		error
	}
}

export const getList = (params)=>{
	const url = 'https://www.hatchways.io/api/assessment/students';

	return dispatch => apiRequest(dispatch, params, url, listLoading, listSuccess, listErrored)
}