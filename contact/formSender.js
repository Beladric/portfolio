function sendMail(){
    let link = "mailto:kilian.goetz@yahoo.fr"
        + "?subject=" + encodeURIComponent(document.getElementById("subject").value)
        + "&body=" + encodeURIComponent(document.getElementById("message").value)
        + "%0D%0A%0D%0A Mail address : "
        + encodeURIComponent(document.getElementById("email-input").value)
        + "%0D%0A Phone number : "
        + encodeURIComponent(document.getElementById("phone-number").value)
    window.location.href = link;
}