import './Light.scss';

const Light = ({ lightsOn }) => {
    return <div className={`lights ${lightsOn ? 'yellow' : ''}`}></div>
}

export default Light;