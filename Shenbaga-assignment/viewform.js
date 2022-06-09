let data = JSON.parse(localStorage.getItem('employee_information'));

console.log("data:-", data);

let Show_result = document.getElementById('stored_form');




data.forEach((element) => {
    console.log(element.first_name);

    let Name = document.createElement('div');
    Name.setAttribute('class', 'employee_details');
    // Name.innerHTML = "<span>Name: </span>";

    let First_Name = document.createElement('span')
    First_Name.innerHTML = element.first_name;
    let Last_Name = document.createElement('span');
    Last_Name.innerHTML = " " + element.last_name;

    Name.append(First_Name,Last_Name);
    Show_result.append(Name);
})



//
// let Mid_Name = document.createElement('span');
// Mid_Name.innerHTML = data.middle_name;


// // console.log(First_Name);
// Name.append(First_Name, Mid_Name, Last_Name);

// let Contact_details = document.createElement('div');
// Contact_details.innerHTML = "<span>Contact Details: </span>";
// let Mobile = document.createElement('span');
// Mobile.innerHTML ="<br>" +"<span>Mobile: <span>" + data.mobile_number;
// let DOB = document.createElement('span');
// DOB.innerHTML ="<br>" +"<span>DOB: <span>" + data.dob;
// let Email = document.createElement('span');
// Email.innerHTML = "<br>" +"<span>Email: <span>" +data.email;

// Contact_details.append(Mobile, DOB, Email);

// let Address = document.createElement('div');
// Address.innerHTML = "<span>Address: <span>"

// let Address_street1 = document.createElement('span');
// Address_street1.innerHTML = data.address;

// let city = document.createElement('span');
// city.innerHTML = data.city
// let state = document.createElement('span');
// state.innerHTML = data.state;
// let pin = document.createElement('span');
// pin.innerHTML = data.pin_code;

// // console.log(Address)
// Address.append(Address_street1, city, state, pin);

// let Martial = document.createElement('p');
// Martial.innerHTML = "<span>Martial Status: <span>" +  data.martial_status;


// let Education = document.createElement('div');
// Education.innerHTML = "<span> Education: <span>"

// let school_name = document.createElement('span');
// school_name.innerHTML = "<br>"+ "<span>School: <span>" + data.school;

// let highSchool_name = document.createElement('span');
// highSchool_name.innerHTML ="<br>"+ "<span>High School: <span>"  + data.high_school;

// let degree_have = document.createElement('span');
// degree_have.innerHTML ="<br>"+ "<span>Degree: <span>"  + data.degree;

// Education.append(school_name, highSchool_name, degree_have);

