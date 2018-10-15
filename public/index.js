const userCreateForm = document.getElementById("user-create-form")

const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    User = {
        email: document.getElementById("email").value,
        userName: document.getElementById("userName").value,
        fullName: document.getElementById("fullName").value,
        password: document.getElementById("password").value,
    };
    
    fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(User),
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
        if (res.status === 201) {
            alert("New user has been created")
        } else if (res.status === 409) {
            alert("Username has already been taken.")
        }
        return res.json()
    })
    .then(res => {
        console.log(res)
    })
}