import React, { useContext } from 'react';
import Image from 'next/image';
import Appcontext from '@context/AppContext';

import iconClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(Appcontext);

  const handleRemove = (product) => {
    removeFromCart(product, index);
  };

  let urlProduct = product.images[0];

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={urlProduct} alt={product.title} width={70} height={70} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image
        className={(styles.pointer, styles['more_clickable-area'])}
        src={iconClose}
        alt="close"
        onClick={() => {
          handleRemove(product);
        }}
      />
    </div>
  );
};

export default OrderItem;
