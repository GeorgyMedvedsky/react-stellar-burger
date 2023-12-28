import styles from './ingredient-details.module.css';
// Redux
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../services/actions/currentIngredient';
import { useEffect } from 'react';

export default function IngredientDetails({item}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentItem(item))
  }, [dispatch, item])

  const {image, name, calories, proteins, fat, carbohydrates} = item;
  
  return (
    <>
      <img src={image} alt={name} className={`${styles.ingredientDetails__image}`}/>
      <h3 className={`text text_type_main-medium mt-4`}>{name}</h3>
      <ul className={`${styles.ingredientDetails__detailsList} mt-8`}>
          <li className={`${styles.ingredientDetails__detailsItem} text text_type_main-default text_color_inactive`}>
              <p className={`${styles.ingredientDetails__detailsText}`}>Калории,ккал</p>
              <p className={`${styles.ingredientDetails__detailsText}`}>{calories}</p>
          </li>
          <li className={`${styles.ingredientDetails__detailsItem} text text_type_main-default text_color_inactive`}>
              <p className={`${styles.ingredientDetails__detailsText}`}>Белки,г</p>
              <p className={`${styles.ingredientDetails__detailsText}`}>{proteins}</p>
          </li>
          <li className={`${styles.ingredientDetails__detailsItem} text text_type_main-default text_color_inactive`}>
              <p className={`${styles.ingredientDetails__detailsText}`}>Жиры,г</p>
              <p className={`${styles.ingredientDetails__detailsText}`}>{fat}</p>
          </li>
          <li className={`${styles.ingredientDetails__detailsItem} text text_type_main-default text_color_inactive`}>
              <p className={`${styles.ingredientDetails__detailsText}`}>Углеводы,г</p>
              <p className={`${styles.ingredientDetails__detailsText}`}>{carbohydrates}</p>
          </li>
      </ul>
    </>
  )
}
