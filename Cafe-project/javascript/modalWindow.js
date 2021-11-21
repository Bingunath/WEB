var modal = document.getElementById('window');

var clickBtn = document.getElementById('clickbtn');

clickBtn.addEventListener('click', openModal);

window.addEventListener('click', outSide);

function openModal() {
    modal.style.visibility = 'visible';
}

function outSide(e) {
    if(e.target == modal) {
        modal.style.visibility = 'hidden';

    }
}


