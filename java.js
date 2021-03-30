function mostrar() {
    document.getElementById("mostrar").style.display = 'block';
}

function menu() {
    let modal = document.querySelector('.modal')
    let overlay = document.querySelector('.overlay')

    modal.style.display = 'block';
    overlay.style.display = 'block';

}

function fechar() {
    let modal = document.querySelector('.modal')
    let overlay = document.querySelector('.overlay')
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

//function tira() {

//}