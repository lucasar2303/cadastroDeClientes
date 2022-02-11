let modalCloseElement = document.querySelector('.modalClose');

let modal = document.querySelector('.modal')
function modalOpen(){
    modal.classList.add('modal-active');
}

function modalClose(){
    modal.classList.remove('modal-active');
}

modalCloseElement.addEventListener("click" , modalClose, false);

