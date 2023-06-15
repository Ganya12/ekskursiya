var image = document.getElementById("image");
var container = document.getElementById("container");
var imageIndex = 1;
var numImages = 5;
var arrowLeft = document.querySelector(".arrow-left");
var arrowRight = document.querySelector(".arrow-right");

arrowLeft.addEventListener("click", function() {
    imageIndex = (imageIndex - 1 < 1) ? numImages : imageIndex - 1;
    image.src = "image" + imageIndex + ".jpg";
});

arrowRight.addEventListener("click", function() {
    imageIndex = (imageIndex % numImages) + 1;
    image.src = "image" + imageIndex + ".jpg";
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // Arrow left
        imageIndex = (imageIndex - 1 < 1) ? numImages : imageIndex - 1;
    } else if (event.keyCode === 39) { // Arrow right
        imageIndex = (imageIndex % numImages) + 1;
    }
    image.src = "image" + imageIndex + ".jpg";
});