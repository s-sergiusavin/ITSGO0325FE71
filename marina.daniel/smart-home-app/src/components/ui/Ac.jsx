import './Ac.scss';

const Ac = ({acOn}) => {
    return <div className={`ac ${acOn ? 'blue' : ''}`}></div>
}

export default Ac;