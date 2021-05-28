import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import AllPizzasItem from "../AllPizzasItem/AllPizzasItem";
import styles from "./AllPizas.module.scss";
import ReactPaginate from "react-paginate";

const AllPizas = () => {
  const { allPizzas } = useTypedSelector((state) => state.allPizzas);
  const p = allPizzas.length - 2;
  console.log(p);
  const [pizzas, setPizzas] = useState(allPizzas.slice(0, p));
  const [pageNumber, setPageNumber] = useState(0);

  const { selectedPizzas } = useTypedSelector(s => s.allPizzas);

  console.log('selected array', selectedPizzas);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const displayPizzas = pizzas
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((el) => {
      return (
        <AllPizzasItem
          id={el.id}
          name={el.name}
          img={el.picture}
          price={el.price}
        />
      );
    });

  const pageCount = Math.ceil(pizzas.length / usersPerPage);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log("Pizzas: ", pizzas);
  console.log("DisplayPizzas", displayPizzas);

  return (
    <div className={styles.main}>
      <h1>All Pizas</h1>
      <div className={styles.item_main}>{displayPizzas}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName={styles.paginationButton}
        previousLinkClassName={styles.previousButton}
        nextLinkClassName={styles.nextButton}
        disabledClassName={styles.disabledButton}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
};

export default AllPizas;
