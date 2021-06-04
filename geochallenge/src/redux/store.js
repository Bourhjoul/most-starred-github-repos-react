import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {listRepos} from './Reducers/Reposreducer'
const reducer = combineReducers({
    listRepos
})


const initialState = {

}

const middelware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)
    
export default store