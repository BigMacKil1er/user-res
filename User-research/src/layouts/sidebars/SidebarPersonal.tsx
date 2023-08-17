import {useState} from 'react'
import styles from './SidebarPersonal.module.sass'
export default function SidebarPersonal(){
    const [userData, SetUserData] = useState({name: 'Елизавета', secondName: "Гета"})
    const [showItemsMenu, setShowItemsMenu] = useState(true)

    const itemSubmenu: string = styles.submenu_item
    const activeItemSubmunu: string = itemSubmenu + ' ' + styles.active

    const height = document.documentElement.clientHeight - 85 - 36 // здесь 85 это высота шапки сайта, а 36 сумма паддингов
    return (
        <div className={styles.sidebar}>
            <div className={styles.profile_item}>
                <div className={styles.profilePhoto}>
                    <img src="" alt="" />
                </div>
                <h5>{userData.name} <br /> {userData.secondName}</h5>
            </div>
            <div className={styles.nav_bar}>
                <div className={styles.nav}>
                    <button className={styles.button}>
                        <div className={styles.button_name}>
                            <img src="/User Multiple.png" alt="" />
                            <p>Данные профиля</p>
                        </div>
                        <img src="/downsmall.png" alt="" />
                    </button>
                    {showItemsMenu && 
                        <div className={styles.submenu}>
                            <a className={activeItemSubmunu} href=""><img src="/pencil.png" alt="" /> <p>Анкета</p></a>
                            <a className={styles.submenu_item} href=""><img src="/Content Book.png" alt="" /> <p>Подтвердить экспертность</p></a>
                        </div>}
                </div>
                <div className={styles.nav}>
                    <button className={styles.button}>
                        <div className={styles.button_name}>
                            <img src="/Notebook.png" alt="" />
                            <p>Проекты</p>
                        </div>
                        <img src="/downsmall.png" alt="" />
                    </button>
                    {!showItemsMenu && 
                        <div className={styles.submenu}>
                            <a className={styles.submenu_item} href=""><img src="/pencil.png" alt="" /> <p>Анкета</p></a>
                            <a className={styles.submenu_item} href=""><img src="/Content Book.png" alt="" /> <p>Подтвердить экспертность</p></a>
                        </div>}
                </div>
                <div className={styles.nav}>
                    <button className={styles.button}>
                        <div className={styles.button_name}>
                            <img src="/Cash Bag Dollar.png" alt="" />
                            <p>Баланс</p>
                        </div>
                    </button>
                </div>
                <div className={styles.nav}>
                    <button className={styles.button}>
                        <div className={styles.button_name}>
                            <img src="/Group.png" alt="" />
                            <p>Календарь</p>
                        </div>
                    </button>
                </div>
                <div className={styles.nav}>
                    <button className={styles.button}>
                        <div className={styles.button_name}>
                            <img src="/Vector.png" alt="" />
                            <p>Настройки</p>
                        </div>
                        <img src="/downsmall.png" alt="" />
                    </button>
                    {!showItemsMenu && 
                        <div className={styles.submenu}>
                            <a className={styles.submenu_item} href=""><img src="/pencil.png" alt="" /> <p>Анкета</p></a>
                            <a className={styles.submenu_item} href=""><img src="/Content Book.png" alt="" /> <p>Подтвердить экспертность</p></a>
                        </div>}
                </div>
            </div>
            <div className={styles.log_out}>
                    <div className={styles.nav}>
                        <button className={styles.button}>
                            <div className={styles.button_name}>
                                <img src="/out.png" alt="" />
                                <p>Log-out</p>
                            </div>
                        </button>
                    </div>
            </div>
        </div>
    )
}