// var image = document.getElementById("image");
// var container = document.getElementById("container");
// var imageIndex = 1;
// var numImages = 5;

// container.addEventListener("click", function() {
//     imageIndex = (imageIndex % numImages) + 1;
//     image.src = "image" + imageIndex + ".jpg";
// });

// document.addEventListener("keydown", function(event) {
//     if (event.keyCode === 37) { // Arrow left
//         imageIndex = (imageIndex - 1 < 1) ? numImages : imageIndex - 1;
//     } else if (event.keyCode === 39) { // Arrow right
//         imageIndex = (imageIndex % numImages) + 1;
//     }
//     image.src = "image" + imageIndex + ".jpg";
// });

var imageIndex = 1;
var numImages = 5;
var container = document.getElementById("container");
var images = container.getElementsByTagName("img");
var prevButton = container.querySelector(".prev");
var nextButton = container.querySelector(".next");

function showImage(n) {
  var prevImage = container.querySelector(".active");
  prevImage.classList.remove("active");
  prevImage.style.zIndex = 10;
  images[n - 1].style.zIndex = 20;
  images[n - 1].classList.add("active");
}

function prevImage() {
  imageIndex = (imageIndex - 1 + numImages) % numImages || numImages;
  showImage(imageIndex);
}

function nextImage() {
  imageIndex = imageIndex % numImages + 1;
  showImage(imageIndex);
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    nextImage();
  });
}

prevButton.addEventListener("click", function() {
  prevImage();
});

nextButton.addEventListener("click", function() {
  nextImage();
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    prevImage();
  } else if (event.keyCode === 39) {
    nextImage();
  }
});

showImage(imageIndex);