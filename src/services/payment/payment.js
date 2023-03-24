import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KUSyrKfW2ml5zvjf5mi9DdLVGsSLSTpn5yfqy86wHKyTI4UsXFwCDaH5nT7cA2V4aGMGDciJiRH65ad3ebCFEpX00J6DbKtPv');

export default (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};