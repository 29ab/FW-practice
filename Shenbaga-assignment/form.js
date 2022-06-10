
let Show_result = document.getElementById('display-information');

function inputFirstName() {

    let name = document.querySelector('#first-name').value;
    document.getElementById('fname').innerHTML = name;
    Employee_first_name = name;
}

function inputLastName() {
    let lname = document.getElementById('last-name').value;
    document.getElementById('lname').innerHTML = lname;
}

function inputEmail() {
    let email = document.getElementById('Email').value;
    document.getElementById('display-email').innerHTML = email;
}

function inputAddress() {
    let address = document.getElementById('permanent-address').value;
    document.getElementById('display-address').innerHTML = address;
}

function inputStatusS() {
    let status = document.getElementById('Single-status').value;
    document.getElementById('display-maritalStatus').innerHTML = status;
}

function inputStatusM() {
    let status = document.getElementById('Married-status').value;
    document.getElementById('display-maritalStatus').innerHTML = status;
}

function inputStatusD() {
    let status = document.getElementById('Divorced-status').value;
    document.getElementById('display-maritalStatus').innerHTML = status;
}

function inputDegree() {
    let degree = document.getElementById('degree').value;
    document.getElementById('display-degree').innerHTML = degree;
}


document.getElementById('Submit-button').addEventListener('click', function () {

    let Employee_first_name = document.getElementById('fname').innerHTML;
    let Employee_last_name = document.getElementById('lname').innerHTML;;
    let Employee_email = document.getElementById('display-email').innerHTML;;
    let Employee_address = document.getElementById('display-address').innerHTML;;
    let Employee_status = document.getElementById('display-maritalStatus').innerHTML;;
    let Employee_degree = document.getElementById('display-degree').innerHTML;;

    const employee_details = {
        first_name: Employee_first_name,
        last_name: Employee_last_name,
        email: Employee_email,
        address: Employee_address,
        martial_status: Employee_status,
        degree: Employee_degree,
    }

    localStorage.setItem("employee_information", JSON.stringify(employee_details));
    
    document.querySelector('#first-name').value = " "
    document.getElementById('last-name').value = " ";
    document.getElementById('Email').value = " ";
    document.getElementById('permanent-address').value = " ";
    document.getElementById('Single-status').checked = false;
    document.getElementById('Married-status').checked = false;
    document.getElementById('Divorced-status').checked = false;
    document.getElementById('degree').value = " ";

    Show_result.innerHTML = " ";

    window.location.href = "viewform.html";
});
