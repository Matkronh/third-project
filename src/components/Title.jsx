import styles from './Title.module.css'

console.log(styles)

function Title(){
    return (
    <div className={styles.divtest}>
        <h1 className={styles.h1test}>Extra ordinary dogs in your area</h1>
        <p className={styles.h2test}>Check out these lovely dogs in your local area</p>
    </div>
    )
}


export default Title