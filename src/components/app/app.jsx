import styles from "./app.module.css";
import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"

const URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch(URL);
        const result = await res.json();
        setData(result.data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        {data.length > 0 &&
          <>
            <BurgerIngredients data={data}/>
            <BurgerConstructor data={data}/>
          </>
        }
      </main>
    </div>
  );
}

export default App;
