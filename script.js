// Typing effect
const text = "Full Stack Web Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;

// ---------------------------
// EmailJS Contact Form
// ---------------------------
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Replace with your actual Service ID and Template ID
    emailjs.sendForm("service_dc0u07k", "template_pw3sq1e", this)
        .then(function() {
            alert("Message sent successfully!"); // Success message
        }, function(error) {
            alert("Failed to send message. Please try again."); // Error message
            console.error(error);
        });
});
