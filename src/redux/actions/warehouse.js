import * as types from '../constants/types';

export default function fetchWarehouses() {
  return {
    type: types.warehouse.FETCH_WAREHOUSES
  };
}
