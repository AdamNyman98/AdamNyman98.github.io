let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card')

card.addEventListener('mousedown', mouseDown)
card.addEventListener('touchstart', touchStart)

function mouseDown(e){
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) >= 0 ? (card.offsetTop - newY)  + 'px' : 0 + 'px';
    card.style.left = (card.offsetLeft - newX) >= 0 ? (card.offsetLeft - newX) + 'px' : 0 + 'px';
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

function touchStart(e){
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('touchMove', touchMove)
    document.addEventListener('touchend', touchEnd)
}

function touchMove(e){
    newX = startX - e.touches[0].clientX;
    newY = startY - e.touches[0].clientY;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    card.style.top = (card.offsetTop - newY) >= 0 ? (card.offsetTop - newY)  + 'px' : 0 + 'px';
    card.style.left = (card.offsetLeft - newX) >= 0 ? (card.offsetLeft - newX) + 'px' : 0 + 'px';
}

function touchEnd(e){
    document.removeEventListener('touchmove', touchMove)
}