import React from 'react';
import './App.css';
import {WarehouseContainer} from '../warehouse/warehouse_container';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
         <WarehouseContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
