// form validation Javascript 
function validateForm() {
    
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let cell = document.getElementById('cell').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    
    if (!name || !surname || !cell || !email || !password) {
        alert("Please fill out all required fields.");
        return false;
    }

   
    if (cell.length !== 10 || isNaN(cell)) {
        alert("Please enter a valid cellphone number (10 digits).");
        return false;
    }

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,15}$/;
    if (!passwordRegex.test(password)) {
        alert("Please enter a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
        return false;
    }

    return true; 
}


document.querySelector('form').addEventListener('submit', function (event) {    // Event listener
    event.preventDefault(); 


    if (validateForm()) {
        
        alert("Registration successful!");
    }
});


document.getElementById('cell').addEventListener('input', function () {
    
    let cellValue = this.value;


    if (cellValue.length > 10) {
        this.value = cellValue.slice(0, 10); 
    }
});
