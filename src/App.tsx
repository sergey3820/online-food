import React, { FC } from "react";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/MenuMain/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import AllPizas from "./Components/AllPizzas/AllPizzasMain/AllPizas";
import MeatPizzas from "./Components/MeatPizzas/MeatPizzas";
import VeganPizzas from "./Components/VeganPizzas/VeganPizzas";
import Gril from "./Components/Gril/Gril";
import SpicyPizzas from "./Components/SpicyPizzas/SpicyPizzas";
import ClosePizzas from "./Components/ClosePizzas/ClosePizzas";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/ModalMain/Modal";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <Header />
        <Menu />
        <div className={styles.routers}>
          <Route path="/All" component={AllPizas} />
          <Route path="/Meat" component={MeatPizzas} />
          <Route path="/Vegeterian" component={VeganPizzas} />
          <Route path="/Gril" component={Gril} />
          <Route path="/Spicy" component={SpicyPizzas} />
          <Route path="/Close" component={ClosePizzas} />
          <Modal />
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
