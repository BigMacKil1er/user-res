import styles from './header.lk.module.sass'
export default function HeaderLK(){
    return (
       <header className={styles.headerlk}>
            <div className={styles.logo}>
                <h3>Лого</h3>
            </div>
            <div className={styles.nav}>
                <a href="#"><img src="/chat-bubble-oval--messages-message-bubble-chat-oval.png" alt="message" /></a>
                <a href="#"><img src="User Circle Single.png" alt="profile" /></a>
            </div>
       </header>
    )
}   