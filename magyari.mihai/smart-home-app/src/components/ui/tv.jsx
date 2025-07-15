import './tv.scss';

const Tv = ({ tvOn }) => {
    return <div className={`tv ${tvOn ? 'purple' : ''}`}></div>
}

export default Tv;