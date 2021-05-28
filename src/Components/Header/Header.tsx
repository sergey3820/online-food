import React, { FC } from "react";
import styles from "./Header.module.scss";
import { LocalPizza, ShoppingCartOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../Store/actions/modalAction";
import { useTypedSelector } from "../../Hooks/useTypedSelector";

const Header: FC = () => {

  const dispatch = useDispatch();
  const { selectedPizzas }: any = useTypedSelector(s => s.allPizzas);

  const handleClose = () => {
    toggleModal(dispatch, true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_child}>
        <LocalPizza style={{ color: "orange", fontSize: "50px" }} />
        <div className={styles.text_wrapper}>
          <p className={styles.title}>REACT PIZZA</p>
          <p className={styles.text}>Самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className={styles.main_child}>
        <div className={styles.price}>
          <p className={styles.prcie_text}>$520</p>
        </div>
        <div className={styles.price_text_wrapper} onClick={handleClose}>
          <ShoppingCartOutlined style={{ fontSize: '16px' }} />
          <p className={styles.price_text}>{ selectedPizzas.length }</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
