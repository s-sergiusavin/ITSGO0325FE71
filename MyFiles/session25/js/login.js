let isLoginPage = true;

const toggleAuthButton = document.getElementById('toggleAuthButton');
const loginButton = document.getElementById('loginButton');

const emailField = document.getElementById('userInput');
const passwordField = document.getElementById('passwordInput');
const error = document.getElementById('error');

toggleAuthButton.addEventListener('click', function() {
    const headerTitleElement = document.getElementsByClassName('headerTitle')[0];
    const forgotPasswordElement = document.getElementById('forgotPassword');

    if (isLoginPage) {
        headerTitleElement.innerText = 'Create Your Account';
        forgotPasswordElement.style.display = 'none';
        loginButton.value = 'Sign Up';
        this.value = 'Switch to login page';
    } else {
        headerTitleElement.innerText = 'Login';
        forgotPasswordElement.style.display = 'inline';
        loginButton.value = 'Login';
        this.value = 'Switch to create new account';
    }

    isLoginPage = !isLoginPage;
});

const showError = (message) => {
    error.innerText = message;
    error.style.display = 'block';
    error.style.color = 'red';
};

const validateEmail = (emailValue, regex) => {
    return !!emailValue.match(regex); // fixed typo: reg1ex -> regex
}

const validatePassword = (passwordValue) => { // fixed parameter name
    return passwordValue.length > 3;
}

const clearInputs = () => {
    emailField.value = '';
    passwordField.value = '';
}

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    error.style.display = 'none'; // Hide error message initially

    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value.');
    } else {
        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
            if (isLoginPage) {
                // Handle login here
                login(emailValue, passwordValue).then(data => {
                    console.log(data);
                    clearInputs();
                    window.open('news.html', '_self'); // Open news.html in the same tab
                });
            } else {
                // Handle sign-up request here
                createAccount(emailValue, passwordValue).then(data => {
                    console.log(data);
                    clearInputs();
                    window.open('news.html', '_self'); // Open news.html in the same tab
                });
            }
        } else {
            //email or password is invalid
            alert('Try again');
            showError('Invalid email or password format.');
            clearInputs();
        }
    }
});

async function login(emailValue, passwordValue) {
    const loginUrl = 'https://reqres.in/api/login';
    let loginData = {
        email: emailValue,
        password: passwordValue
    };

    loginData = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(loginData)
    };
    const response = await fetch(loginUrl, loginConfig);
    return response.json();
}

async function createAccount(emailValue, passwordValue) {
    const registerUrl = 'https://reqres.in/api/register';

    emailValue = 'eve.holt@reqres.in';
    passwordValue = 'pistol';

    const registerData = {
        email: emailValue,
        password: passwordValue
    };

    const registerConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(registerData)
    };
    return fetch(registerUrl, registerConfig);
}
