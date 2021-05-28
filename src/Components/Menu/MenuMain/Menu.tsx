import React, { FC } from "react";
import styles from "./Menu.module.scss";
import pathsAtribute from "../../../Paths/index";
import MenuLink from "../MenuLink/MenuLink";
import MenuFilter from "../MenuFilter/MenuFilter";


const Menu:FC = () => {

  console.log(pathsAtribute);

    return (
      <div className={styles.main}>
       <div className={styles.link_main}>
       { pathsAtribute.map((item) => (
            <MenuLink address={item.path} text={item.text} />
          )) }
       </div>
       <MenuFilter />
      </div>
    );
}

export default Menu;