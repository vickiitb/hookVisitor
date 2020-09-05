    var mouseX = 0;
    var mouseY = 0;

    var w = window.innerWidth;
    var h = window.innerHeight;

    var popupCounter = 0;

    document.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        feedbackArr = [];

        document.getElementById("coordinates").innerHTML = "<br />X: " + mouseX + "px<br />Y: " + mouseY + "px";
    });

    $(document).mouseleave(function () {
        if (mouseY < 0.075 * h && mouseX >0.70 * w) { 
            if (popupCounter < 2) {
                    feedbackArr[popupCounter] = prompt('Hope to see you again. Please tell us how we can make NearLaw better for you!');
                }
            popupCounter ++;
            console.log(feedbackArr);				
            }
    });
