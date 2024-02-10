document.addEventListener("DOMContentLoaded", function() {

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");


    passwordInput.addEventListener("input", checkPasswords);
    confirmPasswordInput.addEventListener("input", checkPasswords);


    function checkPasswords() {

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        const errorElement = document.getElementById("error");

        if (password === confirmPassword) {
            errorElement.textContent = "Passwords match"; 
            errorElement.style.color = "green";
        } else {
            errorElement.textContent = "*Passwords do not match"; 
        }
    }
});