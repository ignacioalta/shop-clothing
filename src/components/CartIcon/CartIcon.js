import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg';
import { connect } from 'react-redux';

import './cartIcon.scss';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(
  null, mapDispatchToProps
)(CartIcon);