import React from "react";
import styles from "./LoginFooter.module.css"
import { Routes, Route } from "react-router-dom";


const LoginFooter = (props) => {
  return (
    <div className={styles.loginFooter}>
      <Routes>
        <Route path="/*" element={<div className={styles.footerTextCopyright}>Copyright © 2024</div>} />
        <Route path="/login" element={<div className={styles.footerTestAccount}><p >Test account:</p>
          <p>Email: free@samuraijs.com</p>
          <p>Password: free</p></div>} />
      </Routes>
    </div>
  )
}


export default LoginFooter;