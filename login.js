function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].password) {
            console.log(email + " logged in");
            return;
        }
    }

    console.log("No email on Strength Force");
}

let users = [
    {
        email: "test@gmail.com",
        password: "123"
    },
    {
        email: "nphonsavath@gmail.com",
        password: "pokemon"
    }
]