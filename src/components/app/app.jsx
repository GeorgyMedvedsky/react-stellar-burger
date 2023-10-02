import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients"

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <BurgerIngredients data={data}/>
    </div>
  );
}

export default App;
