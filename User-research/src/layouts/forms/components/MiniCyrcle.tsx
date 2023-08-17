import styles from './MiniCyrcle.module.sass'
export default function MiniCyrcle(){
    function getElements(){
        const cyrcleElements = []
        for (let index = 0; index < 9; index++) {
            cyrcleElements.push(<div className={styles.mini_cyrcle}></div>)
        }
        return cyrcleElements
    }
    return (
        <div className={styles.wrapper_mini_cyrcle}>
            {getElements()}
        </div>
    )
}