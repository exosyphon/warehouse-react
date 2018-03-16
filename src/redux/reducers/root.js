import { combineReducers } from 'redux';
import {warehouseReducer} from './warehouse_reducer';

const rootReducer = combineReducers({
  warehouseReducer,
});

export default rootReducer;
