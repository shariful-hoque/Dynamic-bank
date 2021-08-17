document.getElementById("submit-btn").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmailValue = emailField.value;
    const userPass = document.getElementById("user-pass");
    const userPassValue = userPass.value;

    const userValidName = "sozib@gmail.com";
    const userValidPass = 1234;

    if (userEmailValue == userValidName && userPassValue == userValidPass) {
        window.location.href = "withdrow.html";
    }
    else {
        const hiddenText = document.getElementById("hidden");
        hiddenText.classList.remove("hidden");
    }
})