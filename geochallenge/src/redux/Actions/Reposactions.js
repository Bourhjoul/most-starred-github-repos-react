import { REPOS_LIST_FAIL, REPOS_LIST_REQUEST, REPOS_LIST_SUCCESS } from "../Reposconstants"
import axios from 'axios'
export const listRepos =  (date,page,keyword) => async(dispatch) => {
    try {
        dispatch({type : REPOS_LIST_REQUEST})
        const { data }  = await axios.get(`https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc&page=${page}&q=${keyword ? keyword : ''}`)
        
        dispatch({type : REPOS_LIST_SUCCESS,
                  payload : data,
                 })
    } catch (error) {
        dispatch({type: REPOS_LIST_FAIL,
                  payload: 
                  error.response && error.response.data.message
                  ? error.response.data.message 
                  : error.message,
                })
    }

}