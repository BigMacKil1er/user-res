import ButtonSingInAndLogIn from '../../components/buttons/ButtonSingInAndLogIn'
import './headers.module.sass'
export default function HeaderRegistration(){
    return (
        <header className="header-registration">
            <div className="logo">
                <h3>
                    Лого
                </h3>
            </div>
            <div>
                <ButtonSingInAndLogIn title='Вход'/>
            </div>
        </header>
    )
}