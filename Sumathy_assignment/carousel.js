let images = [
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
  
    let container = document.getElementById("mySlideshow");
    container.addEventListener('click', function(){
      window.location.href = "image_gallery.html";
    })
    
    // container.addEventListener('mouseover', function(){
    //     startSlideshow();
    //   })

      startSlideshow();
  
    function startSlideshow() {
  
      let counter = 0;
  
      let interval = setInterval(function () {
  
        // container.innerText = 
        let div = document.createElement("div");
        div.setAttribute("class", "w3-animate-right")
  
        if (counter === images.length) {
          counter = 0;
        }
  
        let img = document.createElement("img");
        img.src = images[counter];
        div.append(img);
  
        container.append(div);
  
        counter = counter + 1;
      }, 2000);
    }
  
    localStorage.setItem('images',JSON.stringify(images));
  