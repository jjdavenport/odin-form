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

document.addEventListener('DOMContentLoaded', function() {
    function validateInput(event) {
        const inputValue = event.target.value;
        const key = event.key;
        const maxCharacters = 15;

        if ((key >= '0' && key <= '9') || key === '+' || key === 'Backspace') {
            if ((key === '+' && event.target.selectionStart === 0) || inputValue === '') {
                return true;
            }
            if (inputValue.indexOf('+') !== -1 && key === '+') {
                event.preventDefault();
            }
            if (inputValue.length >= maxCharacters && key !== 'Backspace') {
                event.preventDefault();
            }
        } else {
            event.preventDefault();
        }
    }


    document.getElementById('phone').addEventListener('keydown', validateInput);


    document.getElementById('phone').addEventListener('keydown', function(event) {
        if (event.key === " ") {
            event.preventDefault(); 
        }
    });
});