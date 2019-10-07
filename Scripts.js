<script>
    
    function resetForm() {
        document.getElementById("reset").addEventListener("click", alert());
    }  
        
    function formAlert {
        document.getElementsByClassName("get-input-text").onclick = function() {
            var inputText = document.getElementById("input-text");
            alert(inputText.value);
          }
</script>