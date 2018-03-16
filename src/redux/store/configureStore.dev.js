import { createStore, compose} from 'redux';
import rootReducer from '../reducers/root';
// import saga from 'redux-saga';

let store;
export default (initialState) => {
     if (store) {
       return store;
}
const createdStore = createStore(rootReducer, initialState, compose(
) );
store = createdStore;
     return store;
   };
