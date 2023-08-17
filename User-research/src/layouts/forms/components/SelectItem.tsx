import styles from './SelectItem.module.sass'
export default function SelectItem(props){
    const {title, required, id, options} = props
    return (
        <div className={styles.select_wrapper}>
            <label className={styles.select_name} htmlFor={title}>{title}{required && <span>*</span>}</label>
            <div className={styles.select_border}>
                <select className={styles.select} name={title} id={id}>
                
                    {options.map(item =>  <option value={item}>{item}</option>)}
                </select>
            </div>
            
        </div>
        
    )
}