import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';

import AppContext from '@context/AppContext.js';

import MyOrder from '@containers/MyOrder.jsx';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_bota_fora.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state } = useContext(AppContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [toggleOrder, setToggleOrder] = useState(false);

  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
  };

  return (
    <nav className={styles.Header}>
      <img src={menu.src} alt="menu" className={styles.menu} />

      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" className={styles['logo-nav']} />
        </Link>
        <ul>
          <li>
            <Link href={'/'}>All</Link>
          </li>
          <li>
            <Link href={'/'}>Clothes</Link>
          </li>
          <li>
            <Link href={'/'}>Electronics</Link>
          </li>
          <li>
            <Link href={'/'}>Furnitures</Link>
          </li>
          <li>
            <Link href={'/'}>Toys</Link>
          </li>
          <li>
            <Link href={'/'}>Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}>
            <span onClick={handleToggle} onKeyDown={handleToggleOrder} role="presentation">
              platzi@example.com
            </span>
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder} role="presentation">
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrder && <MyOrder />}
    </nav>
  );
};

export default Header;
