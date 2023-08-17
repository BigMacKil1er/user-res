import './ButtonSingInAndLogin.sass'
export default function ButtonSave(props){
    const {title} = props
    return (
        <button className="button save">{title}</button>
    )
}