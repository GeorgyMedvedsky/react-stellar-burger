import styles from './ingredients-category.module.css'
import IngredientItem from '../ingredient-item/ingredient-item'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types'

const titles = {
    'bun': 'Булки',
    'main': 'Начинки',
    'sauce': 'Соусы'
}

export default function IngredientsCategory({items}) {
    const categoryType = items[0].type
    const heading = titles[categoryType]

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

IngredientsCategory.propTypes = {
    'items': PropTypes.arrayOf(ingredientPropType)
}