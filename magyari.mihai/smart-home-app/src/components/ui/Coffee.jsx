import './Coffee.scss';

const Coffee = ({ status }) => {
    return <div className={'coffeeCup'}>
        {/* <div className={'coffee'} style={{opacity: status}}></div> */}
        <div className={'coffee'} style={{width:`${status}rem`, height:`${status}rem`}}></div>
    </div>
}

export default Coffee;