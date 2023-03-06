let parent = document.querySelector(".parent");
let button = document.querySelectorAll("ul li");
let photos = document.querySelector(".photos");
let pop = document.querySelector(".pop");
button.forEach((el) => {
  el.addEventListener("click", (e) => {
    button.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.currentTarget.dataset.id == "shoe") {
      photos.innerHTML = `
      <div class="all shoe"><img src="./images/shoe-1.jpg"   data-ca="shoe" onclick="clicking(this)" alt=""></div>
      <div class="all shoe"><img src="./images/shoe-2.jpg"  data-ca="shoe" onclick="clicking(this)"  alt=""></div>`;
    } else if (e.currentTarget.dataset.id == "bag") {
      photos.innerHTML = `
     <div class="all bag"><img src="./images/bag-1.jpg"  data-ca="bag" onclick="clicking(this)" alt=""></div>`;
    } else if (e.currentTarget.dataset.id == "watch") {
      photos.innerHTML = `
     <div class="all watch"><img src="./images/watch-1.jpg"  data-ca="watch" onclick="clicking(this)" alt=""></div>`;
    } else if (e.currentTarget.dataset.id == "headphone") {
      photos.innerHTML = `
      <div class="all headphone"><img src="./images/headphone-1.jpg"  data-ca="headphone" onclick="clicking(this)"  alt=""></div>
      <div class="all headphone"><img src="./images/headphone-2.jpg"  data-ca="headphone" onclick="clicking(this)"  alt=""></div>`;
    } else if (e.currentTarget.dataset.id == "camera") {
      photos.innerHTML = `
      <div class="all camera"><img src="./images/camera-1.jpg"  data-ca="camera" onclick="clicking(this)" alt=""></div>
      <div class="all camera"><img src="./images/camera-2.jpg"  data-ca="camera" onclick="clicking(this)" alt=""></div>
      `;
    } else if (e.currentTarget.dataset.id == "all") {
      photos.innerHTML = `
      <div class="all bag"><img src="./images/bag-1.jpg"  data-ca="bag" onclick="clicking(this)" alt=""></div>
      <div class="all camera"><img src="./images/camera-1.jpg"  data-ca="camera" onclick="clicking(this)" alt=""></div>
      <div class="all camera"><img src="./images/camera-2.jpg"  data-ca="camera" onclick="clicking(this)" alt=""></div>
      <div class="all headphone"><img src="./images/headphone-1.jpg"  data-ca="headphone" onclick="clicking(this)" alt=""></div>
      <div class="all headphone"><img src="./images/headphone-2.jpg" data-ca="headphone"  onclick="clicking(this)" alt=""></div>
      <div class="all shoe"><img src="./images/shoe-1.jpg" data-ca="shoe"  onclick="clicking(this)"  alt=""></div>
      <div class="all shoe"><img src="./images/shoe-2.jpg"  data-ca="shoe" onclick="clicking(this)" alt=""></div>
      <div class="all watch"><img src="./images/watch-1.jpg" data-ca="watch"  onclick="clicking(this)" alt=""></div>`;
    }
  });
});

function clicking(e) {
  parent.style.overflow = "hidden";
  parent.style.background = "white";
  parent.style.filter = "brightness(0.4)";
  pop.style.display = "flex";
  pop.children[0].children[0].children[0].innerHTML = `${e.dataset.ca}`;
  pop.children[1].src = `${e.src}`;
  document.querySelector(".close").addEventListener("click", () => {
    parent.style.overflow = "auto";
    parent.style.background = "white";
    pop.style.display = "none";
    parent.style.filter = "brightness(1)";
  });
}
