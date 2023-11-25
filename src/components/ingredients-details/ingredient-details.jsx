import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types'

export default function IngredientDetails({data}) {
  const {image, name, calories, proteins, fat, carbohydrates} = data

  IngredientDetails.propTypes = {
    'data': PropTypes.shape({
        "_id": PropTypes.string,
        "name": PropTypes.string,
        "type": PropTypes.string,
        "proteins": PropTypes.number,
        "fat": PropTypes.number,
        "carbohydrates": PropTypes.number,
        "calories": PropTypes.number,
        "price": PropTypes.number,
        "image": PropTypes.string,
        "image_mobile": PropTypes.string,
        "image_large": PropTypes.string,
        "__v": PropTypes.number,
     })
  }
  
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
