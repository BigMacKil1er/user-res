import './InputItem.sass'
export default function InputItem(props){
    const {title, required, description, type, placeholder} = props
    return (
        <div className="input-wrapper">
            <label className="input-name" htmlFor={type}>{title}{required && <span>*</span>}</label>
            <div className="input-border">
                <input className="input" type={type} name={type} placeholder={placeholder} />
            </div>
            {description && <p className="description-input">{description}</p>}
        </div>
    )
}