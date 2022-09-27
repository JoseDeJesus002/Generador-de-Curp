document.querySelector('#btnregister').addEventListener('click', saveClient);

function saveClient(){
    var sUsername= document.querySelector('#username').value,
    sEmail= document.querySelector('#email').value,
    sPassword= document.querySelector('#password').value;
    
    addClientToSystem(sUsername,sEmail,sPassword);
}

/*function drawClientTable(){
    var list=getClientList(),
    tbody=document.querySelector('#ClientsTable tbody');

    tbody.innerHTML='';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
        var nameCell = row.insertCell(0);
        nameCell.innerHTML=list[i].name;


        tbody.appendChild(row);
    }
}
*/


