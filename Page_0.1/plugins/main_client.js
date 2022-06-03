var clientList=[];

function addClientToSystem(pusername,pemail,ppassword){
    let newClient={
        username : pusername,
        email  : pemail,
        pasword : ppassword
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