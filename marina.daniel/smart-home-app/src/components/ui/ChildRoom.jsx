import './ChildRoom.scss';

const ChildRoom = ({status}) => {
    return <div className={`room`} style={{opacity: status}}></div>
}

export default ChildRoom;