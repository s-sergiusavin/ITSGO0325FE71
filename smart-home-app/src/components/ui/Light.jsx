import styles from './Light.module.scss';

const Light = ({lightsOn}) => {
    return <div className={`${styles.lights} ${lightsOn ? styles.yellow : ''}`}></div>
}


export default Light;