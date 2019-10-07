<script>
    
    function resetForm() {
        document.getElementById("reset").addEventListener("click", alert());
    }  
        
    function userName() {
        var name = document.getElementById("name");
        alert("Your name is: " + name.value);
}

    function userMail() {
    var email = document.getElementById("mail");
    alert("Your email is: " + email.value);
}
    function userMessage() {
    var message = document.getElementById("msg");
    alert("Your message is: " + message.value);
}

    var submit = document.getElementById("submit");
    submit.addEventListener("click", userName);
    submit.addEventListener("click", userMail);
    submit.addEventListener("click", userMessage);
</script>



