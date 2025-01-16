document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inscriptionForm");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        const errorMessages = [];

        // Validate Name
        const name = document.getElementById("name").value.trim();
        if (name.length < 2) {
            isValid = false;
            errorMessages.push("Le nom doit contenir au moins 2 caractères.");
        }

        // Validate Email
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessages.push("Veuillez entrer une adresse email valide.");
        }

        // Validate Password
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        if (password.length < 6) {
            isValid = false;
            errorMessages.push("Le mot de passe doit contenir au moins 6 caractères.");
        }

        // Validate Confirm Password
        if (password !== confirmPassword) {
            isValid = false;
            errorMessages.push("Les mots de passe ne correspondent pas.");
        }

        // Show Error Messages
        if (!isValid) {
            event.preventDefault();
            alert(errorMessages.join("\n"));
        }
    });
});
