let isLoginPage = true;

const toggleAuthButton = document.getElementById('toggleAuthButton');
const loginButton = document.getElementById('loginButton');

const emailField = document.getElementById('userInput');
const passwordField = document.getElementById('passwordInput');
const error = document.getElementById('error');

toggleAuthButton.addEventListener('click', function () {
    const headerTitleElement = document.getElementsByClassName('headerTitle')[0];
    const forgotPasswordElement = document.getElementById('forgotPassword')




    if (isLoginPage) {
        headerTitleElement.innerText = 'Create new account';
        forgotPasswordElement.style.display = 'none';
        loginButton.value = 'Sign up';
        this.value = 'Switch to login page';
    } else {
        headerTitleElement.innerText = 'Login';
        forgotPasswordElement.style.display = 'inline';
        loginButton.value = 'Login';
        this.value = 'Create new account';
    }

    isLoginPage = !isLoginPage
});

const showError = (message) => {
    error.style.display = 'block';
    error.innerText = message;
    error.style.color = 'red';

}

const validateEmail = (emailValue, regex) => {
    return !!emailValue.match(regex) //!! converteste la valoare booleana
}

const validatePassword = (passwordValue) => {
    return passwordValue.length > 3;
}

const clearInputs = () => {
    emailField.value = '';
    passwordField.value = '';
}

loginButton.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    error.style.display = 'none'

    if (emailValue === '' || passwordValue === '') {
        showError('All field must contain a value!')
    } else {
        //email and password contain values
        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
            if (isLoginPage) {
                //login request
                login(emailValue, passwordValue).then(data => {
                    console.log(data)
                    clearInputs();
                    window.open('news.html', '_self' )
                });
            } else {
                //sign up request
                createAccount(emailValue, passwordValue).then(data => {
                    console.log(data)
                    clearInputs();
                });
            }
        } else {
            //email or password not valid
            alert('Try again')
            showError('Incorrect email or password')
            clearInputs();
        }
    }
});




async function login(emailValue, passwordValue) {
    const loginUrl = 'https://reqres.in/api/login';
    let loginData = {
        email: emailValue,
        password: passwordValue,
    }

    loginData = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(loginData)
    }

    const response = await fetch(loginUrl, loginConfig);
    return response.json();
}

async function createAccount(emailValue, passwordValue) {
    const registerUrl = 'https://reqres.in/api/register';

    emailValue = "eve.holt@reqres.in";
    passwordValue = "pistol";

    const registerData = {
        email: emailValue,
        password: passwordValue
    }

   const registerConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(loginData)
    }

    const response = await fetch(loginUrl, registerConfig);
    return response.json();
}