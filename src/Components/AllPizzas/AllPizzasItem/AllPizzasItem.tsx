import React, { FC, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { setAllPizzas } from "../../../Store/actions/allPizzasAction";
import IAllPizzasProps from "./allPizzaItem.interface";
import styles from "./AllPizzasItem.module.scss";

const AllPizzasItem = ({ img, name, id, price }: IAllPizzasProps) => {

    const [count, setCount] = useState<number>(0);
    const dispatch = useDispatch();
    const { getState } = useStore();
    const { selectedPizzas } = useTypedSelector(s => s.allPizzas);

    console.log('selected array 2222', selectedPizzas);

    const handleAddPizza = (id: number) => {
        console.log('id: ', id);
       setCount(prew => prew + 1);
       setAllPizzas(dispatch, getState, id);
       console.log('after', selectedPizzas);
    };


    return (
      <div className={styles.main}>
        <img src={img} alt={name} />
        <p className={styles.title}>{name}</p>
        <div className={styles.atributes}>
            <div className={styles.weight}>
                <button className={styles.weight_btn1}>Тонкое</button>
                <button className={styles.weight_btn2}>Традиционное</button>
            </div>
            <div className={styles.size}>
                <button className={styles.size_btn}>26см</button>
                <button className={styles.size_btn}>30см</button>
                <button className={styles.size_btn}>40см</button>
            </div>
        </div>
        <div className={styles.about}>
            <p className={styles.price}>от {price} p</p>
            <button onClick={() => handleAddPizza(id)} className={styles.add_btn}>+ Добавить { count ? <span id={`id${id}`} className={styles.summ}>{ count }</span> : null }</button>
        </div>
      </div>
    );
}

export default AllPizzasItem;