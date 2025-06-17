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
        headerTitleElement.textContent = 'Create new account';
        forgotPasswordElement.style.display = 'none';
        loginButton.value = 'Sign Up';
    } else {
        headerTitleElement.innerText = 'Login to your account';
        forgotPasswordElement.style.display = 'inline';
        loginButton.value = 'Login';
        this.value = 'Switch to Sign Up';
    }
});

const showError = (message) => {
    error.textContent = message;
    error.style.display = 'block';
    error.style.color = 'red';
}

const validateEmail = () => {
}

const validatePassword = () => {
}

toggleAuthButton.addEventListener('click', function(event) {
    event.preventDefault();

    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    error.style.display = 'none';
    if (emailValue === '' || passwordValue === '') {
        showError('Please fill in all fields.');
} else {
    if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
    } else {
    }
}
})
