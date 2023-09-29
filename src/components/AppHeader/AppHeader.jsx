import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'

export default function AppHeader() {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li className={styles.menu__item}>
                    <a href="#" className={`${styles.menu__itemLink} pl-5 pr-5 pb-5 pt-5`}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default ml-2">Конструктор</p>
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#" className={`${styles.menu__itemLink} pl-5 pr-5 pb-5 pt-5`}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
                    </a>
                </li>
                <li className={styles.logo}>
                    <a href="#">
                        <Logo className={styles.logo}/> 
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#" className={`${styles.menu__itemLink} pl-5 pr-5 pb-5 pt-5`}>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
