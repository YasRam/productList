var productNameinput = document.getElementById('productName');
var productPriceinput = document.getElementById('productPrice');
var productCategoryinput = document.getElementById('productCategory');
var productDescinput = document.getElementById('productDesc');
var tbody = document.getElementById('tbody');
var ProductList ;
var x=[];


if(localStorage.getItem("products")==null){
    ProductList=[]
}else{
    ProductList= JSON.parse(localStorage.getItem("products"))
    displayProduct(ProductList)
}

function addproduct() {
    var product = {
        name: productNameinput.value,
        price: productPriceinput.value,
        category: productCategoryinput.value,
        Desc: productDescinput.value
    }

    ProductList.push(product)
    localStorage.setItem("products", JSON.stringify(ProductList))
    displayProduct(ProductList)
    clearform()
}

function displayProduct(ProductList) {
    var cartona = [];
    for (let i = 0; i < ProductList.length; i++) {
        cartona += `            
            <tr>
                <td>${i}</td>
                <td>${ProductList[i].name}</td>
                <td>${ProductList[i].price}</td>
                <td>${ProductList[i].category}</td>
                <td>${ProductList[i].Desc}</td>
                <td><button class="btn btn-warning">Update</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`;

    }
    tbody.innerHTML = cartona
}

function clearform() {
    productNameinput.value = "";
    productPriceinput.value = "";
    productCategoryinput.value = "";
    productDescinput.value = "";

}

function deleteProduct(i) {
    ProductList.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(ProductList))
    displayProduct(ProductList)
}