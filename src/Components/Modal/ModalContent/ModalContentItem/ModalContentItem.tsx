import React, { FC } from "react";
import styles from "./ModalContentItem.module.scss";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IModalCOntentItemProps from "./modalContentItem.interface";
import { useDispatch, useStore } from "react-redux";
import { removePizzas } from "../../../../Store/actions/allPizzasAction";

const ModalContentItem = ({ img, price, name, id }: IModalCOntentItemProps) => {

    const dispatch = useDispatch();
    const { getState } = useStore();

    const handleRemove = (id: number) => {
       removePizzas(dispatch, getState, id);
    };

    return (
      <div className={styles.main}>
        <div className={styles.about}>
            <img src={img}
            width="70px"
            alt="pizza" />
            <div className={styles.about_text}>
                <p className={styles.title}>{ name }</p>
                <p className={styles.text}>Тонкое тесто 26см</p>
            </div>
        </div>
        <div className={styles.count_wrapper}>
            <button className={styles.count_btn}>-</button>
            <p className={styles.count}>2</p>
            <button className={styles.count_btn}>+</button>
        </div>
        <p className={styles.price}>{ price } P</p>
       <span onClick={() => handleRemove(id)}><HighlightOffIcon className={styles.remove_icon} /></span>
      </div>
    );
}

export default ModalContentItem;