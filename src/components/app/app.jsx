// React
import { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
// Components
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"
// Styles
import styles from "./app.module.css";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  const {items, itemsRequest, itemsFailed} = useSelector(store => store.ingredients)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  if(itemsRequest) return <p className={`text text_type_main-medium`}>Загрузка...</p>;
  if(itemsFailed) return <p className={`text text_type_main-medium`}>Нет доступных данных.</p>;

  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.content}>
          {items.length > 0 &&
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          }
        </main>
      </DndProvider>
    </div>
  );
};

export default App;
