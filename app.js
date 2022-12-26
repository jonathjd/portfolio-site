var form = document.getElementById('submission')

form.addEventListener('submit', function(event){
    event.preventDefault() // Prevents the form from autosubmitting

    var name = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value

    Email.send({
        SecureToken : "adf24d22-6b13-45c4-b1d2-90d102cbf8e9",
        To : "jon.dickinson17@gmail.com",
        From : "jon.dickinson17@gmail.com",
        Subject : `Contact Form Inquiry from ${name}`,
        Body :  `${name} with number ${phone} and email ${email} says: ${message}`
    }).then(
      message => alert("Thank you for reaching out, I will be in touch shortly!")
    );

})