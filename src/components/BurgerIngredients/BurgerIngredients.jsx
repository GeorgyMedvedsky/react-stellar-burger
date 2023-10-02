import React from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('Бургер')

    return (
        <section className={styles.burgerIngredients}>
            <h2 className={`${styles.burgerIngredients__title} text text_type_main-large`}>Соберите бургер</h2>
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
            {/* <ul className="ingredients">
                <ul>
                    <li>Булки</li>
                    <li>
                        <IngredientsItem />
                    </li>
                </ul>
            </ul> */}
        </section>
  )
}

// function IngredientsItem(props) {

//     return (
//         <div className='item'>
//             <img src={props.image} alt={props.name} />

//         </div>
//     )
// }

