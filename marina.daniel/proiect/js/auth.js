let isLoginPage = true;

// const switchButton = document.getElementById('switchButton');
// const loginButton = document.getElementById('loginButton');
// const emailField = document.getElementById('username');
// const passwordField = document.getElementById('password');
// const error = document.getElementById('error');

const ref = {
  switchButton: document.getElementById("switchButton"),
  loginButton: document.getElementById("loginButton"),
  emailField: document.getElementById("username"),
  passwordField: document.getElementById("password"),
  error: document.getElementById("error"),
};

ref.switchButton.addEventListener("click", function () {
  const headerTitleElement = document.getElementById("headerTitle");
  const forgotPasswordElement = document.getElementById("forgotPassword");

  isLoginPage = !isLoginPage;

  if (isLoginPage) {
    headerTitleElement.innerText = "Login";
    // forgotPasswordElement.style.display = 'inline'
    forgotPasswordElement.style.visibility = "visible";
    ref.loginButton.value = "Login";
    this.innerText = " Switch to create account page";
  } else {
    headerTitleElement.innerText = "Create new account";
    // forgotPasswordElement.style.display = 'inline'
    forgotPasswordElement.style.visibility = "hidden";
    ref.loginButton.value = "Sign Up";
    this.innerText = " Switch to login page";
  }
});

const showError = (message) => {
  error.style.display = "block";
  error.innerText = message;
  error.style.color = "red";
};

const validateEmail = (emailValue, regex) => {
  return !!emailValue.match(regex); // !! converteste la o valoare booleana
};

const validatePassword = (passwordValue) => {
  return passwordValue.length > 3;
};

const clearInputs = () => {
  emailField.value = "";
  passwordField.value = "";
};

ref.loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = ref.emailField.value;
  const passwordValue = ref.passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  ref.error.style.display = "none";

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value!");
  } else {
    // email and password contain values
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        // login request
        login(emailValue, passwordValue).then((data) => {
          clearInputs();
          window.open("feed.html", "_self");
        });
      } else {
        // sign up request
        createAccount(emailValue, passwordValue).then((data) => {
          clearInputs();
          window.open("login.html", "_self");
        });
      }
    } else {
      // email or password not valid
      alert("Try again");
      showError("Incorrect email or password");
      clearInputs();
    }
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = "https://reqres.in/api/login";

  let loginData = {
    email: emailValue,
    password: passwordValue

  }

  loginData = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    const loginConfig = {
      method: 'POST',
      Headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: JSON.stringify(loginData)
    }

    const response = await fetch(loginUrl, loginConfig);

    return response.json()

}
async function createAccount(emailValue, passwordValue) {
  const reqisterUrl = "https://reqres.in/api/register";

  emailValue = 'eve.holt@reqres.in';
    passwordValue = 'pistol';

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
        body: JSON.stringify(registerData)
    }

    const response = await fetch(reqisterUrl, registerConfig);

    return response.json();
}
