import React from 'react'
import styles from "./BurgerConstructor.module.css"
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'


export default function BurgerConstructor(props) {
    const bun = props.data.find(item => item.name === "Краторная булка N-200i")
    
    const ingredients = props.data.filter(item => {
        return item.name !== "Краторная булка N-200i" && item.name !== "Флюоресцентная булка R2-D3"
    })
    
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
                <div className={`${styles.constructor__items} custom-scroll pr-2`}>
                    {ingredients.map(item => {
                        return (
                            <div className={styles.constructor__item}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    key={item._id}
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            
                            </div>
                        )
                    })}                    
                </div>
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
