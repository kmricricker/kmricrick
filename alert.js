window.onload = function() {
            setTimeout(function() {
                document.getElementById("custom-alert").style.display = "block";
                document.getElementById("overlay").style.display = "block";
            }, 2000);
        };

        function closeAlert() {
            document.getElementById("custom-alert").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
        
       