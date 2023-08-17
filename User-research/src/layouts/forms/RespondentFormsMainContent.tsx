import ButtonSave from '../../components/buttons/ButtonSave'
import ButtonSingInAndLogIn from '../../components/buttons/ButtonSingInAndLogIn'
import styles from './RespondentFormsMainContent.module.sass'
import InputItem from './components/InputItem'
import MiniCyrcle from './components/MiniCyrcle'
import SelectItem from './components/SelectItem'
export default function RespondentForm(){
    const sex = {
        id: 1,
        options: ['Муж.', 'Жен.']
    }
    const age = {
        id: 2,
        options: ['18-25','26-35','36-45', '46-55', '56-65', '66-75', '76-85']
    }
    const education = {
        id: 3,
        options: ['Неоконченное среднее','Среднее','Среднее специальное', 'Неоконченное высшее', 'Высшее', 'Аспирантура']
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
                        <div>
                            <h6>
                            Имя и фамилия
                            </h6>
                            <div className={styles.wrapper_inputs}>
                                <InputItem title='Имя' required={true} type='text' placeholder='Введите текст'/>
                                <InputItem title='Фамилия' required={true} type='text' placeholder='Введите текст'/>
                            </div>
                            
                        </div>
                        <div>
                            <h6>
                            Контактные данные
                            </h6>
                            <div className={styles.wrapper_inputs}>
                                <InputItem title='Телефон' required={false} type='tel' placeholder='+7'/>
                                <InputItem title='Telegram' required={false} type='tel' placeholder='Введите текст'/>
                                <InputItem title='WhatsApp' required={false} type='tel' placeholder='Введите текст'/>
                                <InputItem title='VK' required={false} type='tel' placeholder='Введите текст'/> 
                            </div>
                            
                        </div>
                        <div>
                            <h6>
                            Место жительства
                            </h6>
                            <div className={styles.wrapper_inputs}>
                                <InputItem title='Телефон' required={false} type='tel' placeholder='+7'/>
                                <InputItem title='Telegram' required={false} type='tel' placeholder='Введите текст'/>
                                <InputItem title='WhatsApp' required={false} type='tel' placeholder='Введите текст'/>
                            </div>
                            
                        </div>
                        <div>
                            <div className={styles.base_information_selection}>
                                <SelectItem title='Пол' required={true} id={sex.id} options={sex.options} />
                                <SelectItem title='Возраст' required={true} id={age.id} options={age.options} />
                                <SelectItem title='Образование' required={true} id={education.id} options={education.options} />
                            </div>
                            
                        </div>
                        <div>
                            <h6>Есть опыт прохождения исследований?</h6>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <ButtonSave title='Продолжить' />
                            <ButtonSingInAndLogIn title='Сохранить' />
                        </div>
                </div>
            </div>
        </div>
    )
}