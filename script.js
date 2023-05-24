// Add event listener to the "Read More" button
var readMoreElements = document.getElementsByClassName("read-more");
for (var i = 0; i < readMoreElements.length; i++) {
    readMoreElements[i].addEventListener("click", function () {
        var btnText = this;
        if (btnText.innerHTML === "Hide...") {
            btnText.innerHTML = "Read More...";
        } else {
            btnText.innerHTML = "Hide...";
        }
    });
}
