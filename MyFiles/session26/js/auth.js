let isLoginPage = true;

const ref = {
  switchButton: document.getElementById('switchButton'),
  loginButton: document.getElementById('loginButton'),
  emailField: document.getElementById('username'),
  passwordField: document.getElementById('password'),
  error: document.getElementById('error')
};

window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('rememberedUser');
  if (savedUser) {
    ref.emailField.value = savedUser;
    document.getElementById('rememberCheckbox').checked = true;
  }
});

ref.switchButton.addEventListener('click', function () {
  const headerTitleElement = document.querySelector('.loginText');
  const forgotPasswordElement = document.getElementById('forgotPassword');

  isLoginPage = !isLoginPage;

  if (isLoginPage) {
    headerTitleElement.innerText = 'Log in';
    forgotPasswordElement.style.visibility = 'visible';
    ref.loginButton.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Log in';
    this.innerHTML = '<i class="fa-solid fa-user-plus"></i> Create an account';
  } else {
    headerTitleElement.innerText = 'Create new account';
    forgotPasswordElement.style.visibility = 'hidden';
    ref.loginButton.innerHTML = '<i class="fa-solid fa-user-plus"></i> Sign up';
    this.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Switch to login';
  }

  ref.emailField.value = '';
  ref.passwordField.value = '';
  ref.error.style.display = 'none';
});

const showError = (message) => {
  ref.error.style.display = 'block';
  ref.error.innerText = message;
  ref.error.style.opacity = '1';
};

const validateEmail = (emailValue, regex) => {
  return !!emailValue.match(regex);
};

const validatePassword = (passwordValue) => {
  return passwordValue.length > 3;
};

const clearInputs = () => {
  ref.emailField.value = '';
  ref.passwordField.value = '';
};

ref.loginButton.addEventListener('click', function (event) {
  event.preventDefault();

  const emailValue = ref.emailField.value;
  const passwordValue = ref.passwordField.value;
  const regexEmailPattern = /\D{3,}\@\D{3,}\.\D{2,}/g;

  ref.error.style.display = 'none';

  if (emailValue === '' || passwordValue === '') {
    showError('All fields are required and must contain a value!');
  } else {
    if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
      ref.loginButton.disabled = true;
      ref.loginButton.innerText = 'Loading...';

      const action = isLoginPage ? login(emailValue, passwordValue) : createAccount(emailValue, passwordValue);

      action
        .then((data) => {
          if (document.getElementById('rememberCheckbox').checked) {
            localStorage.setItem('rememberedUser', ref.emailField.value);
          } else {
            localStorage.removeItem('rememberedUser');
          }

          clearInputs();

          if (isLoginPage) {
            window.open('pages/feed.html', '_self');
          } else {
            window.open('pages/welcomePage.html', '_self');
          }
        })
        .catch((err) => {
          showError('Login failed. Please check your credentials.');
          console.error(err);
        })
        .finally(() => {
          ref.loginButton.disabled = false;
          ref.loginButton.innerText = isLoginPage
            ? 'Log in'
            : 'Sign up';
        });
    } else {
      showError('Incorrect email or password');
      clearInputs();
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    ref.loginButton.click();
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = 'https://reqres.in/api/login';
  const loginData = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
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

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}

async function createAccount(emailValue, passwordValue) {
  const registerUrl = 'https://reqres.in/api/register';

  const registerData = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };

  const registerConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1'
    },
    body: JSON.stringify(registerData)
  };

  const response = await fetch(registerUrl, registerConfig);

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
}
