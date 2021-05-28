import React, { FC } from "react";
import styles from "./ModalContentFooter.module.scss";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../Store/actions/modalAction";
import { buyPizza } from "../../../../Store/actions/allPizzasAction";
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";
import ModalEmpty from "../ModalEmpty/ModalEmpty";

const ModalContentFooter:FC = () => {

    const dispatch = useDispatch();
    const { selectedPizzas }: any = useTypedSelector(s => s.allPizzas);
    
    const handleCloseModal = () => {
        toggleModal(dispatch, false);
    };

    const handleBuy = () => {
        buyPizza(dispatch, []);
    };
  

    return (
      <div className={styles.main}>
        { selectedPizzas.length === 0 ? null : (<> <div className={styles.count_wrapper}>
             <p className={styles.title_text}>Всего Пицц: <span className={styles.count_span}>{ selectedPizzas.length } шт.</span></p>
             <p className={styles.price_text}>Сумма заказа: <span className={styles.price_span}>900 P</span></p>
         </div>
         <div className={styles.btn_wrapper}>
             <button className={styles.back_btn} onClick={handleCloseModal}>
                 <ArrowBackIosIcon className={styles.arrow} /> Вернутся назад
             </button>
             <button className={styles.buy_btn} onClick={handleBuy}>Оплатить сейчас</button>
         </div></>) }
      </div>
    );
}

export default ModalContentFooter;