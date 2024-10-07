
document.getElementById('whatsappButton').addEventListener('click', function() {

    var phoneNumber = "5585985386200";

    var message = "Olá! Gostaria de saber mais sobre seu portfólio.";

    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, '_blank');
});
