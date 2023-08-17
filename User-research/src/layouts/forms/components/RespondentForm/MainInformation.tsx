import ButtonSave from "../../../../components/buttons/ButtonSave"
import ButtonSingInAndLogIn from "../../../../components/buttons/ButtonSingInAndLogIn"
import InputItem from "../InputItem"
import SelectItem from "../SelectItem"
import styles from './MainInformation.module.sass'

export default function MainInformation(){
    const country = {
        id: 1,
        options: ['Россия', 'США', 'Великобритания', 'Китай', 'Украина', 'Франция', 'Беларусь']
    }
    const region = {
        id: 2,
        options: ['Крым', 'Краснодарский край', 'Московская область', 'Ленинградская область', 'Ставропольский край', 'Мурманская область', 'Дальний Восток']
    }
    const sex = {
        id: 3,
        options: ['Муж.', 'Жен.']
    }
    const age = {
        id: 4,
        options: ['18-25','26-35','36-45', '46-55', '56-65', '66-75', '76-85']
    }
    const education = {
        id: 5,
        options: ['Неоконченное среднее','Среднее','Среднее специальное', 'Неоконченное высшее', 'Высшее', 'Аспирантура']
    }
    const mariedStatus = {
        id:6,
        options: ['Не женат/не замужем','Женат/замужем','Разведен/разведена']
    }
    const childrenHas = {
        id:7,
        options: ['Нет','1','2', '3', '4', 'Более 5']
    }
    return (
        <>
        <div className={styles.section}>
            <h6>
            Имя и фамилия
            </h6>
            <div className={styles.wrapper_inputs}>
                <InputItem title='Имя' required={true} type='text' placeholder='Введите текст'/>
                <InputItem title='Фамилия' required={true} type='text' placeholder='Введите текст'/>
            </div>
            
        </div>
        <div className={styles.section}>
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
        <div className={styles.section}>
            <h6>
            Место жительства
            </h6>
            <div className={styles.wrapper_inputs}>
                <SelectItem title='Страна' required={false} id={country.id} options={country.options} />
                <SelectItem title='Регион' required={false} id={region.id} options={region.options} />
                <InputItem title='Город' required={false} type='text' placeholder='Введите текст'/>
            </div>
            
        </div>
        <div className={styles.section}>
            <div className={styles.base_information_selection}>
                <SelectItem title='Пол' required={true} id={sex.id} options={sex.options} />
                <SelectItem title='Возраст' required={true} id={age.id} options={age.options} />
                <SelectItem title='Образование' required={true} id={education.id} options={education.options} />
                <InputItem title='Сфера интересов' required={true} type='text' placeholder='Введите текст'/>
                <SelectItem title='Семейное положение' required={true} id={mariedStatus.id} options={mariedStatus.options} />
                <SelectItem title='Наличие детей' required={true} id={childrenHas.id} options={childrenHas.options} />
                <InputItem title='Доход на члена семьи (тыс.руб.)' required={true} type='number' placeholder='Введите число'/>
            </div>
            
        </div>
        <div className={styles.section_chexbox}>
            <h6>Есть опыт прохождения исследований?</h6>
            <input type="checkbox" name="" id="" />
        </div>
        </>
        

    )
}