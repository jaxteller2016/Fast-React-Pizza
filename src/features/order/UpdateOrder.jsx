import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { updateOrder } from '../../services/apiRestaurant';
// eslint-disable-next-line  no-unused-vars
function UpdateOrder({ order }) {
  // eslint-disable-next-line  no-unused-vars
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.shape({
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        pizzaId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unitPrice: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
      }),
    ).isRequired,
    customer: PropTypes.string,
    estimatedDelivery: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    orderPrice: PropTypes.number.isRequired,
    priority: PropTypes.bool,
    priorityPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpdateOrder;
// eslint-disable-next-line  no-unused-vars
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
