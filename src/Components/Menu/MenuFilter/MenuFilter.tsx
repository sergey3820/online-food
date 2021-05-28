import React, { FC } from "react";
import styles from "./MenuFilter.module.scss";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

const MenuFilter:FC = () => {
    return (
        <div className={styles.main}>
        <InputLabel id="label">Filter By</InputLabel>
        <Select labelId="label" id="select" value="20">
          <MenuItem value="10">Price</MenuItem>
          <MenuItem value="20">Count</MenuItem>
        </Select>
        </div>
    );
}

export default MenuFilter;