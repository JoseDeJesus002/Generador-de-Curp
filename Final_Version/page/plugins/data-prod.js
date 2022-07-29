document.querySelector('#btnregprod').addEventListener('click',saveProduct);

function saveProduct(){
    var pName = document.querySelector('#nameprod').value,  
    pDescirption = document.querySelector('#desc').value,
    pCodigo = document.querySelector('#code').value,
    pCosto = document.querySelector('#price').value;
    addProductToSystem(pName,pDescirption,pCodigo,pCosto);
    alert("El producto se ha registrado correctamente");
}