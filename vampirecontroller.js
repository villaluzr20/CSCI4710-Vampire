function changeMethod() {
    var method = document.getElementById("SelectMethod").selectedIndex;
    array.forEach(item => {
        switch (method) {
            case 0: // random
            item.status = item.random === 1? "Vampire" : "Not a vampire";
            break;
            case 1: // threshold based
            item.status = item.garlic + item.shadow + item.complexion >= 6 ? "Vampire" : "Not a vampire";
            break;
            default:
            return window.alert("Invalid method");
        }
    });
} 

window.alert(method === 0 ? "Random method selected" : "Threshold method selected");
console.log(array);
sessionStorage.setItem("array1", JSON.stringify(array));
sessionStorage.getItem("random_method", JSON.stringify(method));

function reset() {
    sessionStorage.setItem('array1', JSON.stringify([]));
    console.log("Please restart.");
    window.alert("Please restart.")
}

function renderHtmlTable() {
    var tableContainer = document.querySelector("#table");
    var labels = ['firstName', 'lastName', 'status'];
    HTMLTableCaptionElement(tableContainer, array, labels)
}

var headerRow = document.createElement('tr');
columns.forEach(col => {
    var th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);

data.forEach(rowData => {
    var tr = document.createElement('tr');
    columns.forEach(col => {
        var td = document.createElement('td');
        td.textContent = rowData[col];
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});

container.innerHTML = '';
container.appendChild(table);

renderHtmlTable();