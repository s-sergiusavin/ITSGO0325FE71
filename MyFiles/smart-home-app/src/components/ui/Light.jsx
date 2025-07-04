import './Light.scss';

const Light = ({lightsOn}) => {
    return <div className={`light ${lightsOn ? 'yellow' : ''}`}></div>
}

export default Light;