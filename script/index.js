document.getElementById('submit').addEventListener('click', function () {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const mailError = document.getElementById('mailError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = "";
    mailError.textContent = "";
    messageError.textContent = "";

    let hasError = false;

    const senderName = name.value;
    const senderEmail = email.value;
    const msgText = message.value;

    const serviceID = "service_av6iq8l";
    const templateID = "template_tgfkcge";

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (senderName.trim() === "") {
        nameError.textContent = "Name is required";
        hasError = true;
    }

    if (senderEmail.trim() === "") {
        mailError.textContent = "Email is required";
        hasError = true;
    } 

    if (!emailRegex.test(senderEmail)) {
        mailError.textContent = "Input a valid email address";
        hasError = true;
    }

    if (msgText.trim() === "") {
        messageError.textContent = "Type in your message";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    const emailJSVariable = {
        name: senderName,
        email: senderEmail,
        message: msgText
    };

    emailjs.send("service_av6iq8l", "template_tgfkcge", emailJSVariable)
        .then(res => {
            alert("Thank you! Your message has been received");
            name.value = "";
            email.value = "";
            message.value = "";
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
});

document.getElementById('name').addEventListener('input', function () {
    document.getElementById('nameError').textContent = "";
});

document.getElementById('email').addEventListener('input', function () {
    document.getElementById('mailError').textContent = "";
});

document.getElementById('message').addEventListener('input', function () {
    document.getElementById('messageError').textContent = "";
});
