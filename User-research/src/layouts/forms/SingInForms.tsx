import { useState } from "react"
import './SingInForms.sass'
export default function SingInForm(){
    // type State {
    //     inputType: string;
    //     setInputType: React.Dispatch<React.SetStateAction<string>>;
    //   }
    const [inputType, setInputType] = useState('password')
    return (
        <section className="wrapper-form">
            <h3>Добро пожаловать!</h3>
            <h3>Заполните форму, чтобы зарегистрироваться.</h3>
            <form>
                <div className="input-wrapper">
                    <label className="input-name" htmlFor="e-mail">Логин<span>*</span></label>
                    <div className="input-border">
                        <input className="input" type="e-mail" placeholder="test@mail.ru" />
                    </div>
                    <p className="description-input">Ваша электронная почта</p>
                </div>
                <div className="input-wrapper">
                    <div className="input-border">
                        <label htmlFor="password">Пароль<span>*</span></label>
                        <input className="input" type={inputType} placeholder="some"/>
                    </div>
                    <p className="description-input">Не менее 8 символов</p>
                </div>
                <div className="input-wrapper">
                    <div className="input-border">
                        <label className="error" htmlFor="password">Подтвердите пароль<span>*</span></label>
                        <input className="input error" type={inputType} placeholder="some"/>
                    </div>
                    <p className="description-input error">Введенные пароли не совпадают</p>
                </div>
                <label className="input-wrapper check-box-part">
                    <input type="checkbox" className="check-box" name="politic" id="politic" />
                    <p>Принимаю <a href="#">Условия использования</a> и <a href="#">Политику конфиденциальности</a></p>
                </label>
                
                <button className="button">Создать аккаунт</button>
            </form>
        </section>
    )
}