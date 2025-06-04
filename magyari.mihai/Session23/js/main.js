/**
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

// setTimeout(() => {
//     console.log(5)
// })

let string = 'abcdef';
let pattern = /abc/;

console.log(pattern.exec(string)) // => returns an object
console.log(pattern.test(string)) // => returns boolean
console.log(string.match(pattern)) // => returns an object

const loginBtn = document.getElementById('login');
const emailField = document.querySelector('#email');
const passwordField = document.getElementById(`password`);
const errorMessage = document.getElementById('error');


const showError = (message) => {
    errorMessage.style.display = 'inline';
    errorMessage.innerText = message;
    error.style.color = `red`;
}

const validateEmail = (value, regex) => {
    console.log(value.match(regex))

    return !!value.match(regex);
}

const validatePassword = (value) => {
    // if (value === `password`) {
    //     return true;
    // } else {
    //     return false;
    // }

    return value === `password`; //returneaza true sau false dupa interpretarea expresiei

}

const clearInputs = () => {
    emailField.value = '';
    passwordField.value = '';
}

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);

    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    if (emailValue === '' || passwordValue === '') {
        showError(`All fields are required and must contain a value!`)
    } else {
        if (errorMessage.style.display === 'inline') {
            errorMessage.style.display = 'none';
        }


        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
            alert('Logged in');
            // clearInputs();

        } else {
            alert('Try again')
            // clearInputs();
        }

        clearInputs();
    }
});

const test = true;
console.log(!test);
console.log(!!true); // convertim la valoare booleana


const testPasswordRegex = /[a-z]{1,}[A-Z]{1,}\d{1,}/g

const loginTitleElem = document.querySelector(`h2.loginTitle`);
console.log(loginTitleElem);

const toggleLoginBtn = document.querySelector('button.toggleLogin');
let isLoginPage = true;

const forgotPasswordBtn = document.querySelector('.forgotPassword');

toggleLoginBtn.addEventListener('click', function () {
    if (isLoginPage) {
        this.textContent = 'Switch to login';
        loginTitleElem.innerText = 'Register page';
        loginBtn.value = 'Sign up';
        forgotPasswordBtn.style.visibility = 'hidden';
    } else {
        this.textContent = 'Switch to sign up page';
        loginTitleElem.innerText = 'Login page';
        loginBtn.value = 'Log in';
        forgotPasswordBtn.style.visibility = 'visible';
    }

    isLoginPage = !isLoginPage;
})

const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');
const ageElement = document.getElementById('age');

const firstName = 'Paul';
const lastName = 'Surugiu';
const age = 50;


// firstNameElement.value = firstName;
// lastNameElement.value = lastName;
// ageElement.value = age;

/**
 * Built in functions
 */

/**
 * set Timeout
 * Executa o functie pe care o primeste ca argument, PENTRU O SINGURA DATA, dupa o anumita perioada de timp
 * dupa ce s-a executat tot codul sincron din pagina.
 * Perioada de timp este exprimata in milisecunde
 * Daca perioada de timp nu este mentionata, functia se executa la 0 secunde DUPA CE S-A EXECUTAT TOT CODUL DIN PAGINA
 */

// setTimeout(() => {
//     firstNameElement.value = firstName;
//     lastNameElement.value = lastName;
//     ageElement.value = age;
// }, 5000);

function setFields() {
    firstNameElement.value = firstName;
    lastNameElement.value = lastName;
    ageElement.value = age;
}

// setTimeout(setFields, 2000)

// setTimeout(() => {
//     console.log(4)
// }, 1000)

// console.log(1)

// function setTwo() {
//     console.log(2)
// }

// console.log(3);
// setTwo;


/**
 * setInterval()
 * apeleaza o functie cu o frecventa mentionata in intervalul specificat
 */


// let counter = 0;

// const intervalulMeu = setInterval(() => {
//     console.log(counter);
//     console.log(`Interval`, intervalulMeu)
//     counter += 1;

//     if(counter === 10){
//         clearInterval(intervalulMeu);
//         setFields()
//     }
// }, 2000)


/**
 * Objects recap
 */

const person = {
    firstName: 'Sergiu',
    age: 30,
    somethingUnique: 'asd',
    address: {
        street: 'street',
        country: 'RO'
    },
    sayHi: function () {
        console.log(`${this.firstName} says Hi`);
    }

}

console.log(person.firstName);
person.sayHi();
person.firstName = 'Paul';
person.sayHi();

function addToFive(number) {
    console.log(`add to five ` + (number + 5))
}

addToFive(10);

const addToFiveCopy = addToFive;
addToFiveCopy(100);

const sayHiCopy = person.sayHi;
sayHiCopy();

const newPerson = person;

newPerson.firstName = 'Rares';

console.log(person);
console.log(newPerson);

// ... spread operator

const anotherPerson = { ...person, address: { ...person.address } }; //am copiat intr-o referinta noua toate elementele de la person



console.log(anotherPerson);
anotherPerson.firstName = 'Nume nou';
anotherPerson.age = 18;
anotherPerson.address.country = "CHINA";

console.log(person);
console.log(anotherPerson);


/**
 * Destructuring and rest operator
 * ... rest operator
 */

const { somethingUnique, ...restObject } = person;

console.log(somethingUnique);
console.log(restObject);

const myArr = [111, 222, 333, 4];
const [first, second, third, ...restOperator] = myArr;

console.log(first);
console.log(second);
console.log(third);
console.log(restOperator);


const newArr = [...myArr];
newArr[0] = -14;

console.log(myArr);
console.log(newArr);


