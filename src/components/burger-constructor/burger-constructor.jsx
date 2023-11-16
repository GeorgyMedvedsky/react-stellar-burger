//import PropTypes from 'prop-types';
import styles from "./burger-constructor.module.css"
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'


export default function BurgerConstructor({data}) {
    const bun = data.find(item => item.type === "bun")
    const ingredients = data.filter(item => {
        return item.type !== "bun"
    })
    // BurgerConstructor.propTypes = PropTypes.shape([{
    //     "_id": PropTypes.string,
    //     "name": PropTypes.string,
    //     "type": PropTypes.string,
    //     "proteins": PropTypes.number,
    //     "fat": PropTypes.number,
    //     "carbohydrates": PropTypes.number,
    //     "calories": PropTypes.number,
    //     "price": PropTypes.number,
    //     "image": PropTypes.string,
    //     "image_mobile": PropTypes.string,
    //     "image_large": PropTypes.string,
    //     "__v": PropTypes.number,
    // }])
    
    return (
        <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4 `}>
            <div className={styles.constructor}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
                <ul className={`${styles.constructor__items} custom-scroll`}>
                    {ingredients.map(item => {
                        return (
                            <li className={styles.constructor__item} key={item._id}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            
                            </li>
                        )
                    })}                    
                </ul>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            <div className={`${styles.info} mt-10`}>
                <p className='text text_type_digits-medium mr-10'>
                    <span className={`mr-2`}>610</span>
                    <CurrencyIcon />
                </p>
                <Button htmlType="button" type="primary" size="medium">
                    Нажми на меня
                </Button>
            </div>
        </section>
    )
}
