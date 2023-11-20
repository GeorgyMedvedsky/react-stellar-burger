//import PropTypes from 'prop-types';
import styles from './ingredient-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function IngredientItem({dataItem}) {
    const {image, price, name} = dataItem
    // IngredientItem.propTypes = PropTypes.shape({
    //     "name": PropTypes.string,
    //     "price": PropTypes.number,
    //     "image": PropTypes.string,
    // })

    return (
        <div className={styles.ingredientItem}>
            <img src={image} alt={name} />
            <p className={`${styles.ingredientItem__price} text text_type_digits-default mt-2 mb-2`} >
                <span className='mr-4'>{price}</span>
                <CurrencyIcon type="primary" />
            </p>
            <h3 className={`${styles.ingredientItem__name} text text_type_main-default`}>
                {name}
            </h3>
        </div>
    )
}
