<script>
    
    function resetForm() {
        document.getElementById("reset").addEventListener("click", alert());
    }  
        
    function formAlert {
        document.getElementById("submit").onclick = function() {
            var inputText = document.getElementsByClassName("input-text");
            alert(inputText.value);
          }
</script>

