import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
// const API = 'https://init-store.herokuapp.com/api/v1/products';
const API = 'https://api.escuelajs.co/api/v1/products';

import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => {
          //validación para urls correctas
          if (product.images.length > 0 && product.images[0] !== '') {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
