
let Show_result = document.getElementById('display-information');

let Employee_FName = document.querySelector('#first-name');
let dbounce_Employee_Fname = document.getElementById('fname');

const UpdatedVlaue = () => {
    dbounce_Employee_Fname.innerHTML = Employee_FName.value;
}

let debounceTimer;
const debounce = (callback,time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback,time)
} 

Employee_FName.addEventListener('input',()=> {
    debounce(UpdatedVlaue,200);
},false);


let Employee_lname = document.getElementById('last-name');
let debounceLname = document.getElementById('lname');

const UpdatedVlaueLname = () => {
    debounceLname.innerHTML = Employee_lname.value;
}

let debounceTimerLName;
const debounceforLName = (callback,time) => {
    window.clearTimeout(debounceTimerLName);
    debounceTimerLName = window.setTimeout(callback,time)
} 

Employee_lname.addEventListener('input',()=> {
    debounceforLName(UpdatedVlaueLname,200);
},false);


let Employee_Email = document.getElementById('Email');
let debouncedEmail = document.getElementById('display-email');

Employee_Email.addEventListener('input', () => {
    debounceForEmail(updateEmail,200);
},false)

let debounceTimerEmail;
const debounceForEmail = (callback,time) => {
    window.clearTimeout(debounceTimerEmail);
    debounceTimerEmail = window.setTimeout(callback,time);
}

const updateEmail = () => {
    debouncedEmail.innerHTML = Employee_Email.value;
}


let Employee_Address = document.getElementById('permanent-address');
let debouncedAdderss = document.getElementById('display-address');

Employee_Address.addEventListener('input',()=>{
    debounceforAddress(UpdatedAddress,200);
},false)

let debounceAddressTimer;
const debounceforAddress = (callback,time) =>{
    window.clearTimeout(debounceAddressTimer);
    debounceAddressTimer = window.setTimeout(callback,time);
}

const UpdatedAddress = () => {
    debouncedAdderss.innerHTML = Employee_Address.value;
}

let Employee_Single = document.getElementById('Single-status');
let debouncedSingle = document.getElementById('display-maritalStatus');

Employee_Single.addEventListener('input',()=>{
    debouncedforSingleStatus(UpdatedSingleStatus,200);
},false);

let debounceSingleStatusTimer;
const debouncedforSingleStatus = (callback,time) => {
    window.clearTimeout(debounceSingleStatusTimer);
    debounceSingleStatusTimer = window.setTimeout(callback,time);
}

const UpdatedSingleStatus = () =>{
    debouncedSingle.innerHTML = Employee_Single.value;
};

let Employee_Married = document.getElementById('Married-status');
let debouncedMarried = document.getElementById('display-maritalStatus');

Employee_Married.addEventListener('input',()=>{
    debouncedforMarriedStatus(UpdatedMarriedStatus,200);
},false);

let debounceMarriedStatusTimer;
const debouncedforMarriedStatus = (callback,time) => {
    window.clearTimeout(debounceMarriedStatusTimer);
    debounceMarriedStatusTimer = window.setTimeout(callback,time);
}

const UpdatedMarriedStatus = () =>{
    debouncedMarried.innerHTML = Employee_Married.value;
};


let Employee_Divorced = document.getElementById('Divorced-status');
let debouncedDivorced = document.getElementById('display-maritalStatus');

Employee_Divorced.addEventListener('input',()=>{
    debouncedforDivorcedStatus(UpdatedDivorcedStatus,200);
},false);

let debounceDivorcedStatusTimer;
const debouncedforDivorcedStatus = (callback,time) => {
    window.clearTimeout(debounceDivorcedStatusTimer);
    debounceDivorcedStatusTimer = window.setTimeout(callback,time);
}

const UpdatedDivorcedStatus = () =>{
    debouncedDivorced.innerHTML = Employee_Divorced.value;
};

let Employee_Degree = document.getElementById('degree');

let debouncedDegree = document.getElementById('display-degree');

Employee_Degree.addEventListener('change',()=> {
    console.log("change",Employee_Degree.value)
    debouncedforDegree(UpdatedDegree,200);
},false)

let debouncedDegreeTimer;
let debouncedforDegree = (callback,time)=> {
    window.clearTimeout(debouncedDegreeTimer);
    debouncedDegreeTimer = window.setTimeout(callback,time); 
}

const UpdatedDegree = ()=> {
    debouncedDegree.innerHTML = Employee_Degree.value;
}

document.getElementById('Submit-button').addEventListener('click', function(){
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

    window.location.href = "viewform.html";
})