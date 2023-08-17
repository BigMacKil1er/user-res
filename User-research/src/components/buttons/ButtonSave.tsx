import './ButtonSingInAndLogin.sass'
export default function ButtonSave(props){
    const {title, callback} = props
    function doSomething(){
        callback()
    }
    return (
        <button className="button save" onClick={doSomething}>{title}</button>
    )
}