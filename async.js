async function getUsers() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error);

    }

}

getUsers();

function login(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "1234") {
                resolve("Login Successful");
            } else {
                reject("Invalid Username or Password");
            }

        }, 2000);

    });

}

async function userLogin() {

    try {

        const result = await login("admin", "31234");

        console.log(result);

    } catch (error) {

        console.log(error);


    }

}

userLogin();

function course1() {
    return Promise.resolve("JavaScript");
}

function course2() {
    return Promise.resolve("React");
}

function course3() {
    return Promise.resolve("Node.js");
}

Promise.all([
    course1(),
    course2(),
    course3()
])
.then(result => {
    console.log(result);
});

function placeOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Order Placed Successfully");

        }, 3000);

    });

}

async function orderProduct() {

    console.log("Placing your order...");

    const message = await placeOrder();

    console.log(message);

    console.log("Thank you for shopping!");

}

orderProduct();

function checkBalance() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(5000);

        }, 2000);

    });

}

async function displayBalance() {

    const balance = await checkBalance();

    console.log(`Your Balance is ₹${balance}`);

}

displayBalance();