import './AC.scss';

const AC = ({ acOn }) => {
  return <div className={`ac ${acOn ? 'blue' : ''}`}></div>;
};

export default AC;
