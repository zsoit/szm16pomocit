var i = 0;
var images = [];
var time = 500;


images[0] = 'img/image1-min.jpg';
images[1] = 'img/image2-min.jpg';
images[2] = 'img/image3-min.jpg';
images[3] = 'img/image4-min.jpg';


function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;