// React
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsCategory from './ingredients-category/ingredients-category';
// Styles
import styles from './burger-ingredients.module.css';

export default function BurgerIngredients() {
    const { items } = useSelector(store => store.ingredients);

    const [current, setCurrent] = useState('Бургер');

    const buns = useMemo(() => items.filter(item => item.type === 'bun'), [items]);
    const fillings = useMemo(() => items.filter(item => item.type === 'main'), [items]);
    const sauces = useMemo(() => items.filter(item => item.type === 'sauce'), [items]);

    const scrollTo = (type, ref) => {
        setCurrent(type);
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const bunsRef = useRef(null);
    const fillingsRef = useRef(null);
    const saucesRef = useRef(null);

    const onScroll = useCallback(() => {
        const bunsPos = bunsRef.current.getBoundingClientRect().top;
        const saucesPos = saucesRef.current.getBoundingClientRect().top;
        const fillingsPos = fillingsRef.current.getBoundingClientRect().top;
        
        if (bunsPos < window.innerHeight && bunsPos > 0) {
            setCurrent('Бургер');
        } else if (saucesPos < window.innerHeight && saucesPos > 0) {
            setCurrent('Соусы');
        } else if (fillingsPos < window.innerHeight && fillingsPos > 0) {
            setCurrent('Начинки');
        }
    }, [bunsRef, saucesRef, fillingsRef]);

    useEffect(() => {
        const scrollContainer = document.querySelector(`.${styles.burgerIngredients__items}`);
        scrollContainer.addEventListener('scroll', onScroll);

        return () => scrollContainer.removeEventListener('scroll', onScroll);
    }, [onScroll]);

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