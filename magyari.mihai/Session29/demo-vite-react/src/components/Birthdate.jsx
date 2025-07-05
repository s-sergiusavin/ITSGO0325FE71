function Birthdate({ birthdate, loggerHandler }) {

    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();

    const doSomething = () => {
        loggerHandler(age);
    };


    return <div>
        <p>Birthday: {birthdate.toLocaleDateString()}</p>
        <p>Age: {age} years old</p>
        <button onClick={doSomething}>Log the age in console</button>
    </div>
}

export default Birthdate;    
