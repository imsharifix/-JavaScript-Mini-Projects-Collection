const sliderTitle = document.querySelector("#slider-title");

// Swiper Init
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      updateSliderTitle(this); // نمایش متن اولیه
    },
    slideChange: function () {
      updateSliderTitle(this); // هنگام تغییر اسلاید
    },
  },
});

// تابع بروزرسانی عنوان
function updateSliderTitle(swiperInstance) {
  const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
  const title = currentSlide.getAttribute("data-title") || "بدون عنوان";
  sliderTitle.textContent = title;
}
