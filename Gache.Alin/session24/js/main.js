/**
 * HTTP Requests
 */

/**
 * RESTful services
 * Representional State Transfer
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

/**
 * HTTP implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT/PATCH (update partial)
 * Delete => DELETE
 */

// const myFirstPromise = new Promise(function (resolve, reject) {
//   // setTimeout(resolve, 3000, "Value sent!!!");
//   setTimeout(reject, 3000, "Error sent!!!");
// });

// console.log(myFirstPromise);

// myFirstPromise.then(
//   (value) => {
//     console.log("Resolved " + value);
//   },
//   (error) => {
//     console.log("Rejected " + error);
//   }
// );

// const apiKey = {
//   "x-api-key": "reqres-free-v1",
// };

const apiConfig = {
  headers: {
    "x-api-key": "reqres-free-v1",
  },
};

/**
 * GET request
 */

const singleUserUrl = "https://reqres.in/api/users/2";

// fetch(singleUserUrl, apiConfig).then((response) => {
//   console.log(response);
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// const singleUserDate = fetch(singleUserUrl, apiConfig).then((response) => {
//   console.log("----------");
//   return response.json();
// });

// singleUserDate.then((data) => {
//   console.log(data);
// });

/**
 *Async/await request
 */

async function getSingleUser() {
  const response = await fetch(singleUserUrl, apiConfig);
  return response.json();
}

getSingleUser().then((data) => {
  console.log("Data with async/await");
  console.log(data);
});

/**
 * Get request with error handling
 */

const singleUserNotFoundUrl = "https://reqres.in/api/users/23";
const userListUrl = "https://reqres.in/api/users?page=2";

// ? in url se numeste query param
// query param este o pereche cheie=valoare
// cu mai multi parametrii primul va avea ?in fata si vor fi separati de &
// ?cheie1=valoare1&valoare2

const allUserList = new Promise((resolve, reject) => {
  fetch(userListUrl, apiConfig)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

allUserList.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  }
);

/**
 * POST request
 */

const createUserUrl = "https://reqres.in/api/users";

const user = {
  name: "Test",
  job: "Tester",
};

const createUser = new Promise((resolve, reject) => {
  fetch(createUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify(user),
  }) //pana in punctul asta se face requestul
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw "Ai o eroare la crearea user-lui";
      }
      return response.json;
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

createUser.then(
  (value) => console.log(value),
  (error) => console.error(error)
);

/**
 * POST request cu eroare
 */

const requestUrl = "https://reqres.in/api/register";
const userIncomplete = {
  email: "sydney@fife",
};

const userSuccessfull = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

const requestUrlConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
  // body: JSON.stringify(userIncomplete)
  body: JSON.stringify(userSuccessfull),
};

const resgisterUser = new Promise((resolve, reject) => {
  fetch(resgisterUser, requestUrlConfig) //request facut
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw "Ai o eroare";
      }
      return response.json;
    })
    .then((data) => resolve(data).catch((error) => reject(error)));
});

resgisterUser.then(
  (value) => console.log(value),
  (error) => console.error(error)
);

/**
 * DELETE
 */

const deleteUserUrlHardCoded = "https://reqres.in/api/users/2";
const baseUrl = "https://reqres.in/api/";
const deleteUserId = "2";

const deleteUserUrl = `${baseUrl}users/${deleteUserId}`;

const deletUserUrlConfig = {
  method: "DELETE",
  headers: {
    "x-api-key": "reqres-free-v1",
  },
};

const deletUser = new Promise((resolve, reject) => {
  fetch(deleteUserUrl, deletUserUrlConfig).then(response =>{
    if(response.status !==204){
      throw 'Ai o eroare la stergere'
    }
  })
});
