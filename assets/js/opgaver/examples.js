let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    /* din map kode her... */
    myExtras = myExtrasInput.value.split(',').map(item => item.trim());
    myExtrasListElement.innerHTML = myExtras.map(item => `<li>${item}</li>`).join('');
}



function updateExtras() {

    /* din map kode her... */



}






