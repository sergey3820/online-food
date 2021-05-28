import React, { FC } from "react";
import styles from "./ModalContent.module.scss";
import ModalContentHeader from "../ModalContentHeader/ModalContentHeader";
import ModalContentItem from "../ModalContentItem/ModalContentItem";
import ModalContentFooter from "../ModalContentFooter/ModalContentFooter";
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";
import ModalEmpty from "../ModalEmpty/ModalEmpty";

const ModalContent:FC = () => {

  const { selectedPizzas }: any = useTypedSelector(state => state.allPizzas);

    return (
      <div className={styles.main}>
         <ModalContentHeader />
           { selectedPizzas.length > 0 ? selectedPizzas.map((el: any) => (
              <ModalContentItem img={el.picture} price={el.price} name={el.name} id={el.id} />  
           )) : <ModalEmpty /> }
         <ModalContentFooter />
      </div>      
    );
}

export default ModalContent;