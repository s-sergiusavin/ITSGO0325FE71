import './AirCon.scss'

function AirCon ({acOn}) {

    return <div className={`airCon ${acOn ? `blue` : ``}`}></div>


}

export default AirCon;