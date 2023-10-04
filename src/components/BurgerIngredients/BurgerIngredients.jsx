import React from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function IngredientItem(props) {
    const {image, price, name} = props.data
    return (
        <div className={styles.ingredientItem}>
            <img src={image} alt={name}/>
            <p className={`${styles.ingredientItem__price} text text_type_digits-default mt-2 mb-2`}>
                <span className='mr-4'>{price}</span>
                <CurrencyIcon type="primary" />
            </p>
            <h3 className={`${styles.ingredientItem__name} text text_type_main-default`}>
                {name}
            </h3>
            
        </div>
    )
}

function IngredientsCategory(props) {
    let categoryType = props.items[0].type
    let heading

    switch (categoryType) {
        case 'bun':
            heading = 'Булки'
            break;
        case 'main':
            heading = 'Начинки'
            break;
        case 'sauce':
            heading = 'Соусы'
            break;
        default:
            break;
    }

    return (
        <div className='mt-10'>
            <h2 className='text text_type_main-medium mb-6'>{heading}</h2>
            <ul className={styles.ingredientsCategory__list}>
            {props.items.map(item => {
                return (
                    <li>
                        <IngredientItem data={item} key={item._id}/>
                    </li>
                )
            })}  
            </ul>
        </div>
    )
}

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('Бургер')
    const buns = props.data.filter(item => item.type === 'bun')
    const fillings = props.data.filter(item => item.type === 'main')
    const sauces = props.data.filter(item => item.type === 'sauce')
    return (
        <section className={styles.burgerIngredients}>
            <h1 className={`${styles.burgerIngredients__title} text text_type_main-large`}>Соберите бургер</h1>
            <div className={styles.burgerIngredients__tabs}>
                <Tab value="Бургер" active={current === 'Бургер'} onClick={setCurrent}>
                    Бургер
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы 
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles.burgerIngredients__items} pl-4 pr-4 custom-scroll`}>
                <IngredientsCategory items={buns}/>
                <IngredientsCategory items={sauces}/>
                <IngredientsCategory items={fillings}/>
            </div>
        </section>
  )
}