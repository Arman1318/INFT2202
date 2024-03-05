$(document).ready(function() {
    $("#registerBtn").on("click", function(event) {
        // Prevent default form behavior
        event.preventDefault();

        // Clear previous error messages
        $("#ErrorMessage").hide().empty();

        // validation logic 
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        // Validating First Name and Last Name
        if (firstName.length < 2 || lastName.length < 2) {
            displayError("First Name and Last Name must be at least 2 characters long.");
            return;
        }

        // Validating Email 
        if (email.length < 8 || !email.includes('@')) {
            displayError("Invalid email address.");
            return;
        }

        // Validating Password
        if (password.length < 6) {
            displayError("Password must be at least 6 characters long.");
            return;
        }

        // Validating Confirm Password
        if (password !== confirmPassword) {
            displayError("Passwords do not match.");
            return;
        }

        // Creating an instance of the User class
        var newUser = new User(firstName, lastName, email, password);

        // Display the user in the console
        console.log(newUser);

        // Clear the form
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#password").val("");
        $("#confirmPassword").val("");

        // Clear any previous error messages
        $("#ErrorMessage").hide().empty();
    });
});

// User Class
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

// Function to display error messages
function displayError(message) {
    $("#ErrorMessage").text(message).show();
}
