
document.addEventListener('click',addProducts);

function addProducts(){
   let productNames=document.getElementById('1stproductName');
   let productName=productNames.innerText;
   document.getElementById('product-list').innerHTML=productName;
}

