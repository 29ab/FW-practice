let form_data = [];

function formData() {
    let Employee_name = document.getElementById('full_name').value;
    let Employee_email = document.getElementById('Email').value;
    let Employee_address = document.getElementById('permanent-address').value;
    let Employee_roles = document.getElementById('roles').value;

    let unique_No = Date.now() + Math.floor(Math.random() * 10);

    const employee_details = {
        id: unique_No,
        name: Employee_name,
        email: Employee_email,
        address: Employee_address,
        roles: Employee_roles,
    }

    let repeated_data = JSON.parse(localStorage.getItem('sortedList'));


    if (repeated_data == null || repeated_data === undefined) {
        form_data.push(employee_details);
        localStorage.setItem("sortedList", JSON.stringify(form_data));
    }
    else {
        // form_data.push(employee_details);
        repeated_data.push(employee_details);
        localStorage.setItem("sortedList", JSON.stringify(repeated_data));
    }

    document.getElementById('full_name').value = " ";
    document.getElementById('Email').value = " ";
    document.getElementById('permanent-address').value = " ";
    document.getElementById('roles').value = " ";

}

function GotoViewPage(){
    window.location.href = "sortable.html";
}