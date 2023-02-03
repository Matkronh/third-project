import styles from './Title.module.css'

console.log(styles)

function Title(){
    return (
    <div className={styles.divtest}>
        <h1 className={styles.htest}>Extra ordinary dogs in your area</h1>
    </div>
    )
}


export default Title