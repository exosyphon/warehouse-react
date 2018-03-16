import React from 'react';
import {commonPropTypes} from '../shared/common_prop_types';

export class Warehouse extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.warehouse.name}</td>
      </tr>
    );
  }
}

Warehouse.propTypes = {
  warehouse: commonPropTypes.warehouse,
};
