import { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"

const URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(isLoading) {
      const fetchData = async () => {
        try{
          const res = await fetch(URL);
          const result = await res.json();
          setData(result.data);
          setIsLoading(false);
        } catch(err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    }
  }, [isLoading]);
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        {isLoading ? (
          <p className={`text text_type_main-medium`}>Загрузка...</p>
        ) : data.length > 0 ? (
          <>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </>
        ) : (
          <p className={`text text_type_main-medium`}>Нет доступных данных.</p>
        )}
      </main>
    </div>
  );
}

export default App;
