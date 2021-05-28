import React, { FC, useState, useRef, useEffect, Ref } from "react";
import styles from "./Modal.module.scss";
import { LocalPizza, Cancel } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { toggleModal } from "../../../Store/actions/modalAction";
import ModalContent from "../ModalContent/ModalContentMain/ModalContent";
import { ClickAwayListener } from "@material-ui/core";

const Modal: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    const { isOpen } = useTypedSelector(s => s.modal);
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
       toggleModal(dispatch, false);
    };


  const handleClickAway = () => {
     setOpen(false);
  };


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div className={styles.main} style={ isOpen ? {display: 'block'} : {display: 'none'} }>
      <div className={styles.modal_header}>
      <div className={styles.main_child}>
        <LocalPizza style={{ color: "orange", fontSize: "50px" }} />
        <div className={styles.text_wrapper}>
          <p className={styles.title}>REACT PIZZA</p>
          <p className={styles.text}>Самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <span onClick={handleToggle}>
      <Cancel className={styles.cancel_btn} />
      </span>
      </div>
      <ModalContent />
    </div>
    </ClickAwayListener>
  );
};

export default Modal;
