

let Show_result = document.getElementById('display-information');

var Employee_first_name;
let Employee_last_name;
let Employee_email;
let Employee_address;
let Employee_status;
let Employee_degree;




var timerId;
function throttleFunction(func, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
        func();
    }, delay);
}


async function first_name() {
    let name = document.querySelector('#first-name').value;

    if (name <= 0) {
        return false;
    }
    console.log("First Name:", name);
    let First_Name = document.createElement('span')
    First_Name.innerHTML = "Name: " + name + " ";

    Show_result.append(First_Name);
    Employee_first_name = name;

}

async function last_name() {
    let name = document.querySelector('#last-name').value;

    if (name <= 0) {
        return false;
    }
    console.log("Last Name:", name);
    Employee_last_name = name;

    let Last_Name = document.createElement('span')
    Last_Name.innerHTML = name + "<br>";

    Show_result.append(Last_Name);
}

async function email() {
    let email = document.getElementById('Email').value;

    if (email <= 0) {
        return false;
    }
    console.log("Email:", email);
    let Email = document.createElement('span')
    Email.innerHTML = "Email: " + email + "<br>";

    Show_result.append(Email);
    Employee_email = email;
}

async function address() {
    let address = document.getElementById('permanent-address').value;

    if (address <= 0) {
        return false;
    }
    console.log("Address:", address);
    let Address = document.createElement('span')
    Address.innerHTML = "Address: " + address + "<br>";

    Show_result.append(Address);
    Employee_address = address;
}

async function single() {
    let Single_status = document.getElementById('Single-status').value;

    if (Single_status <= 0) {
        return false;
    }
    console.log("Single status:", Single_status);
    let single = document.createElement('span')
    single.innerHTML = "Status: " + Single_status + "<br>";

    Show_result.append(single);
    Employee_status = Single_status;
}

async function Married() {
    let Married_status = document.getElementById('Married-status').value;

    if (Married_status <= 0) {
        return false;
    }
    console.log("Married status:", Married_status);
    let married = document.createElement('span')
    married.innerHTML = "Status: " + Married_status + "<br>";

    Show_result.append(married);
    Employee_status = Married_status;
}

async function Divorced() {
    let Divorced_status = document.getElementById('Divorced-status').value;

    if (Divorced_status <= 0) {
        return false;
    }
    console.log("Divorced status:", Divorced_status);
    let divorced = document.createElement('span')
    divorced.innerHTML = "Status: " + Divorced_status + "<br>";

    Show_result.append(divorced);
    Employee_status = Divorced_status;
}

async function education() {
    let Degree = document.getElementById('degree').value;

    if (Degree <= 0) {
        return false;
    }
    console.log("Degree :", Degree);
    let degree = document.createElement('span')
    degree.innerHTML = "Degree: " + Degree + "<br>";

    Show_result.append(degree);
    Employee_degree = Degree;
}

let information_array =JSON.parse(localStorage.getItem("employee_information")) || [];

let information = document.getElementById('Save_information');
information.addEventListener('click', saveAll);

function saveAll() {

    const employee_details = {
        first_name: Employee_first_name,
        last_name: Employee_last_name,
        email: Employee_email,
        address: Employee_address,
        martial_status: Employee_status,
        degree: Employee_degree,
    }

    information_array.push(employee_details);
    localStorage.setItem("employee_information", JSON.stringify(information_array));

    document.getElementById('first-name').value = " ";
    document.getElementById('first-name').value = " ";
    document.getElementById('last-name').value = " ";
    document.getElementById('Email').value = " ";
    let unchecked_single = document.getElementById('Single-status');
    unchecked_single.checked = false;
    let unchecked_married = document.getElementById('Married-status');
    unchecked_married.checked = false;
    let unchecked_divorced = document.getElementById('Divorced-status');
    unchecked_divorced.checked = false;
    document.getElementById('degree').value = " ";
    document.getElementById('permanent-address').value = " ";

    Show_result.innerHTML = " ";
}

document.getElementById('Submit-button').addEventListener('click', function submit(){
    window.location.href = "viewform.html"
});