// let Images = JSON.parse(localStorage.getItem('images'));

let Images = [
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  
let main_view = document.getElementById("gallery-view");


let div1 = document.createElement("div"); //(left side) div holds the and display all the images from array together
div1.setAttribute('id','gallery-image');

let display_image = document.createElement("div"); // (Right Side) div to hold and display images in bigger size. 
display_image.setAttribute('class','display-right-side');

let default_image = document.createElement("img"); // to show default 1st image in the array
default_image.src = Images[0];


let lense = document.createElement('div');
lense.setAttribute('class','rect');
lense.setAttribute('id','rect');

display_image.append(lense);
display_image.append(default_image);

Images.forEach(function (el) {
  
  let image = document.createElement("img");
  image.src = el;
  image.setAttribute('class','thumbnails');
  div1.append(image);
});

main_view.append(div1);

let thumbnails = document.getElementById('gallery-image');
thumbnails.addEventListener('click', function(e) {
if(e.target.classList.contains('thumbnails')){
  let source_link = e.target.src;
  showImage(source_link);
}
});


function showImage(source_link){  
  display_image.innerHTML = " ";
  
  let image1 = document.createElement("img");
  image1.src = source_link;
  display_image.append(image1);
}

main_view.append(display_image);


