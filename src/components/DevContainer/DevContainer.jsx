import React from "react";
import styles from "./DevContainer.module.css";
const DevContainer = ({ children, max }) => {
  return (
    <div className={styles.container} style={{ maxWidth: `${max}` }}>
      {children}
    </div>
  );
};

export default DevContainer;
