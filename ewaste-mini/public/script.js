// Login
async function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let res = await fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
    });

    let data = await res.json();
    if (data.error) alert(data.error);
    else window.location.href = "request.html";
}

// Register
async function registerUser() {
    let name = prompt("Enter Name");
    let email = prompt("Enter Email");
    let password = prompt("Enter Password");

    let res = await fetch("/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password })
    });

    alert("Registration Successful!");
}

// Pickup Request
async function sendRequest() {
    let username = document.getElementById("username").value;
    let address = document.getElementById("address").value;
    let wasteItem = document.getElementById("wasteItem").value;
    let date = document.getElementById("date").value;

    await fetch("/request", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, address, wasteItem, date })
    });

    alert("Pickup Request Sent!");
}
