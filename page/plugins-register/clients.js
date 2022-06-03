var clientList=[];

function addClientToSystem(pname,pedad,puser,pemail,psexo,ppass){
    let newClient={
        name : pname,
        age  : pedad,
        user : puser,
        email: pemail,
        sexo : psexo,
        password : ppass
    };
    console.log(newClient);
    clientList.push(newClient);
    localStorageClientList(clientList);
}

function getClientList(){
    var storedList=localStorage.getItem('localClientList')
    if(storedList == null){
        clientList = [];
    }else{
        clientList = JSON.parse(storedList);
    }
    return clientList;
}


function localStorageClientList(pList){
    localStorage.setItem('localClientList', JSON.stringify(pList));
}