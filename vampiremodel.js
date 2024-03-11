function checkCheckbox(id) {
    return document.getElementById(id).checked ? 3:0;
}

function calculateStatus(garlic, shadow, complexion) {
    return garlic + shadow + complexion >= 6 ? "Vampire" : "Not a vampire";
}   

function alertStatus(status) {
    window.alert(status);
}

function storeSession() {
    const sessionString = sessionStorage.getItem("array1");
    return sessionString !== null ? JSON.parse(sessionString) : [];
}

function addPersonToArray(x, y, garlic, shadow, complexion, z) {
    const rand = Math.floor(Math.random() * 2) +1;
}

let array = getSession();
console.log(array);

function isVampire() {
    const garlic = checkCheckbox('garlic');
    const shadow = checkCheckbox('shadow');
    const complexion = checkCheckbox('complexion');
    const status = calculateStatus(garlic, shadow, complexion);
    alertStatus(status);
}

function addVampire() {
    const garlic = checkCheckbox('garlic');
    const shadow = checkCheckbox('shadow');
    const complexion = checkCheckbox('complexion');
    const status = calculateStatus(garlic, shadow, complexion);
    const x = document.getElementById('name').value;
    const y = document.getElementById('lastname').value;
    const person = addPersonToArray(x, y, garlic, shadow, complexion, status);
    array.push(person);
    storesSession(array);
    console.log(array);
    alertStatus("submitted!");
}