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

    let customerBody = `
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
    `

    for(let customers of customerList) {
        customerBody += `
            <tr>
                <td>${customers.name}</td>
                <td>${customers.address}</td>
                <td>${customers.email}</td>
                <td>${customers.phone}</td>
            </tr>
        `;
    }

    document.getElementById("customerTable").innerHTML = customerBody;
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

    let itemBody = `
        <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
        </tr>
    `

    for(let items of itemList) {
        itemBody += `
            <tr>
                <td>${items.itemName}</td>
                <td>${items.itemPrice}</td>
                <td>${items.itemQuantity}</td>
            </tr>
        `;
    }

    document.getElementById("itemTable").innerHTML = itemBody;
}