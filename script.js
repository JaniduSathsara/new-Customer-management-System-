const customerList = [];

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