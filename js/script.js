function setElementValues() {

    for (let i = 1; i <= 5; i++) {
        document.getElementById('img' + i).style.height = document.images[i].height / window.innerWidth * 100 + 'vw';
        document.getElementById('img' + i).style.width = document.images[i].width / window.innerWidth * 100 + 'vw';
    }


    document.getElementById('img1').style.left = (window.innerWidth / 2 - document.images[1].width / 2 - 2 * window.innerWidth / 10) / window.innerWidth * 100 + 'vw';
    document.getElementById('img1').style.top = (window.innerHeight / 2 - document.images[1].height / 2) / window.innerWidth * 100 + 2 + 'vw';

    document.getElementById('img2').style.left = (window.innerWidth / 2 - document.images[2].width / 2 -window.innerWidth / 10) / window.innerWidth * 100 + 'vw';
    document.getElementById('img2').style.top = (window.innerHeight / 2 - document.images[2].height / 2) / window.innerWidth * 100 + 2 + 'vw';

    document.getElementById('img3').style.left = (window.innerWidth / 2 - document.images[3].width / 2) / window.innerWidth * 100 + 'vw';
    document.getElementById('img3').style.top = (window.innerHeight / 2 - document.images[3].height / 2) / window.innerWidth * 100 + 2 + 'vw';

    document.getElementById('img4').style.left = (window.innerWidth / 2 - document.images[4].width / 2 + window.innerWidth / 10) / window.innerWidth * 100 + 'vw';
    document.getElementById('img4').style.top = document.getElementById('img2').style.top;

    document.getElementById('img5').style.left = (window.innerWidth / 2 - document.images[5].width / 2 + 2 * window.innerWidth / 10) / window.innerWidth * 100 + 'vw';
    document.getElementById('img5').style.top = document.getElementById('img1').style.top;

    document.getElementById('logo').style.width = document.images[0].width / window.innerWidth * 100 + 'vw';

}

function slideLeft() {

    let srcFirstImg = document.images[1].src;

    for (let i = 1; i < 5; i++) {
        document.images[i].src = document.images[i + 1].src;
    }

    document.images[5].src = srcFirstImg;

}

function slideRight() {

    let srcLastImg = document.images[5].src;

    for (let i = 5; i > 1; i--) {
        document.images[i].src = document.images[i - 1].src;
    }

    document.images[1].src = srcLastImg;

}

function slideLeftTwice() {
    slideLeft();
    slideLeft();
}

function slideRightTwice() {
    slideRight();
    slideRight();
}
