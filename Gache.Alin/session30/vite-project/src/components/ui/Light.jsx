import styles from './Light.module.scss'
const Light = ({lightsOn}) => {
    return <div className={`${styles.Light} ${lightsOn ? styles.yellow : ''}`}></div>
}

export default Light;