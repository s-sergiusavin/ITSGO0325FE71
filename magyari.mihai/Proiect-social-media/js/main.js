// get elements from HTML document
const usernameField = document.getElementsByClassName('usernameField')[0];
const passwordField = document.getElementsByClassName('passwordField')[0];
const loginBtn = document.getElementsByClassName('loginButton')[0];
const createAccountBtn = document.getElementsByClassName('registerButton')[0];
const formTitle = document.getElementsByTagName('h1')[0];
const rememberMeBox = document.getElementById('rememberCheckbox');
const forgotPassword = document.getElementsByClassName('forgotPassword')[0];
const loginErrorMessage = document.getElementsByClassName('loginError')[0];


//onclick events

clearIdPlaceholder = () => {
    usernameField.placeholder = '';
    usernameField.style.backgroundColor = 'white';
}

clearPassPlaceholder = () => {
    passwordField.placeholder = '';
    passwordField.style.backgroundColor = 'white';
}

defaultIdPlaceholder = () => {
    usernameField.placeholder = 'Enter your e-mail';
    usernameField.style.backgroundColor = '#CAE9FF';
}

defaultPassPlaceholder = () => {
    passwordField.placeholder = 'Enter your password';
    passwordField.style.backgroundColor = '#CAE9FF';
}


//switch between login and register pages

let loginPageActive = true;

createAccountBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (loginPageActive) {
        formTitle.innerText = 'Register on AttentionSeeker';
        loginBtn.value = 'Create account';
        createAccountBtn.innerText = 'Switch to Login';
        rememberMeBox.style.display = 'none';
        forgotPassword.style.display = 'none';
    } else {
        formTitle.innerText = 'Login to AttentionSeeker';
        loginBtn.value = 'Log in';
        createAccountBtn.innerText = 'Create an account';
        rememberMeBox.style.display = 'block';
        forgotPassword.style.display = 'block';
    }

    loginPageActive = !loginPageActive;

})


//credentials

const validateEmail = (value, regex) => {
    console.log(value.match(regex));
    return !!value.match(regex); // folosind !! returnam valoare booleana (true/false)
}


const validatePassword = (value) => {
    if (value === 'strongpass') {
        return true;
    } else {
        return false;
    }
    //se putea scrie pe scurt astfel: return value === 'strongpass';
}



//clearing inputs

const clearInputs = () => {
    usernameField.value = '';
    passwordField.value = '';
}

const clearPass = () => {
    passwordField.value = '';
}

//login event listener

loginBtn.addEventListener('click', (event) => {

    event.preventDefault();
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
    const emailValue = usernameField.value;
    const passwordValue = passwordField.value;

    if (emailValue === '' || passwordValue === '') {
        loginErrorMessage.style.display = 'block'
    } else {
        loginErrorMessage.style.display = 'none';
    }

    if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
        alert('Login succesful! Welcome!')
        location.replace('feed.html')
    } else {
        alert('Wrong e-mail or password!')
    }

    if (rememberMeBox.checked) {
        clearPass();
    } else {
        clearInputs();
    }


})






