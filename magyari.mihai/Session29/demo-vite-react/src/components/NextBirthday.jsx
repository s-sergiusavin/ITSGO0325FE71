const NextBirthday = ({ birthday }) => {

    const currentDate = new Date();


    const calcNextCeleb = () => {

        let nextBirthdayYear = currentDate.getFullYear(); //luam anul curent

        if (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() === birthday.getDate()) {
            alert(`His birthday is TODAY!`)
            return;
        }

        if (currentDate.getMonth() > birthday.getMonth() || currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() > birthday.getDate()) {
            nextBirthdayYear += 1;
        }
        // in cazul in care data si luna curenta au depasit data si luna nasterii persoanei adauga +1 la anul curent

        const futureBirthday = new Date(nextBirthdayYear, birthday.getMonth(), birthday.getDate());
        //creem un obiect de tip Date pentru urmatoare aniversare (an +1 daca e cazul, luna, data)

        const diffTime = futureBirthday - currentDate; //calculam diferenta dintre viitoare aniversare si data de azi (in milisecunde)

        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //convertim din milisecunde in zile

        alert(`His birthday is in ${diffDays} day(s)`)
    };


    return <div><button className="birthdayBtn" onClick={calcNextCeleb}>
        See how many days are left until celebration </button></div>


}

export default NextBirthday;