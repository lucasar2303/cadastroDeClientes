// MODAL OPEN / CLOSE

let modalCloseElement = document.querySelector('.modalClose');

let modal = document.querySelector('.modal')
function modalOpen(){
    modal.classList.add('modal-active');
}

function modalClose(){
    modal.classList.remove('modal-active');
    clearFields();
}

modalCloseElement.addEventListener("click" , modalClose, false);


function clearFields(){
    const fields = document.querySelectorAll('.modal-input');
    fields.forEach( fields => fields.value = "")
}




// CRUD

const tempClient = {
    nome : "Lucos",
    celular : "992029139",
    email : "lucas-ar13@hotmail.com",
    cep : "12120206",
    rua : "Av. Tremembe",
    bairro : "Jd. Santana",
    cidade : "Tremembé",
    estado : "SP"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));


// CREATE
function createClient (client){
    const dbClient = getLocalStorage()
    dbClient.push(client);
    setLocalStorage(dbClient)
}

// READ

const readClient = () => getLocalStorage();

// UPDATE

function updateClient (index, client){
    const dbClient = readClient();
    dbClient[index] = client
    setLocalStorage(dbClient)
}

// DELETE

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}


// INTERACTIONS 

updateTable();

// ==== CREATE

function isValidFields() {
    return document.querySelector('#formAdd').reportValidity()
}

function saveClient(){
    if(isValidFields()){
        const client = {
            nome : document.querySelector('#nome').value,
            celular : document.querySelector('#celular').value,
            email : document.querySelector('#email').value,
            cep : document.querySelector('#cep').value,
            rua : document.querySelector('#rua').value,
            bairro : document.querySelector('#bairro').value,
            cidade : document.querySelector('#cidade').value,
            estado : document.querySelector('#uf').value
        }
        createClient(client);
        updateTable();
        modalClose();
    }
}

document.querySelector('.button-add-form').addEventListener('click', saveClient);

// ========== UPDATE

var numRow = 1

function createRow(client){
    const newRow = document.createElement('tr')
    newRow.classList.add('row-table')
    newRow.innerHTML = `
        <td>${numRow++}</td>
        <td>${client.nome}</td>
        <td>${client.celular}</td>
        <td>${client.email}</td>
        <td>${client.cep}</td>
        <td>${client.rua}</td>
        <td>${client.bairro}</td>
        <td>${client.cidade}</td>
        <td>${client.estado}</td>
        <td><button class="button-edit"></button></td>
        <td><button class="button-delete"></button></td>
    `
    document.querySelector("#tableClients>tbody").appendChild(newRow)

}

function clearTable(){
    const rows = document.querySelectorAll('#tableClients>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row))

}

function updateTable(){
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);

}



