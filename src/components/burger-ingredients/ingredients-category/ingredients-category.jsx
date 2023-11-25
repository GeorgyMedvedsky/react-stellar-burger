import styles from './ingredients-category.module.css'
import IngredientItem from '../ingredient-item/ingredient-item'
import PropTypes from 'prop-types'

export default function IngredientsCategory({items}) {
    const titles = {
        'bun': 'Булки',
        'main': 'Начинки',
        'sauce': 'Соусы'
    }
    const categoryType = items[0].type
    const heading = titles[categoryType]

    IngredientsCategory.propTypes = {
        'items': PropTypes.arrayOf(PropTypes.shape({
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
         }))
    }

    return (
        <>
            <h2 className='text text_type_main-medium mb-6'>{heading}</h2>
            <ul className={styles.ingredientsCategory__list}>
                {items.map(item => {
                    return (
                        <li key={item._id}>
                            <IngredientItem dataItem={item}/>
                        </li>
                    )
                })}  
            </ul>
        </>
    )
}
