import React, { FC } from "react";
import styles from "./MenuLink.module.scss";
import { NavLink } from "react-router-dom";
import IlinkProps from "./menuLink.interface";

const MenuLink = ({ address, text }: IlinkProps) => {
  return (
    <NavLink
      to={address}
      activeClassName={styles.active}
      className={styles.link}
    >
      <p>{text}</p>
    </NavLink>
  );
};

export default MenuLink;
