import React, { FC } from "react";
import styles from "./ModalEmpty.module.scss";
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../Store/actions/modalAction";

const ModalEmpty:FC = () => {

    const dispatch = useDispatch();
    
    const handleGetBack = () => {
        toggleModal(dispatch, false);
    };

  return (
    <div className={styles.main}>
       <p className={styles.title}>Корзина Пустая <SentimentDissatisfiedIcon /></p>
       <p className={styles.text1}>Вероятней всего, вы не заказывали еце еду.</p>
       <p className={styles.text2}>Для того, чтобы заказать еду перейди н главную страницу.</p>   
     <img src="http://www.clker.com/cliparts/7/P/h/r/i/s/no-food-allowed.svg" alt="no foods" />
       <div>
       <button className={styles.btn} onClick={handleGetBack}>Вернутся назад</button>
       </div>
    </div>
  );
};

export default ModalEmpty;