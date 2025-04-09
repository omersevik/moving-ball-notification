const ball = document.getElementById('ball');
const bildirimBox = document.getElementById('bildirimBox');

let isMoving = true; // Başlangıçta top hareket ediyor
let position = 0; // Başlangıç konumu
let direction = 0.7 ; // Hareket yönü ve hızı

function moveBall() {
    if (isMoving) {
        position += direction;

        // Eğer top ekranın altına ulaşırsa yukarı çıkmaya başlasın
        if (position >= window.innerHeight - ball.offsetHeight) {
            direction = -0.7;
        }

        // Eğer top en yukarı ulaşırsa aşağı inmeye başlasın
        else if (position <= 0) {
            direction = 0.7;
        }

        ball.style.top = position + "px";
    }
}

// delay kısmını function olarak yazılmıştır
setInterval(moveBall, 1);

function movingOff() {
    //Hareket animasyonunu durdurur
    isMoving = false;

    //Bildirim kutusu görünür hale getirir
    bildirimBox.classList.add('visible');

    //Bildirim kutusu konumunu ayarlar
    let ballTop = ball.offsetTop;
    let ballLeft = ball.offsetLeft + ball.offsetWidth;
    bildirimBox.style.top = `${ballTop}px`;
    bildirimBox.style.left = `${ballLeft - 210}px`;
}

function movingOn() {
    //Hareket animasyonunu devam ettirir
    isMoving = true;

    //Bildirim kutusu gizlenir
    bildirimBox.classList.remove('visible');
}
