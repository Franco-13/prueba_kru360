import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <nav className={styles.buttonsContainer}>
        <NavLink
          to="contacts"
          className={(e) => (e.isActive ? styles.active : styles.inactive)}
        >
          Contactos
        </NavLink>
        <NavLink
          to="task"
          className={(e) => (e.isActive ? styles.active : styles.inactive)}
        >
          Tareas
        </NavLink>
        <NavLink
          to="comments"
          className={(e) => (e.isActive ? styles.active : styles.inactive)}
        >
          Comentarios
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
