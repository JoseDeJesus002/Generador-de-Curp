var clientList=[];

function addClientToSystem(pname,pcomida,pcantidad,psearch,pcupon,pprod){
    let newClient={
        name : pname,
        comida  : pcomida,
        cantidad : pcantidad,
        search: psearch,
        cupon : pcupon,
        prod : pprod
    };
    alert(newClient);
    clientList.push(newClient);
    localStorageClientList(clientList);
}
/*
function getClientList(){
    return clientList;
}
*/

function localStorageClientList(pList){
    localStorage.setItem('localClientList', JSON.stringify(pList));
}