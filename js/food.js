var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "./data/food.json", true);
xmlHttp.send();
xmlHttp.onreadystatechange = function () {
  if (this.status == 200 && this.readyState==4) {
    const data = xmlHttp.responseText;
    const result = JSON.parse(data);


    const list = document.querySelector(".swiper-wrapper");

    result.data.forEach((item, index) => {
      list.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide">
            <div class="inner">
              <div class="con">
              <img src="${item.img_src}"/>
              <h2>${item.title}</h2>
              <p>${item.contents}</p>
              </div>
          </div>
        </div>`
      );
    });

    const swiper = new Swiper(".wrap", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 50,

      effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
      },

      slidesPerView: "auto",
      grabCursor: true,
      centeredSlides: true,
      speed: 1000,

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    const btnStart = document.querySelector(".btnStart");
    const btnStop = document.querySelector(".btnStop");

    btnStart.addEventListener("click", () => {
      swiper.autoplay.start();
    });

    btnStop.addEventListener("click", () => {
      swiper.autoplay.stop();
    });
  }
};
