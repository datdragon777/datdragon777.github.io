
var body1 = document.getElementsByTagName("body");
var checkClick = 0;
function button_Change() {
    console.log(body1)
    if (checkClick === 0) {
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "white"
        checkClick = 1;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
        checkClick = 0;
    }
    
    
  }