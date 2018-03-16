import * as types from '../constants/types';

export function warehouseReducer(state = {}, action) {
  switch (action.type) {
    case types.warehouse.FETCH_WAREHOUSES:
      return {
        payload: [{id: 1, name: 'wow'}, {id: 2, name: 'super'}]
      };
    default:
      return state;
  }
}
