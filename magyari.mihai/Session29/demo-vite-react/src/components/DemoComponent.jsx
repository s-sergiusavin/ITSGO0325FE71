import Birthdate from './Birthdate';
import './DemoComponent.scss'

function DemoComponent({name, birthday}) {

    const logInDemoComponent = (age) => {
        console.log('Log in demo component', age);
    }

    return (
    <div className="demo-component">
        <h2>{name}</h2>
        <div>{birthday.toLocaleDateString()}</div>
        <Birthdate birthdate={birthday} loggerHandler={logInDemoComponent}/>
        
    </div>
    );
}



export default DemoComponent;