const customerList = [];
const itemList = [];

function addCustomerBtn() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let customer = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    customerList.push(customer);
    console.log(customerList);

    
}

function addItemBtn() {
    let itemName = document.getElementById("itemName").value;
    let itemPrice = document.getElementById("itemPrice").value;
    let itemQuantity = document.getElementById("itemQuantity").value;

    let item = {
        itemName: itemName,
        itemPrice: itemPrice,
        itemQuantity: itemQuantity
    };  

    itemList.push(item);
    console.log(item);
}