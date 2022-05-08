import React, { useContext } from 'react';
import Image from 'next/image';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';

import styles from '@styles/ProductItem.module.scss';
// import product from "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = ({ product }) => {
  // const [cart, setCar] = useState("");

  const { state, addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  let urlProduct = product.images[0];

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => urlProduct} alt={product.title} src={urlProduct} width={240} height={240} layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']}>
          <div onClick={() => handleCart(product)} onKeyDown={() => handleCart(product)} role="presentation">
            {state.cart.includes(product) ? (
              <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addToCartImage} alt="added to cart" />
            ) : (
              <Image className={(styles.pointer, styles['add-to-cart-btn'])} src={addToCartImage} alt="add to cart" />
            )}
          </div>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
