document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("masterForm");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        const errorMessages = [];

        // Validate Name
        const nom = document.getElementById("nom").value.trim();
        if (nom.length < 2) {
            isValid = false;
            errorMessages.push("Le nom doit contenir au moins 2 caractères.");
        }

        // Validate Prenom
        const prenom = document.getElementById("prenom").value.trim();
        if (prenom.length < 2) {
            isValid = false;
            errorMessages.push("Le prénom doit contenir au moins 2 caractères.");
        }

        // Validate Date of Birth
        const dateNaissance = document.getElementById("date_naissance").value;
        if (!dateNaissance) {
            isValid = false;
            errorMessages.push("Veuillez entrer une date de naissance valide.");
        }

        // Validate Email
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessages.push("Veuillez entrer une adresse email valide.");
        }

        // Validate Phone
        const telephone = document.getElementById("telephone").value.trim();
        const phonePattern = /^[0-9]{8,15}$/;
        if (!phonePattern.test(telephone)) {
            isValid = false;
            errorMessages.push("Le numéro de téléphone doit contenir entre 8 et 15 chiffres.");
        }

        // Validate Motivation
        const motivation = document.getElementById("motivation").value.trim();
        if (motivation.length < 20) {
            isValid = false;
            errorMessages.push("La lettre de motivation doit contenir au moins 20 caractères.");
        }

        // Validate Files
        const cv = document.getElementById("cv").files[0];
        const releve = document.getElementById("releve").files[0];
        const photo = document.getElementById("photo").files[0];
        if (!cv || !releve || !photo) {
            isValid = false;
            errorMessages.push("Tous les fichiers requis doivent être téléchargés.");
        }

        // Show Error Messages
        if (!isValid) {
            event.preventDefault();
            alert(errorMessages.join("\n"));
        }
    });
});
