import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {WarehouseContainer} from '../warehouse/warehouse_container';

describe('App', () => {
  it('renders WarehouseContainer', () => {
      const wrapper = shallow(
          <App />
      );
      expect(wrapper.find(WarehouseContainer).length).toEqual(1);
  });
});
