document.querySelector('#btnregister').addEventListener('click', saveClient);

function saveClient(){
    var sName= document.querySelector('#name').value,
    sYear= document.querySelector('#year').value,
    sUser= document.querySelector('#user').value,
    sEmail= document.querySelector('#email').value,
    sSexo= document.querySelector('#sexo').value,
    sPassword= document.querySelector('#password').value;
    
    addClientToSystem(sName,sYear,sUser,sEmail,sSexo,sPassword);
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
