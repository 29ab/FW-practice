let Images = JSON.parse(localStorage.getItem('images'));
    
let main_view = document.getElementById("gallery-view");

let div = document.createElement("div"); // div holds the and display all the images from array together
div.setAttribute('class','gallery-image');

let display_image = document.createElement("div"); // div to hold and display images in bigger size. 
display_image.setAttribute('class','display-big-image');

let default_image = document.createElement("img"); // to show default 1st image in the array
default_image.src = Images[0];
display_image.append(default_image)

Images.forEach(function (el) {
    
    let image = document.createElement("img");
    image.src = el;
    div.append(image);

    image.addEventListener('click',function(){
        showImage(el);
    });

    image.addEventListener('mouseover',function(){
        showImage(el);
    })
   
});

function showImage(ele){
    console.log('Element:=',ele)
    display_image.innerHTML = " ";
    let image1 = document.createElement("img");
    image1.src = ele;
    display_image.append(image1)
}

main_view.append(div,display_image);