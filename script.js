const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    
    if (username.length < 3) {
        message.textContent = "Numele de utilizator trebuie să aibă cel puțin 3 caractere.";
        message.style.color = "red";
        return;
    }

   
    if (password.length < 6) {
        message.textContent = "Parola trebuie să aibă cel puțin 6 caractere.";
        message.style.color = "red";
        return;
    }

    
    if (password !== confirmPassword) {
        message.textContent = "Parolele nu coincid.";
        message.style.color = "red";
        return;
    }

    
    if (!terms) {
        message.textContent = "Trebuie să accepți termenii și condițiile.";
        message.style.color = "red";
        return;
    }

    
    message.textContent = "Contul a fost creat cu succes!";
    message.style.color = "#1db954";

  
    form.reset();
});
