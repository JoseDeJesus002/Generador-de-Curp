document.querySelector('#btnenv').addEventListener('click', saveClient);

function saveClient(){
    var sName= document.querySelector('#nombre').value,
    sComida= document.querySelector('#comida').value,
    sCantidad= document.querySelector('#cantidad').value,
    sSearch= document.querySelector('#search').value,
    sCupon= document.querySelector('#cupon').value,
    sProd= document.querySelector('#prod').value;
    
    addClientToSystem(sName,sComida,sCantidad,sSearch,sCupon,sProd);
}