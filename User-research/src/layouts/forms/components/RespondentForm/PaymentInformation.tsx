import InputItem from "../InputItem";
import styles from './MainInformation.module.sass'
export default function PaymentInformation(){
    return (
        <>
        <div className={styles.section}>
            <h6>
            Введите Ваши платежные реквизиты для перечисления вознаграждения
            </h6>
            <div className={styles.wrapper_inputs}>
                <InputItem title='Номер карты' required={true} type='text' placeholder='Введите текст'/>
                <InputItem title='Номер счета' required={true} type='text' placeholder='Введите текст'/>
                <InputItem title='БИК' required={true} type='text' placeholder='Введите текст'/>
                <InputItem title='Наименование получателя' required={true} type='text' placeholder='Введите текст'/>
            </div>
            
        </div>
        </>
    )
}