import { useState, useRef } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsCategory from './ingredients-category/ingredients-category'

export default function BurgerIngredients({data}) {
    const [current, setCurrent] = useState('Бургер')

    const buns = data.filter(item => item.type === 'bun')
    const fillings = data.filter(item => item.type === 'main')
    const sauces = data.filter(item => item.type === 'sauce')

    const scrollTo = (type, ref) => {
        setCurrent(type);
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const bunsRef = useRef(null);
    const fillingsRef = useRef(null);
    const saucesRef = useRef(null);

    return (
        <section className={styles.burgerIngredients}>
            <h1 className={`${styles.burgerIngredients__title} text text_type_main-large`}>Соберите бургер</h1>
            <div>
                <div className={styles.burgerIngredients__tabs}>
                    <Tab value="Бургер" active={current === 'Бургер'} onClick={() => scrollTo('Бургер', bunsRef)}>
                        Бургер
                    </Tab>
                    <Tab value="Соусы" active={current === 'Соусы'} onClick={() => scrollTo('Соусы', saucesRef)}>
                        Соусы 
                    </Tab>
                    <Tab value="Начинки" active={current === 'Начинки'} onClick={() => scrollTo('Начинки', fillingsRef)}>
                        Начинки
                    </Tab>
                </div>
                <div className={`${styles.burgerIngredients__items} pl-4 pr-4 custom-scroll`}>
                    <div className='mt-10' ref={bunsRef}>
                        <IngredientsCategory items={buns}/>
                    </div>
                    <div className='mt-10' ref={saucesRef}>
                        <IngredientsCategory items={sauces}/>
                    </div>
                    <div className='mt-10' ref={fillingsRef}>
                        <IngredientsCategory items={fillings}/>
                    </div>
                </div>
            </div>
        </section>
  )
}