var i = 0;
var arr = ["image/tea01.jpg", "image/tea02.jpg", "image/tea03.jpg", "image/tea04.jpg"];

function slidePhotos() {
    for (var j = 1; j <= arr.length; j++) {
        var photo = document.getElementById("slide_photo" + j);
        photo.classList.add("fade-out");
        setTimeout(function (currentPhoto) {
            return function () {
                if (i == arr.length - 1) {
                    i = 0;
                } else {
                    i += 1;
                }
                currentPhoto.src = arr[i];
                currentPhoto.classList.remove("fade-out");
            };
        }(photo), 1000);
    }
}


setInterval(slidePhotos, 2000);



function slide_photos() {
    var photos = document.getElementById("photos");
    var pli = photos.getElementsByTagName("li");

    var left = photos.offsetLeft;
    var width = pli[0].offsetWidth;
    var lis = pli.length;


    if (-left >= (lis - 1) * width) {
        photos.style.left = 0 + "px";

    } else {
        left -= width;
        photos.style.left = left + "px";
    }
}


window.setInterval("slide_photos()", 2000);


