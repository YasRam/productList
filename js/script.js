var productNameinput = document.getElementById("productName");
var productPriceinput = document.getElementById("productPrice");
var productCountinput = document.getElementById("productCount");
var productCategoryinput = document.getElementById("productCategory");
var productDescinput = document.getElementById("productDesc");
var tbody = document.getElementById("tbody");
var mainBtn = document.getElementById("mainBtn");

var ProductList;
var x = [];

if (localStorage.getItem("products") == null) {
  ProductList = [];
} else {
  // ProductList=[{
  //     name: "sumsong",
  //     price: "productPrice",
  //     category: "productCategory",
  //     Desc: "productDesc"
  // },{
  //     name: "lenovo",
  //     price: "productPrice",
  //     category: "productCategory",
  //     Desc: "productDesc"
  // },{
  //     name: "sumsons",
  //     price: "productPrice",
  //     category: "productCategory",
  //     Desc: "productDesc"
  // },{
  //     name: "apple",
  //     price: "productPrice",
  //     category: "productCategory",
  //     Desc: "productDesc"
  // },]

  ProductList = JSON.parse(localStorage.getItem("products"));
  displayProduct(ProductList);
}

mainBtn.addEventListener("click", addproduct);

function addproduct() {
  var product = {
    name: productNameinput.value,
    price: productPriceinput.value,
    count: productCountinput.value,
    category: productCategoryinput.value,
    desc: productDescinput.value,
  };
  ProductList.push(product);
  localStorage.setItem("products", JSON.stringify(ProductList));
  displayProduct(ProductList);
  clearform();
}

function displayProduct(ProductList) {
  var cartona = [];
  for (let i = 0; i < ProductList.length; i++) {
    cartona += `            
            <tr>
                <td>${i + 1}</td>
                <td>${ProductList[i].name}</td>
                <td>${ProductList[i].price}</td>
                <td>${ProductList[i].count}</td>
                <td>${ProductList[i].category}</td>
                <td>${ProductList[i].Desc}</td>
                <td><button class="btn btn-warning" onclick="updateProduct(${i})"><i class="fa-solid fa-pen-to-square"></i></button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
  }
  tbody.innerHTML = cartona;
}

function clearform() {
  productNameinput.value = "";
  productPriceinput.value = "";
  productCountinput.value = "";
  productCategoryinput.value = "";
  productDescinput.value = "";
}

function deleteProduct(i) {
  ProductList.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(ProductList));
  displayProduct(ProductList);
}

function searchProduct(word) {
  var searchArray = [];
  for (let i = 0; i < ProductList.length; i++) {
    if (ProductList[i].name.toLowerCase().includes(word.toLowerCase())) {
      searchArray.push(ProductList[i]);
    }
  }
  displayProduct(searchArray);
}

function updateProduct(i) {
  productNameinput.value = ProductList[i].name;
  productPriceinput.value = ProductList[i].price;
  productCountinput.value = ProductList[i].count;
  productCategoryinput.value = ProductList[i].category;
  productDescinput.value = ProductList[i].desc;
  mainBtn.innerHTML = "update product";
  // mainBtn.value = "updateproduct";
  mainBtn.removeEventListener("click");

  mainBtn.addEventListener("click", function aa (){ updated(i)});
  console.log(mainBtn);
}

function updated(i) {
  console.log("hello");
  console.log(i);

  mainBtn.innerHTML = "add product";
  // mainBtn.removeEventListener("click", aa);
  mainBtn.addEventListener("click", addproduct);
}

// 1- change mainBtn name
// 2- put update function into button
