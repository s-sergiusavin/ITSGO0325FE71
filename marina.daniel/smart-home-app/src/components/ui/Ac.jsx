import './Ac.scss';

const Ac = ({acOn}) => {
    return <div className={`Ac ${acOn ? 'blue' : ''}`}></div>
}

export default Ac;