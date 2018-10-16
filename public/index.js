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
        telephone: document.getElementById("telephone").value,
        homepage: document.getElementById("homepage").value,
        contactMethod: radioButtonChecker(),
        preferredDevice: checkBoxChecker(),
        userLevel: document.getElementById("level").value,
        favoriteColor: document.getElementById("color").value,
    };

    function radioButtonChecker() {
        const email = document.getElementById("contactEmail").checked
        const text = document.getElementById("contactText").checked
        if (email === true) {
            return "Email"
        } else if (text === true) {
            return "Text"
        } 
        return "Phone Call"
    }

    function checkBoxChecker() {
        const Android = document.getElementById("Android").checked
        const IOS = document.getElementById("IOS").checked
        const Mac = document.getElementById("Mac").checked
        const Windows = document.getElementById("Windows").checked
        let preferredDevice = []
        if (Android === true) {
            preferredDevice.push("Android")
        } if (IOS === true) {
            preferredDevice.push("IOS")
        } if (Mac === true) {
            preferredDevice.push("Mac")
        } if (Windows === true) {
            preferredDevice.push("Windows")
        } 
        return preferredDevice
    }
    
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