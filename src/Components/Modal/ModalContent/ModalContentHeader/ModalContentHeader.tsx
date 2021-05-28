import React, {FC} from "react";
import styles from "./ModalContentHeader.module.scss";
import { ShoppingCartOutlined, DeleteOutlineOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { buyPizza } from "../../../../Store/actions/allPizzasAction";

const ModalContentHeader:FC = () => {

    const dispatch = useDispatch();

    const handleClear = () => {
        buyPizza(dispatch, []);
    };

    return (
      <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.header_group}>
            <ShoppingCartOutlined className={styles.shop_icon} />
           <p className={styles.title}>Корзина</p>
            </div>
            <div className={styles.header_group}>
            <DeleteOutlineOutlined className={styles.remove_icon} />
           <a href="#" className={styles.text} onClick={handleClear}>Очистить корзину</a>
            </div>
          </div>
      </div>
    );
}

export default ModalContentHeader;