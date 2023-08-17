
import { useState } from 'react'
import ButtonSave from '../../components/buttons/ButtonSave'
import ButtonSingInAndLogIn from '../../components/buttons/ButtonSingInAndLogIn'
import styles from './RespondentFormsMainContent.module.sass'
import MiniCyrcle from './components/MiniCyrcle'
import MainInformation from './components/RespondentForm/MainInformation'
import PaymentInformation from './components/RespondentForm/PaymentInformation'
export default function RespondentForm(){
    const [count, setCount] = useState(1)
    function nextStep(){
        setCount(count + 1)
        console.log(count);
        
    }
    function prevStep(){
        setCount(count - 1)
    }
    return (
        <div className={styles.wrapper_forms}>
            <div className={styles.forms_content}>
                <div className={styles.title}>
                    <h5>Ева, добро пожаловать!</h5>
                    <h5>
                        Для поиска исследований заполните обязательную анкету респондента.
                    </h5>
                </div>
                <div className={styles.navigation_forms}>
                    <div className={styles.navigation_item}>
                        <div className={styles.cyrcle}>
                            <h5>1</h5>
                        </div>
                        <p>Основная информация</p>
                    </div>
                    <MiniCyrcle />
                    <div className={styles.navigation_item}>
                        <div className={styles.cyrcle}>
                            <h5>2</h5>
                        </div>
                        <p>Платежные реквизиты</p>
                    </div>
                    <MiniCyrcle />
                    <div className={styles.navigation_item}>
                        <div className={styles.cyrcle}>
                            <h5>3</h5>
                        </div>
                        <p>Дополнительная информация</p>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.back_link_wrapper}>
                        <button className={styles.back_button}><img src="/back.png" alt="" onClick={prevStep}/></button>
                    </div>
                    {(count == 1) ? <MainInformation /> : <PaymentInformation />}
                    {/* <PaymentInformation /> */}
                    {/* <MainInformation />  */}
                    <div className={styles.section_buttons}>
                        <ButtonSingInAndLogIn title='Сохранить' />
                        <ButtonSave title='Продолжить' callback={nextStep}/>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}