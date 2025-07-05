const ShowCity = ({ city, name }) => {

    function logCity() {
        console.log(name + ' is from ' + city)
    }




    return <div><button onClick={logCity} className="cityBtn">Log the city in console</button></div>

}

export default ShowCity;