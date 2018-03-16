import PropTypes from 'prop-types';

const warehouse = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});

const warehouses = PropTypes.arrayOf(warehouse);

export const commonPropTypes = {
  warehouse,
  warehouses,
};
