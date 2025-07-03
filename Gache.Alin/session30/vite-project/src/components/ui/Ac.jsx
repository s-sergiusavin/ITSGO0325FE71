import './Ac.scss';

const Ac = ({acOn}) => {
    return <div className={`acOn ${acOn ? 'blue' : ''}`}></div>
}

export default Ac;