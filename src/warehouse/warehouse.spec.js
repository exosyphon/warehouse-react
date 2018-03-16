import React from 'react';
import ReactDOM from 'react-dom';
import {Warehouse} from './warehouse';
import {shallow} from 'enzyme';

fdescribe('Warehouse', () => {
  it('renders props', () => {
      const wrapper = shallow(
          <Warehouse warehouse={{id: 1, name: 'Hi'}}/>
      );
      expect(wrapper.html()).toContain('Hi');
  });
});
