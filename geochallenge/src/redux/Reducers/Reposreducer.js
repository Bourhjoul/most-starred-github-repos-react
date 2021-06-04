import { REPOS_LIST_FAIL, REPOS_LIST_REQUEST, REPOS_LIST_SUCCESS } from "../Reposconstants"



export const listRepos = (state={repos: {items : []} },action) => {
    switch(action.type) {
        case  REPOS_LIST_REQUEST:
            return {loading : true, repos : {}}
        case  REPOS_LIST_SUCCESS:
            return {loading : false , repos: action.payload}
        case  REPOS_LIST_FAIL:
            return {loading : false , error : action.payload}
        default :
        return state  
        }
}