import './ButtonSingInAndLogin.sass'
export default function ButtonSingInAndLogIn(props){
    const {title} = props
    return (
        <button className="button sing-in">{title}</button>
    )
}