<script>
    
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("mail");
    let userMsg = document.getElementById("msg");   
    
    function resetForm() {
        document.getElementById("reset").addEventListener("click", alert());
    }  
        
    function formAlert {
        document.getElementById("submit").addEventListener("click", alert("Thanks! The details you entered are: " + userName + userEmail + userMsg);
    }
</script>