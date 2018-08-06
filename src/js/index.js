window.onload = () => {
    newDoc();
}

function newDoc() {
    setInterval(delayIndex,3000);
    setInterval(goToHome,4000);   
}

function delayIndex(){
    $('.image').animate({opacity:"0"}, {duration: 1000, queue: false});
}

function goToHome(){
    window.location.assign('views/login.html');
}
