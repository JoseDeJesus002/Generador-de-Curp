var productList=[];

function addProductToSystem(pName,pDescirption,pCodigo,pCosto){
    let newProduct={
        nameprod: pName,
        desc : pDescirption,
        code : pCodigo,
        price: pCosto
    };
    console.log(newProduct);
    productList.push(newProduct);
}

