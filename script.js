document.addEventListener("DOMContentLoaded", function() {

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorElement = document.getElementById("error");


    passwordInput.addEventListener("input", checkPasswords);
    confirmPasswordInput.addEventListener("input", checkPasswords);


    function checkPasswords() {

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

 
        if (password === "" || confirmPassword === "") {
            errorElement.textContent = "*Passwords do not match"; 
            errorElement.style.color = ""; 
            return; 
        }

        if (password === confirmPassword) {
            errorElement.textContent = "Passwords match"; 
            errorElement.style.color = "green"; 
        } else {
            errorElement.textContent = "*Passwords do not match"; 
            errorElement.style.color = ""; 
        }
    }
})