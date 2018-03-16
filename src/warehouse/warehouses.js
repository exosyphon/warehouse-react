import React from 'react';
import {Warehouse} from './warehouse';
import {commonPropTypes} from '../shared/common_prop_types';

export class Warehouses extends React.Component {
  render() {
    return (
      <tbody>
      { this.props.warehouses &&
      this.props.warehouses.map((warehouse) => { return <Warehouse key={warehouse.id} warehouse={warehouse} /> })
    }
    </tbody>
    );
  }
};

Warehouses.propTypes = {
  warehouses: commonPropTypes.warehouses,
};
