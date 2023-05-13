import React, { useState } from 'react';
import styles from './Nav.module.scss';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
 
  // đăng xuất và chuyển hướng đến trang login
  const handleLogOut = () => {
    navigate('/');
    window.location.reload();
  };

  const onChangeNav = (nameRoute) => {
    // sẽ chuyển hướng đến trang /nameRoute
    navigate('/' + nameRoute);

    // đóng nav khi click vào nav dành cho mobile
    // dispatch(changeIsOpen(false));
  };
  return (
    <div className={styles.navStyle} >
      
    </div>
  );
}

export default Nav;
