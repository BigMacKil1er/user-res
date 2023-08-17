import { useState } from "react"
import './SingInForms.sass'
import ButtonSave from "../../components/buttons/ButtonSave"
import InputItem from "./components/InputItem"
export default function SingInForm(){
    // type State {
    //     inputType: string;
    //     setInputType: React.Dispatch<React.SetStateAction<string>>;
    //   }
    const [inputType, setInputType] = useState('password')
    return (
        <main className="wrapper-main">
            <section className="wrapper-form">
                <h3>Добро пожаловать!</h3>
                <h3>Заполните форму, чтобы зарегистрироваться.</h3>
                <form>
                    <InputItem title='Логин' required={true} description='Ваша электронная почта' />
                    <InputItem title='Пароль' required={true} description='Не менее 8 символов' />
                    <InputItem title='Подтвердите пароль' required={true} description='Введенные пароли не совпадают' />
                    <label className="checkbox-wrapper check-box-part">
                        <input type="checkbox" className="check-box" name="politic" id="politic" />
                        <p>Принимаю <a href="#">Условия использования</a> и <a href="#">Политику конфиденциальности</a></p>
                    </label>
                    <ButtonSave title='Создать аккаунт' />
                </form>
            </section>
        </main>

    )
}