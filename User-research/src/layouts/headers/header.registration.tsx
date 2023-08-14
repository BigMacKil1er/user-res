import './headers.module.sass'
export default function HeaderRegistration(){
    return (
        <header>
            <div className="logo">
                <h3>
                    Лого
                </h3>
            </div>
            <div>
                <button className="button">Вход</button>
            </div>
        </header>
    )
}