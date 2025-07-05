import Birthdate from './Birthdate';
import './DemoComponent.scss'
import NextBirthday from './NextBirthday';
import ShowCity from './ShowCity';

function DemoComponent({name, city, birthday}) {

    const logInDemoComponent = (age) => {
        console.log(name + ' is '+ age + ' years old');
    }

    return (
    <div className="demo-component">
        <h2>{name}</h2>
        <p className='cityElem'>{city}</p>
        <Birthdate birthdate={birthday} loggerHandler={logInDemoComponent}/>
        <ShowCity city={city} name={name}/>
        <NextBirthday birthday = {birthday}/>
        
        
    </div>
    );
}



export default DemoComponent;