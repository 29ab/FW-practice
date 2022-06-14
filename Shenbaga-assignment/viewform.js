let data = JSON.parse(localStorage.getItem('employee_information'));

let Show_result = document.getElementById('viewform');

let details = document.createElement('div');
details.setAttribute('class', 'employee_details');

let First_Name = document.createElement('span')
First_Name.innerHTML ="Name: " + data.first_name;

let Last_Name = document.createElement('span');
Last_Name.innerHTML = " " + data.last_name;

let Email = document.createElement('p');
Email.innerHTML ="<span>Email: <span>" + data.email;

let Address = document.createElement('span');
Address.innerHTML = "Address: " + data.address;

let Martial = document.createElement('p');
Martial.innerHTML ="<span>Martial Status: <span>" +  data.martial_status;

let Degree = document.createElement('p');
Degree.innerHTML ="<span>Degree: <span>"  + data.degree;

details.append(First_Name, Last_Name,Email, Address, Martial, Degree);

Show_result.append(details);
