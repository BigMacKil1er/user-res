import ButtonSingInAndLogIn from '../../components/buttons/ButtonSingInAndLogIn'
import styles from './headers.module.sass'
export default function HeaderRegistration(){
    return (
        <header className={styles.header_registration}>
            <div className={styles.logo}>
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