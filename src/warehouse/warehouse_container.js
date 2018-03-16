import React from 'react';
import {Warehouses} from './warehouses';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWarehouses from '../redux/actions/warehouse';
import {commonPropTypes} from '../shared/common_prop_types';

class WarehouseContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchWarehouses();
  }

  render() {
    return (
      <div>
        <header className="app-header">
          <h1>Warehouse Viewer</h1>
        </header>
        <table>
          <Warehouses
            warehouses={this.props.warehouses}
          />
        </table>
      </div>
    );
  }
};

WarehouseContainer.propTypes = {
  warehouses: commonPropTypes.warehouses,
};

const mapStateToProps = (state) => {
  return {
    warehouses: state.warehouseReducer.payload,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
   actions: bindActionCreators({fetchWarehouses},dispatch)
  }
};

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(WarehouseContainer);

export { connectedContainer as WarehouseContainer };
