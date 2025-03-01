// Handle form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate the form (check if fields are empty)
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return; // Stop form submission if validation fails
    }

    // Create an object to store the form data
    const userData = {
        name: name,
        email: email,
        message: message
    };

    // Display the form data as a confirmation (optional)
    document.getElementById("formResult").innerHTML = `
        <h2>Form Submission Successful</h2>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Message:</strong> ${userData.message}</p>
    `;

    // Optionally, you can store the data in an array if you want to track multiple submissions
    // let submissions = [];
    // submissions.push(userData);
});
