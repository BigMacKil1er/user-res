import ButtonSave from "../../components/buttons/ButtonSave";
import InputItem from "./components/InputItem";

export default function LogInForms(){
    return (
        <main className="wrapper-main">
            <section className="wrapper-form">
                <h3>Добро пожаловать!</h3>
                <form>
                    <InputItem title='Логин' required={true} description='Ваша электронная почта' />
                    <InputItem title='Пароль' required={true} description='Не менее 8 символов' />
                    <ButtonSave title='Вход' />
                </form>
            </section>
        </main>
        
    )
}