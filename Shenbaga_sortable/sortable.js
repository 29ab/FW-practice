let lists = document.getElementById("sortable");

    let retrived_items = JSON.parse(localStorage.getItem('sortedList'));

    if (retrived_items === null) {
        console.log("Nothing in localstorage");
    }
    else {
        lists.innerHTML = " ";
        retrived_items.forEach(function (Elements) {
            
            let unique_id = Elements.id;

            let element_div = document.createElement('div');
            element_div.setAttribute("class", "items")
            element_div.setAttribute("id", unique_id)

            let name = document.createElement('span');
            name.innerHTML = Elements.name;
            name.setAttribute("class", "names")

            // let email = document.createElement('span');;
            // email.innerHTML = Elements.email + ", ";

            // let address = document.createElement('span');
            // address.innerHTML = Elements.address + ", ";

            // let workRole = document.createElement('span');
            // workRole.innerHTML = Elements.roles;

            element_div.append(name);

            lists.append(element_div);

        });

    }


    $(function () {
        $("#sortable").sortable({
            stop: function (event, ui) {

                var array = [];
                let sorting = document.querySelectorAll("div > div");
                console.log(sorting);

                sorting.forEach(function (el){
                    let Id = el.getAttribute('id');
                    let Name = el.innerText;
                    console.log(Id, Name);
                    let obj = {
                        id:Id,
                        name:Name,
                    }
                    console.log("Object", obj)
                    array.push(obj);
                })
                // console.log("array",array);
                
                localStorage.setItem("sortedList", JSON.stringify(array));
            }
        });
    });