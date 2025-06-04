/**
 * HTTP Requests
 */

/**
 * RESTful services
 * Representational State Transfer
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

/**
 * HTTP Implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT / PATCH (update partial)
 * Delete => DELETE
 */




// const myFirstPromise = new Promise(function (resolve, reject) {
//     // setTimeout(resolve, 3000, 'Value sent!!!')
//     setTimeout(reject, 3000, 'Error sent!!!')

// })

// console.log(myFirstPromise);

// myFirstPromise.then(
//     (value) => {
//         console.log('Resolved ' + value);
//     },
//     (error) => {
//         console.log('Rejected ' + error);
//     }
// );


const apiConfig = {
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
}

/**
 * GET Request
 */

const singleUserUrl = 'https://reqres.in/api/users/2';

// fetch(singleUserUrl, apiConfig).then(response => {
//     console.log(response)
//     response.json().then(data => {
//         console.log(data)
//     })
// });


// console.log(`------`);

// const singleUserData = fetch(singleUserUrl, apiConfig)
//     .then(response => {
//         console.log(`------`);
//         return response.json()
//     });


// singleUserData.then(data => console.log(data));


/**
 * Async/await request
 */


async function getSingleUser() {
    const response = await fetch(singleUserUrl, apiConfig)
    return response.json()
}

getSingleUser().then(data => {
    console.log('Data with async/await');
    console.log(data);
})

/**
 * Get request with error handling
 */


const singleUserNotFoundUrl = 'https://reqres.in/api/users/23';
const userListUrl = 'https://reqres.in/api/users?page=2';

// semnul intrebarii (?) in url se numeste query param
//query param este o pereche cheie=valoare
//cu mai multi parametrii primul va avea ? in fata si vor fi separati de &
//?cheie=valoare1&cheie2=valoare2


const allUserList = new Promise((resolve, reject) => {
    fetch(singleUserNotFoundUrl, apiConfig).then(
        response => {
            console.log(response)
            if (response.status !== 200) {
                throw 'Ai o eroare';
            }

            return response.json()
        }
    ).then(data => {
        resolve(data)
    }).catch(error => {
        reject(error)
    })
})

allUserList.then(
    value => {
        console.log(value)
    },
    error => {
        console.error(error)
    }
)


/**
 * POST request
 */

const createUserUrl = 'https://reqres.in/api/users';

const user = {
    "name": "morpheus",
    "job": "leader"
};

const createUser = new Promise((resolve, reject) => {
    fetch(createUserUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(user)
    }) // pana in punctul acesta se face requestul
        .then(response => {
            console.log(response)
            if (response.status !== 201) {
                throw 'Ai o eroare la crearea userului'
            }
            return response.json();
        }).then(data => resolve(data))
        .catch(error => reject(error))

})

createUser.then(
    value => console.log(value),
    error => console.error(error),
)

/**
 * POST request with error
 */

const registerUrl = 'https://reqres.in/api/register';
const userIncomplete = {
    "email": "sydney@fife"
}
const userSuccessful = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const registerUrlConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/JSON',
        'x-api-key': 'reqres-free-v1'
    },
    body: JSON.stringify(userIncomplete)
    // body: JSON.stringify(userSuccessful)
}

const registerUser = new Promise((resolve, reject) => {
    fetch(registerUrl, registerUrlConfig) // pana in punctul asta se face requestul
        .then(response => {
            console.log(response)
            if (response.status !== 200) {
                throw 'Ai o eroare la register'
            }
            return response.json()
        })
        .then(data => resolve(data))
        .catch(erorr => reject(error))
})


registerUser.then(
    value => console.log(value),
    error => console.error(error),
);


/**
 * PUT request
 */


//de copiat de la Sergiu din origin




// - pana aici



/**
 * DELETE request
 */

const deleteUserUrlHardCoded = 'https://reqres.in/api/users/2';
const baseUrl = 'https://reqres.in/api/'
const deleteUserId = '2';
const deleteUserUrl = `${baseUrl}users/${deleteUserId}`


//copiaza codul