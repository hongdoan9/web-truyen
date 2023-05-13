import React, { useState, useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import { Modal } from 'antd';

const Login = ({ visible, centered = true, onCancel, onOk, onOpenResgister }) => {
  return (
    <Modal
      centered={centered}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      width={700}
      // animationIn={'slideInTop'}
      // animationOut={'slideOutTop'}
      closable={true}
      maskClosable={true}
      style={{ borderRadius: 50, padding: 0 }}
    >
      <div id={styles.loginModal}>
        <span className={styles.title}>Đăng nhập</span>

        <div className={styles.formInput}>
          <span>Email</span>
          <input placeholder="Nhập email" />
        </div>

        <div className={styles.formInput}>
          <span>Mật khẩu</span>
          <input placeholder="Nhập mật khẩu" />
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <span>Quên mật khẩu</span>
            <span>Đăng ký</span>
          </div>
          <div className={styles.btndangky} onClick={onOpenResgister}>
            <span>Đăng ký</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
