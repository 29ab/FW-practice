// let Images = JSON.parse(localStorage.getItem('images'));

let Images = [
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

let main_view = document.getElementById("gallery-view");


let div1 = document.createElement("div"); //(left side) div holds the and display all the images from array together
div1.setAttribute('id', 'gallery-image');

let display_image = document.createElement("div"); // (Right Side) div to hold and display images in bigger size. 
display_image.setAttribute('class', 'display-right-side');
display_image.addEventListener('mousemove', function () {
  move(event)
})

let default_image = document.createElement("img"); // to show default 1st image in the array
default_image.src = Images[0];

var lense = document.createElement('div');
lense.setAttribute('class', 'rect');
lense.setAttribute('id', 'rect');

// display_image.append(lense);
display_image.append(lense,default_image);

Images.forEach(function (el) {

  let image = document.createElement("img");
  image.src = el;
  image.setAttribute('class', 'thumbnails');
  div1.append(image);
});

main_view.append(div1);

let thumbnails = document.getElementById('gallery-image');
thumbnails.addEventListener('click', function (e) {
  if (e.target.classList.contains('thumbnails')) {
    let source_link = e.target.src;
    showImage(source_link);
  }
});

function showImage(source_link) {
  display_image.innerHTML = " ";

  let image1 = document.createElement("img");
  image1.src = source_link;
  display_image.append(lense,image1);

}

main_view.append(display_image);

let h1 = display_image.offsetHeight;
let w1 = display_image.offsetWidth;
// console.log(w1,h1);

let w2 = rect.offsetWidth;
let h2 = rect.offsetHeight;
w2 = w2 / 2;
h2 = h2 / 2;

// coordinate 
let x, y;

// moving the selector box;
function move(event) {
  x = event.offsetX;
  y = event.offsetY;

  if (x < w2) {
    x = w2;
  }

  if (x > w1 - w2) {
    x = w1 - w2;
  }

  if (y < h2) {
    y = h2;
  }

  if (y > h1 - h2) {
    y = h1 - h2;
  }
  // console.log(x,y);
  rect.style.left = x + "px";
  rect.style.top = y + "px";
}

let  zoomed_view = document.createElement('div');
zoomed_view.setAttribute('class', 'zoom');
zoomed_view.setAttribute('id', 'zoom');
main_view.append(zoomed_view);

