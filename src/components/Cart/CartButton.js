import classes from './CartButton.module.css'; 
import { uiActions } from '../Store/index';
import { useDispatch, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux';
const CartButton = (props) => {
const cartQuantity = useSelector(state=> state.cart.cartQuantity)
const dispatch = useDispatch();
  function cartIem(){
  dispatch(uiActions.toggle());
}
  return (
    <button className={classes.button} onClick={cartIem}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
