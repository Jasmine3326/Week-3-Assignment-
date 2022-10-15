let id = 0;

document.getElementById('add').addEventListner('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list')
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = documnent.getElementById('new-Task').value;
    row.insertcell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(0).innerHTML = documnent.getElementById('new-start-date').value;
    row.insertCell(0).innerHTML = documnent.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});

function createDeleteButton(id) {
 let btn = document.createElement('button')
  btn.className = 'btn btn-primary';
    btn.id = id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            console.log(`Delete row with id: item-${id}`);
            let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
        };
    
return btn;
}
