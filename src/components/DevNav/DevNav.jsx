import React from "react";
import DevContainer from "../DevContainer/DevContainer";
import styles from "./DevNav.module.css";
const DevNav = () => {
  return (
    <header className={styles.header}>
      <DevContainer max="1600px">
        <nav className={styles.nav}>
          <div>logo</div>
          <ul className={styles.list}>
            <li>
              <a href="">link1</a>
            </li>
            <li>
              <a href="">link2</a>
            </li>
            <li>
              <a href="">link3</a>
            </li>
          </ul>
        </nav>
      </DevContainer>
    </header>
  );
};

export default DevNav;
